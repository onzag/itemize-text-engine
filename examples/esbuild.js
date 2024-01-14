const path = require('path');
const esbuild = require('esbuild');
const fs = require("fs");

// the tsconfig to use in here will be slightly modified the reason is that we want
// to affect the typescript compiler not to import from nodejs folders
const tsConfig = JSON.parse(fs.readFileSync("./tsconfig.json", "utf-8"));
delete tsConfig.compilerOptions.paths;
tsConfig.compilerOptions.target = "es5";
tsConfig.compilerOptions.module = "commonjs";
tsConfig.compilerOptions.esModuleInterop = true;

// process to build the cache worker and the main app
const build = esbuild.build({
  entryPoints: [
    './example1.tsx',
    './example2.tsx',
  ],
  entryNames: "[name]." + mode,
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
  loader: {
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.svg': 'text',
    '.css': 'css',
    '.ts': 'ts',
    '.tsx': "tsx",
  },
  // commons file name
  chunkNames: 'commons.' + mode,
  target: ['chrome60', 'firefox60', 'safari11', 'edge18'],
  // modified tsconfig
  tsconfigRaw: JSON.stringify(tsConfig),
});

// first let's build the service worker
build.then(() => {
  console.log("DONE");
}).catch((err) => console.error(err.stack));