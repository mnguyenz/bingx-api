import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/types.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
});