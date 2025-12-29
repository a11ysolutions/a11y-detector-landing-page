export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  // Ignorar warnings de sintaxis CSS que no afectan la funcionalidad
  warn: (warning) => {
    if (warning.text && warning.text.includes('Unexpected')) {
      return false; // Ignorar warnings sobre caracteres especiales
    }
    return true;
  }
}
