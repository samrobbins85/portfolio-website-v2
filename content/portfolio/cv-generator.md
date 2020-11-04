+++
categories = ["web-dev", "hackathon"]
coders = []
date = 2020-11-01T00:00:00Z
description = "A website to generate CVs"
github = ["https://github.com/samrobbins85/cv-generator"]
image = "https://res.cloudinary.com/samrobbins/image/upload/v1604328156/undraw_Resume_folder_re_e0bi_flm8uj.svg"
site = "https://cvgen.vercel.app"
title = "CV Generator"
[[tech]]
logo = "https://res.cloudinary.com/samrobbins/image/upload/v1597140056/next-black_csivx6.svg"
name = "Next.js"
url = "https://nextjs.org/"
[[tech]]
logo = "https://res.cloudinary.com/samrobbins/image/upload/v1604328310/Fauna-logo-blue_dsfrvj.png"
name = "Fauna"
url = "https://fauna.com/"
[[tech]]
logo = "https://res.cloudinary.com/samrobbins/image/upload/v1604328242/magic_j1u8fv.svg"
name = "Magic Link"
url = "https://magic.link/"
[[tech]]
logo = "https://res.cloudinary.com/samrobbins/image/upload/v1597140224/tailwindcss_rnpshz.svg"
name = "Tailwind CSS"
url = "https://tailwindcss.com/"

+++
For this project, I started with the [template from magic labs](https://github.com/magiclabs/example-nextjs-faunadb-todomvc), this allowed me to make sure that my connection to the database and authentication was set up correctly.

Next, I converted the CSS over to use Tailwind CSS, this allowed me to better understand the layout of the application and make changes to designs faster and without unexpected consequences.

The original database structure had two collections, users, and tasks, however, for this project, all the information was related to one user. I could have chosen to have tables for the different properties a user can have, but for simplicity, I decided to have everything in one document. This also makes things like rearranging easier to think about as I am just manipulating an array.

Some of the API endpoints were already set up for the user, but I created a new one, `updateUser` which allows you to pass in some data to update for the user, and by passing in empty data this can also act as a delete function. This along with the `getUserByEmail` function were then added to the new endpoint under `GET` and `POST`.

With that sorted, I could then start working on the interface. Deciding on how to lay things out was fairly complicated for this project and I may still change things. The problem is that there is a lot of data that you can input and change, and it is complicated to ensure that the design is tidy enough to make it simple to use. I settled on the following design:

![](https://res.cloudinary.com/samrobbins/image/upload/v1604329306/edit_cv_b6hryq.png)

This allows for easy inputting of name, skills, and work experience, along with deleting any of these should you need to. In a future redesign, I may add the ability to edit entries, but at the moment, that would lead to too much complexity.

Along with this pane, I also wanted users to be able to preview what the CV would look like

![](https://res.cloudinary.com/samrobbins/image/upload/v1604329444/preview_cv_yfjlyx.png)

This is good so you don't need to go to the generated version to check that everything looks in the way that you want.

Next up was generating the output. I did this using dynamic routes in Next.js, making it easy to change the requested information based on the URL provided. I decided for emails to be the user data provided as it was easy to ensure they were unique, as that was established by default, whereas if users could provide a custom URL then I would have to ensure that there was no overlap. Initially, I fetched the data using SWR, which worked well but meant that the page would have to query the database before generating the page, so I decided to use `getStaticProps` in Next.js, this means the data is fetched beforehand, making the page faster and reducing database load. However, I did want new users and information to be added between builds, so I used the `revalidate` key, allowing for the page to be regenerated in the background while keeping the page fast. The page could also decide whether to show a 404 or not based on if data could be found, using the `Error` component in Next.js.