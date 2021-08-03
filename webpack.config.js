const path = require('path');

module.exports = {
  entry: './src/dropdown.js',
  output: {
    filename: 'example.js',
    path: path.resolve(__dirname, 'example'),
  },
};