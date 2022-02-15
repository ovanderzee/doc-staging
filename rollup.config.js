// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts';

const name = "documentStaging";

export default [{
  input: 'src/index.ts',
  output: [{
    file: 'dist/index.js',
    format: 'umd',
    name: name,
    sourcemap: true,
  }, {
    file: 'dist/index.esm.js',
    format: 'esm',
    name: name,
    sourcemap: true,
  }],
  plugins: [
    typescript(),
    terser(),
  ]
}, {
  input: "src/index.ts",
  output: {
    file: "types/index.d.ts",
    format: "es",
  },
  plugins: [dts()]
}]
