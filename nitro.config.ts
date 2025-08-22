export default defineNitroConfig({
  preset: 'cloudflare-workers',
  serveStatic: false,
  noPublicDir: true,
  rollupConfig: {
    external: []
  },
  experimental: {
    wasm: false
  },
  minify: true,
  sourceMap: false,
  timing: false
});
