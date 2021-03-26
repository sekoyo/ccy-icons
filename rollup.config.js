/* eslint-env node */
import replace from '@rollup/plugin-replace'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

import { iconsToComponents } from './iconsToComponents'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
}
const external = ['react', 'react-dom']
const extensions = ['.ts', '.tsx']
const isProd = process.env.NODE_ENV === 'production'

const output = [
  {
    file: 'dist/index.js',
    format: 'esm',
    globals,
  },
]

if (isProd) {
  output.push({
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'ccyIcons',
    globals,
  })
}

export default {
  input: 'src/index.tsx',
  output,
  external,
  plugins: [
    isProd &&
      replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        },
      }),
    commonjs(),
    nodeResolve({
      extensions,
    }),
    typescript(),
    iconsToComponents(),
    isProd &&
      terser({
        module: true,
        output: {
          comments: false,
        },
      }),
  ],
}
