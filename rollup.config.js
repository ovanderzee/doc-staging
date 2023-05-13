import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

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
    esbuild()
  ]
}, {
  input: "src/index.ts",
  output: {
    file: "types/index.d.ts",
    format: "es",
  },
  plugins: [dts()]
}]
