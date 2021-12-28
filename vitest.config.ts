/// <reference types="vitest"/>
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    global: true,
    environment: 'node',
    include: ['__tests__/**/*.spec.ts'],
    exclude: ['node_modules']
  }
})
