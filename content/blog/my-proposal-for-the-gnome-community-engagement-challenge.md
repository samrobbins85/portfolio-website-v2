+++
date = 2020-09-14T23:00:00Z
description = "My Proposal that got me through the first round of the GNOME community engagement challenge"
image = ""
title = "My Proposal for the GNOME Community Engagement Challenge"

+++

This document is submitted in addition to my proposal to provide further
detail

This project will aim to train people from zero experience in
programming or open source to making contributions to FOSS projects.

# Stages

This project will consist of a range of stages for the user to go
through, I will explain them in more detail

## Learning Languages

This project will assume zero knowledge, making it accessible for all
users. Because of this, a section on teaching languages is needed. Users
who already know some programming languages will be able to skip this
section.

With time, I hope to be able to expand this to a wide range of
languages, but to start with I will focus on two categories

- Python
- Web Development: HTML, CSS, JavaScript

While users could learn these languages on external sites such as
codecademy, by having the tutorials integrated into the website it has
the least level of friction for the user, meaning they are more likely
to do it. It also has the added benefit that these tutorials will
contain all the information for the practice open source contributions
which will be described later.

![](https://res.cloudinary.com/samrobbins/image/upload/v1600161649/Desktop-1_xgu0vy.png "An example page for learning to code")

## Learning Open Source Techniques

This section will teach how to contribute to open source software. The
main focus here will be Git and GitHub. The rationale for choosing these
are that they are the dominant products in open source. Further
expansion here could include GitLab as many projects are choosing this
instead of GitHub, such as GNOME and KDE.

The initial concept for teaching Git will include the following ideas,
but may increase as I start work

- Why people use Git
- `git init` for creating git repositories
- `git add` and how git tracks files
- `git commit` and how to write good commits
- `git branch` and the concepts behind branches
- `git push` for remote repositories, transitioning into the section
  on GitHub

Then the section on GitHub will cover

- Pull Requests
- Issues

![](https://res.cloudinary.com/samrobbins/image/upload/v1600161665/Learn_to_Contribute_myj4de.png "An example page for learning to contribute")

## Practising Contribution to Purpose Made Repositories

For this I will create a range of projects in repositories for people to
practise contributing to. This will be useful as contributing to huge
codebases is a very daunting task, and this provides a stepping stone to
that.

These will be provided in a range of languages, matching with the
languages taught in the first stage of this process. This will allow
users to solve problems that they have the skill to solve, allowing for
a focus on the Open Source Techniques such as using Git. More
complicated examples will also be available which would allow them to
stretch their skill in the language.

![](https://res.cloudinary.com/samrobbins/image/upload/v1600161681/Pratice_Contributing_ywanke.png "An example page for practising contributing")

## Practising contribution to old versions of real repositories

The next step for the user is to practice on a real repository. But they
aren’t just dumped in with an issue to see what they can do. This
project takes issues that have already been resolved, so that there is a
model answer if they get stuck, and so that the user can have a more
accurate measure of the complexity of the task.

Each of these tasks will link back to the tutorial pages so that if the
user doesn’t understand how it works they can brush up on their skills

![](https://res.cloudinary.com/samrobbins/image/upload/v1600161694/Real_Practice_Contributing_yhynhd.png "An example page for practising contributing to real repositories")

## Contributing to real repositories

The final step is to actually get contributing! This will make use of
GitHub issues to provide the prompts for the user. This section will
consist of different levels:

- Good first issues in repositories they’ve already practised on
- Other issues in repositories they’ve already practised on
- Good first issues in repositories that use the same technologies
  they’ve practised on
- Other issues issues in repositories that use the same technologies
  they’ve practised on
- Good first issues from all around GitHub

This provides a simple progression ladder increasing in difficulty to
ensure that users aren’t scared off by an issue they don’t know how to
solve. This will also feature being able to favourite an issue so that
you can easily access it to contribute, or to see how it gets resolved.

![](https://res.cloudinary.com/samrobbins/image/upload/v1600161711/Real_Contributing_o4tuf5.png "An example page showing issues a user could help with")

# Technology

This will be implemented as a website so that it can reach the widest
audience.

## Open Source

Nearly all the tools used to create this project are open source, and for those that are not fully open source, a considerable portion is.

| Category            | Name        | Amount open source   | Link                                       |
| ------------------- | ----------- | -------------------- | ------------------------------------------ |
| Hosting             | Vercel      | Considerable amount  | https://github.com/vercel/vercel           |
| Backend Framework   | Next.js     | Entirely Open Source | https://github.com/vercel/next.js          |
| Front end framework | TailwindCSS | Entirely Open Source | https://github.com/tailwindcss/tailwindcss |
| Database            | MongoDB     | Entirely Open Source | https://github.com/mongodb                 |
| Authentication      | Auth0       | Considerable amount  | https://github.com/auth0                   |

This project will be usable without authentication. This allows the
project to be kept entirely open source and means that there isn’t a
barrier to users getting started with the project.

The project could also be self hosted if that was desired as all the
code will be open source on my GitHub.

The project itself will be hosted on my GitHub and free for everyone to
view and make pull requests to, it will be licenced under the MIT
licence, which is approved by both the FSF and OSI.

Furthermore, all documentation produced will be open sourced and likely
distributed under Creative Commons BY-SA 4.0, which is approved by the
FSF.

## Other people contributing to this project

By the nature of this being an open source project, it is encouraged for
other people to contribute to it. This will be supported by the heavy
use of GitHub issues both during and after the main development of the
project, making it easy for contributors to see what needs work. On all
the training pages there will also be an "Edit on GitHub" button, making
it easy for people to find the file they need to change if they see a
mistake or have something to add. This project will also use Gitter for
if people have questions about the project and I will try my best to
help with any problems.

# Roadmap

By November, I plan to have this project implemented without
authentication, this will include:

- Designing the website
- Writing the tutorials
- Finding suitable solved issues for users to try, and writing hints
- Working with the GitHub API to find issues for users to help with

If I was to be selected to continue this to a final project
authentication would then be implemented, along with all the user
features that go with this:

- Saving progress
- Points system to show progress
- Saving issues you’re interested in
- Issues presented to you being customized based on your experience.
