// rollup.config.js
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
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
    resolve(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    commonjs(),
    terser(),
  ]
}
