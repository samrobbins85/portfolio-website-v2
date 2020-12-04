+++
date = 2020-12-04T00:00:00Z
description = "Making an NPM package for a React component library with Tailwind CSS"
draft = true
title = "Publishing a React component library with Tailwind CSS"

+++
First you need to make an npm package, this can be done with `npm init` provided you have npm installed on your computer. For the name if you want a scoped package, e.g. `@samrobbins/package`, ensure that the package name follows that structure, otherwise, you can just go with `package`. Remember that these have to be unique, so check npm to ensure you're not overlapping.

The first thing we need is a JavaScript bundler, for this I've chosen rollup, but you could do this with any of them. To install rollup, run

```
npm i rollup
```

The config file for rollup is `rollup.config.js`, so create that file, and we'll start simple with this

```js
export default {
  input: "./index.js",
  output: {
    file: "./output.js",
    format: "cjs",
  },
}
```

This takes the file `index.js` and creates a file `output.js`, with the format of commonjs (`cjs`).

At the time of writing, the postcss plugin we'll use later is only compatible with postcss 7, so we'll install everything for the compatibility version of Tailwind CSS

```sh
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

and create a simple `postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

Then we can initialise Tailwind CSS

```sh
npx tailwindcss init
```

This will create a `tailwind.config.js` file, and we can add to purge whichever folder we're going to put our components in by adding a `purge` key like this

```js
module.exports = {
  purge: ["./components/**/*.js"],
  //...
};
```

Now Tailwind is set up, we want to go back to rollup so it understands what to do with it






