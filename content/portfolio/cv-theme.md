---
categories:
  - web-dev
coders: []
date: 2020-09-19T23:00:00.000Z
description: A Hugo theme for CVs
github:
  - "https://github.com/samrobbins85/public-cv"
  - "https://github.com/samrobbins85/cv-theme"
image: /img/portfolio_cover/cv_theme.svg
site: "https://cv.samrobbins.uk/"
title: CV Theme
tech:
  - logo: https://res.cloudinary.com/samrobbins/image/upload/v1600618396/puppeteer_klfg7k.svg
    name: Puppeteer
    url: "https://pptr.dev/"
  - logo: https://res.cloudinary.com/samrobbins/image/upload/v1591793276/logos/logos_hugo_h2xbne.svg
    name: Hugo
    url: "https://gohugo.io/"
  - logo: https://res.cloudinary.com/samrobbins/image/upload/v1597140224/tailwindcss_rnpshz.svg
    name: Tailwind CSS
    url: "https://tailwindcss.com/"
---

For a long time my CV had been produced using LaTeX. This is one of the things LaTeX is designed for as typesetting is very important for a CV. However it had recently been causing frustration as the design wasn't nearly as customisable as the websites I was creating. Also inserting content was tricky as some markup also had to be included, making it more difficult than websites I was producing in Hugo where I could import data from a `.yml` file.

So I started on creating a new Hugo theme for my CV. Using Tailwind CSS and my knowledge from creating previous Hugo sites, this was relatively easy, and being able to use the Golang statements in order to loop the insertion of data was very useful in all the sections. This lead to all the normal sections looking more or less like this:

```html
<section class="pt-2">
  <h2 class="text-xl pb-1">Experience</h2>
  <hr class="py-1" />
  <div class="divide-y-4 divide-transparent">
    {{ range .Site.Data.cv.experience.item }}
    <div class="grid grid-cols-6 gap-x-4">
      <span class="col-span-5"
        ><span class="font-semibold">{{ .position }}</span>{{ if .description }}
        <br /><span class="text-gray-800">{{ .description }}</span>{{ end
        }}</span
      >
      <span class="col-span-1 text-gray-800 italic"
        ><span class="float-left">{{ .date }}</span></span
      >
    </div>
    {{ end }}
  </div>
</section>
```

The difficulty then came in my other aim for this project, for it to automatically produce PDFs of the CV, as this is what most employers will require.

For this I decided to use Puppeteer, as it can produce a PDF from a HTML page. This required a fair amount of customisation from the sample code.

The first problem is that my hosting provider, Vercel, runs as root, and so puppeteer couldn't be run in it's normal fashion, and instead needed running without the sandbox. This was done in the following way:

```js
const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
```

Then came the problem of providing the file to puppeteer, the problem here is that puppeteer is mostly designed to run on a live server, taking a URL. But this would not be possible during the build step, so `path` needed to be used in order to find the correct file. Also puppeteer in it's default state won't wait for external resources to be fetched, and for my CV I use a custom font. Luckily, puppeteer has a `waitUntil` key that allows you to tell it to wait for resources to be fetched

```js
await page.goto(`file:${path.join(__dirname, "public/index.html")}`, {
  waitUntil: "networkidle2",
});
```

Next up was inserting a button on the webpage to take you to the PDF. This is simple, however I didn't want that button to appear in the PDF. Puppeteer alllows you to manipulate the nodes of the webpage using `page.evaluate` so I used this, along with an ID set on the outermost div of the button, to remove the button from the PDF

```js
await page.evaluate(() => {
  let example = document.querySelector("#pdf_link");
  example.parentNode.removeChild(example);
});
```

Finally was producing the PDF, I wanted this to be inserted into `/public` so that it could easily be accessed, and wanted it of A4 size, which is a standard requirement for CVs.

```js
await page.pdf({ path: "public/cv.pdf", format: "A4", scale: 0.8 });
```

The build command was then tweaked to run the file containing the puppeteer code after building the website with the following build command

```json
"scripts": {
    "build": "hugo && node index.js",
    "dev": "hugo server"
  },
```
