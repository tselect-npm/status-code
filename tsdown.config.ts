import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  // Kept at ES2015 deliberately: the emitted syntax level is the one half of the
  // support policy that is still strictly additive, so it must never rise above
  // what tsc's `target: es6` produced before. CI asserts this with es-check.
  target: 'es2015',
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
});
