const path = require('path');
const esbuild = require('esbuild');
const fs = require("fs");

// the tsconfig to use in here will be slightly modified the reason is that we want
// to affect the typescript compiler not to import from nodejs folders
const tsConfig = JSON.parse(fs.readFileSync("../tsconfig.json", "utf-8"));
delete tsConfig.compilerOptions.paths;
tsConfig.compilerOptions.target = "es5";
tsConfig.compilerOptions.module = "commonjs";
tsConfig.compilerOptions.esModuleInterop = true;

const IGNORES = [
  {
    resourceRegExp: /^path$/,
  },
  {
    resourceRegExp: /^stream$/,
  },
  {
    resourceRegExp: /^fs$/,
  },
  {
    resourceRegExp: /^jsdom$/,
  },
];

// process to build the cache worker and the main app
const build = esbuild.build({
  entryPoints: [
    './example1.tsx',
    './example2.tsx',
    './example3.tsx',
    './example4.tsx',
    './example5.tsx',
  ],
  entryNames: "[name]",
  sourcemap: 'inline',
  minify: false,
  define: {
    'process.env.NODE_ENV': JSON.stringify("development"),
  },
  bundle: true,
  outdir: path.resolve(path.join('dist')),
  logLevel: "info",
  splitting: true,
  format: "esm",
  publicPath: "/dist",
  loader: {
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.svg': 'text',
    '.css': 'css',
    '.ts': 'ts',
    '.tsx': "tsx",
  },
  // commons file name
  chunkNames: 'commons-[hash]',
  target: ['chrome60', 'firefox60', 'safari11', 'edge18'],
  // modified tsconfig
  tsconfigRaw: JSON.stringify(tsConfig),

  plugins: [
    // based on https://github.com/Knowre-Dev/esbuild-plugin-ignore/blob/main/index.js
    {
      name: 'ignore',
      setup (build) {
        build.onResolve({ filter: /.*/, namespace: 'ignore' }, args => ({
          path: args.path,
          namespace: 'ignore'
        }))
        for (const ignorePattern of IGNORES) {
          build.onResolve({ filter: ignorePattern.resourceRegExp }, args => {
            if (args.resolveDir.match(ignorePattern.contextRegExp)) {
              return {
                path: args.path, namespace: 'ignore'
              }
            } else {
              return {
                path: args.path
              }
            }
          })
        }
    
        build.onLoad({ filter: /.*/, namespace: 'ignore' }, () => ({
          contents: ''
        }))
      }
    }
  ]
});

// first let's build the service worker
build.then(() => {
  console.log("DONE");
}).catch((err) => console.error(err.stack));