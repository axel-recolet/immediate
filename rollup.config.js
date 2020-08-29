import commonjs from '@rollup/plugin-commonjs';
 
export default {
  input: 'src/index.js',
  output: /*{
        file: 'lib/index.js',
        format: 'cjs'
    },*/
    {
        file: 'lib/index.es.js',
        format: 'es'
    },
    plugins: [commonjs()]
}; 