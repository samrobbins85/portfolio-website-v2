---
categories:
  - web-dev
coders: []
date: 2020-11-21T00:00:00.000Z
description: " Find the best tools to create your next web app "
github:
  - "https://github.com/samrobbins85/tech-to-use"
image: /img/portfolio_cover/toolbox.svg
site: "https://webapp.tools/"
title: Web App Tools
tech:
  - logo: https://res.cloudinary.com/samrobbins/image/upload/v1591793276/logos/logos_hugo_h2xbne.svg
    name: Hugo
    url: "https://gohugo.io/"
  - logo: https://res.cloudinary.com/samrobbins/image/upload/v1597140224/tailwindcss_rnpshz.svg
    name: Tailwind CSS
    url: "https://tailwindcss.com/"
---

This was a nice simple side project inspired by a task I did as part of a hackathon organising team. I was to create a list of technologies that hackers could use in creating their hack, and so this expands on this idea.

The way I used Hugo for this project was different to how Hugo websites are usually built, in that most of the content is in the frontmatter. I could have used markdown tables instead, but I got greater control by programatically producing the table using data from the frontmatter. For example, this makes it easy to hide a column, and also allows me to add a full width cell at the bottom.

The headers were created in the following way:

```html
{{ if .Params.properties.description }}
<th class="px-4 py-2 ">Description</th>
{{ end }}
```

This means that they will only show up if `.properties.description` is set in the frontmatter

Then the cells were created like this:

```html
{{ if $.Params.properties.size }}
<td class="px-4 py-2 font-medium text-center">{{ .size }}</td>
{{ end }}
```

This will only create the cell if `.properties.size` is set, and if `size` isn't available for the individual piece of technology then hugo will just leave it empty, rather than throwing an error. This means that I don't need to do an additional check for if `size` exists. Note that I have a dollar sign in the first conditional as this is within a loop, so the dollar allows me to access the global scope.

I could just repeat this for all the pages and they would be created.

Then on the homepage, I needed to use `range` and `where` to fetch a list of the categories like this:

```html
{{ range where .Site.RegularPages "Section" "categories" }}
<li class="py-2">
  <a class="hover:font-medium" href="{{ .RelPermalink }}">
    <p>{{ .Title }}</p>
  </a>
</li>
{{ end }}
```
