# esbuild-plugin-handlebars

> **This is a fork of [https://github.com/Inqnuam/esbuild-plugin-handlebars](https://github.com/Inqnuam/esbuild-plugin-handlebars) and should be deprecated as soon as [https://github.com/Inqnuam/esbuild-plugin-handlebars/pull/2](https://github.com/Inqnuam/esbuild-plugin-handlebars/pull/2) is merged.**

> an [esbuild](https://github.com/evanw/esbuild) plugin to handle ... handlebars!

## Installation

```bash
yarn add --exact -D @homegate/esbuild-plugin-handlebars
```

## Usage

```js
const esbuild = require("esbuild");
const handlebarsPlugin = require("esbuild-plugin-handlebars");

esbuild
  .build({
    entryPoints: ["input.js"],
    outfile: "output.js",
    bundle: true,
    plugins: [handlebarsPlugin()],
  })
  .then((result) => console.log(result))
  .catch(() => process.exit(1));
```

You can also set additionalHelpers and precompileOptions:

```js
const hbsOptions = {
        additionalHelpers: {},
        additionalPartials: {},
        precompileOptions: {}
      }

// usual esbuild config
{
 ...
 plugins: [handlebarsPlugin(hbsOptions)],
 ...
}

```
