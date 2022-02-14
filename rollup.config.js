import typescript from '@rollup/plugin-typescript';

export default {
  input: 'index.ts',
  output: {
    name: 'inav-dump-parser',
    dir: 'dist',
    format: 'umd',
    globals: [
      'readline', 'stream'
    ]
  },
  plugins: [ typescript() ],
}
