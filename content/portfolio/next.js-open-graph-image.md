+++
categories = ["web-dev"]
coders = []
date = 2020-12-06T00:00:00Z
description = "A tool for generating open graph images made with Next.js"
github = []
image = "https://res.cloudinary.com/samrobbins/image/upload/v1607283146/og_fzgd5b.png"
site = "https://og.samrobbins.uk/"
title = "Next.js Open Graph Image"
[[tech]]
logo = "https://res.cloudinary.com/samrobbins/image/upload/v1600618396/puppeteer_klfg7k.svg"
name = "Puppeteer"
url = "https://pptr.dev/"
[[tech]]
logo = "https://res.cloudinary.com/samrobbins/image/upload/v1597140056/next-black_csivx6.svg"
name = "Next.js"
url = "https://nextjs.org/"
[[tech]]
logo = "https://res.cloudinary.com/samrobbins/image/upload/v1597140224/tailwindcss_rnpshz.svg"
name = "Tailwind CSS"
url = "https://tailwindcss.com/"

+++
This project was heavily inspired by[ og-image](https://og-image.now.sh/), but I wanted to change it in a couple ways. For one the original architecture was somewhat confusing, so I wanted to write it in a way that makes it easy for me to customize it. I also wanted to make it with Next.js, which allows for greater expandability in the future


# API

The place to start was the API, made easy with Next.js as you can just place the functions in the `api` folder. I wanted to create this as a dynamic API route as it makes the interface easier as the title can also be the route. To do this, I used the dynamic route feature of Next.js, by creating the file as `[title].js`. Within the function, I could then use the line

```js
const { query: {title} } = req
```

And this allowd for me to use the `title` variable throughout the rest of my code, and it would be whatever was submitted.

Then came the actual capture of the image, for this I used puppeteer, but due to the size limitation of AWS lambda functions, I had to use the library `chrome-aws-lambda` which brotli compresses the chrome file in order for it to fit within the 50MB limit. An interesting future expansion on this project would be to use a library like `jimp` which would allow the image to be made using image processing rather then web development. 

I also used an interesting library callefd `next-absolute-url`, which allowed me to fetch the URL of my deployment, with a fallback for localhost, allowing me to make the correct to the right place.

A customisation I wanted to make to Puppeteer was to change the viewport to the right size for an open graph image, from what I can tell 1200x627 is the recommended size, so I could do that using

```js
await page.setViewport({ width: 1200, height: 627 });
```

# Page to take a screenshot of

I also needed to create this page to screenshot, I used the same dynamic method as I did for the API, making the file `[title].js`, and a slightly different method for getting the query

```js
const router = useRouter();
const { title } = router.query;
```

I also wanted to implement a dark mode for the images, so used the new Tailwind CSS dark mode by applying `"dark"` as a class to the outermost div if `dark=true` was passed in as a query. I could then use classes like `dark:bg-black` to change the image. This query was then passed through from the API

