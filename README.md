# esbuild-plugin-handlebars

> **This is a fork of [https://github.com/Inqnuam/esbuild-plugin-handlebars](https://github.com/Inqnuam/esbuild-plugin-handlebars)**. 
> 
> It adds two modifications:
> 1. Support for Handlebars partials
> 2. All Handlebars helpers are registered at runtime so they are also available within partials. 

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
