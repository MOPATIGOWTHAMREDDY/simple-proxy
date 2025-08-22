import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  preset: 'cloudflare-workers',
  compatibilityDate: '2025-08-22',
  entry: './routes/[...].ts',
  serveStatic: false,
  noPublicDir: true,
  experimental: {
    wasm: false
  },
  rollupConfig: {
    external: []
  },
  minify: true,
  sourceMap: false,
  timing: false,
  routeRules: {
    '/**': { 
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*'
      }
    }
  }
});
