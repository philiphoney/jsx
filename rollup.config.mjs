import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'public/dist/bundle.js',
      format: 'cjs'
    },
    {
      file: 'public/dist/bundle.min.js',
      format: 'cjs',
      plugins: [terser()]
    }
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
};
