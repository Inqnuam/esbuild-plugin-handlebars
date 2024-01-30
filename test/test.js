// basic runtime test

const esbuild = require("esbuild");
const handlebarsPlugin = require("../dist");

const esBuildConfig = {
  bundle: true,
  minify: true,
  platform: "node",
  target: "es6",
  outdir: "./test/dist",
  entryPoints: ["./test/index.ts"],
  plugins: [
    handlebarsPlugin({
      additionalPartials: {
        childTemplate: "./child.hbs",
      },
    }),
  ],
};

const hbsProp = {
  people: ["Yehuda Katz", "Alan Johnson", "Charles Jolley"],
  items: ["item 1", "item 2", "item 3"],
};

esbuild
  .build(esBuildConfig)
  .then(() => {
    const compiledTemplate = require("./dist/index.js");

    console.log(compiledTemplate(hbsProp));
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
