/**
 * Sends production `*.pages.dev` traffic to the canonical custom domain.
 *
 * Every Pages project keeps a public `<project>.pages.dev` hostname that cannot
 * be switched off, and it lives in Cloudflare's zone rather than ours — so the
 * WAF rules on `a11ysolutions.com` do not apply to it. The hostname is not
 * obscure either: it is the CNAME target for our custom domain, so anyone who
 * resolves `detector.a11ysolutions.com` is handed it. That makes it a standing
 * way to reach this site with none of our protections in front.
 *
 * Redirecting rather than blocking keeps an old link working for a human, and
 * puts scanner traffic back inside the zone where the WAF can answer it.
 */

/** The custom domain this project is served from. */
const CANONICAL_HOST = "detector.a11ysolutions.com";

export const onRequest: PagesFunction = async ({ request, next }) => {
  const url = new URL(request.url);
  if (!isProductionPagesDev(url.hostname)) return next();

  url.protocol = "https:";
  url.hostname = CANONICAL_HOST;
  url.port = "";

  // 302, not 301: a permanent redirect is cached by browsers indefinitely and
  // would leave *.pages.dev unreachable for debugging even after this is
  // removed. Nothing here benefits from the redirect being cached.
  return Response.redirect(url.toString(), 302);
};

/**
 * Production is exactly `<project>.pages.dev` — three labels. Preview
 * deployments are `<branch-or-hash>.<project>.pages.dev` and must keep working,
 * or every review URL breaks.
 */
function isProductionPagesDev(hostname: string): boolean {
  return hostname.endsWith(".pages.dev") && hostname.split(".").length === 3;
}
