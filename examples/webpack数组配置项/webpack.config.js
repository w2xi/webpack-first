module.exports = [
  {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: './dist-amd.js',
      libraryTarget: 'amd',
    },
  },
  {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: './dist-commonjs.js',
      libraryTarget: 'commonjs',
    }
  },
  {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: './dist-umd.js',
      libraryTarget: 'umd',
    }
  },
]