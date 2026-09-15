/**
 * Serves large media from R2 instead of from Pages' static assets.
 *
 * The hero video is 55 MB and Cloudflare Pages rejects any single static file
 * over 25 MiB, so it cannot ship in the build output. Streaming it from an R2
 * bucket bound to this project keeps it on the same origin — no second
 * hostname, no CORS, and no DNS record to add.
 *
 * Range requests are handled explicitly: without a 206 response browsers cannot
 * seek within the video, and Safari will not play it at all.
 */

interface Env {
  MEDIA: R2Bucket;
}

export const onRequest: PagesFunction<Env> = async ({ request, params, env }) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method not allowed", { status: 405 });
  }

  const segments = Array.isArray(params.path) ? params.path : [params.path];
  // Keys are stored under videos/ in the bucket; the route already scopes us to
  // /assets/videos/, so rejoin what came after it.
  const key = `videos/${segments.join("/")}`;

  const rangeHeader = request.headers.get("Range");
  const head = await env.MEDIA.head(key);
  if (!head) return new Response("Not found", { status: 404 });

  const headers = new Headers({
    "Content-Type": head.httpMetadata?.contentType ?? "video/mp4",
    // Immutable: the filename changes when the asset does.
    "Cache-Control": "public, max-age=31536000, immutable",
    "Accept-Ranges": "bytes",
    ETag: head.httpEtag,
  });

  if (request.method === "HEAD") {
    headers.set("Content-Length", String(head.size));
    return new Response(null, { status: 200, headers });
  }

  if (rangeHeader) {
    // Only the common "bytes=start-end" / "bytes=start-" form is supported;
    // anything else falls through to a normal 200 with the whole object.
    const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader.trim());
    if (match && (match[1] !== "" || match[2] !== "")) {
      const size = head.size;
      let start: number;
      let end: number;
      if (match[1] === "") {
        // Suffix form: last N bytes.
        const suffix = Number(match[2]);
        start = Math.max(0, size - suffix);
        end = size - 1;
      } else {
        start = Number(match[1]);
        end = match[2] === "" ? size - 1 : Math.min(Number(match[2]), size - 1);
      }
      if (start > end || start >= size) {
        return new Response("Range not satisfiable", {
          status: 416,
          headers: { "Content-Range": `bytes */${size}` },
        });
      }
      const object = await env.MEDIA.get(key, { range: { offset: start, length: end - start + 1 } });
      if (!object) return new Response("Not found", { status: 404 });
      headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
      headers.set("Content-Length", String(end - start + 1));
      return new Response(object.body, { status: 206, headers });
    }
  }

  const object = await env.MEDIA.get(key);
  if (!object) return new Response("Not found", { status: 404 });
  headers.set("Content-Length", String(head.size));
  return new Response(object.body, { status: 200, headers });
};
