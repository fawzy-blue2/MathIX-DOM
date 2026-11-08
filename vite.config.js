import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: `${import.meta.dirname}/src/index.js`,
      name: '@fawzy-blue2/mathix-dom',
      fileName: 'mathix-dom',
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});