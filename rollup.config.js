import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import serve from 'rollup-plugin-serve';

export default {
    input: 'src/main.ts',
    output: [
        {
            file: 'main.js',
            format: 'umd',
            name: 'chartaccess'
        }
    ],
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
      ],
    plugins: [
        typescript(),
        serve()
    ]
  };