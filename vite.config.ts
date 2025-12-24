import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import fs from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  // Important for Windows paths with Cyrillic characters:
  // when running commands from a short (8.3) path, Vite's default root (process.cwd())
  // can differ from real file paths, breaking build output.
  root: fs.realpathSync.native
    ? fs.realpathSync.native(dirname(fileURLToPath(import.meta.url)))
    : fs.realpathSync(dirname(fileURLToPath(import.meta.url))),
  plugins: [react()],
})
