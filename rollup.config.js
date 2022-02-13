// rollup.config.js
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const name = "documentStaging";

export default {
  input: 'src/index.js',
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
    commonjs(),
    terser(),
  ]
}
