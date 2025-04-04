# Badger Spill Website

This repository contains source code for the Badger Spill website!

## Project Information

This website was built using [Astro](https://astro.build). Astro allows us to compile our site to vanilla HTML+CSS with minimal Javascript (except where required for interactivity). Because Astro compiles into a static site, we can host our generated website for free (and without the need for a server to render our website for users on every visit).

This project also makes use of [TailwindCSS](https://tailwindcss.com), a CSS utility library. This allows us to style our website inline without large .css files.

## Project Layout

``src`` - contains the website code

``src/assets`` - contains images that Astro compresses at build time

``src/components`` - contains reusable UI components

``src/layouts`` - folder that contains layouts for the website

``src/pages`` - contains source code for the individual pages on the website

## A Note For Future Maintainers

This is the frontend portion of the Badger Spill website. It only handles displaying the website to the user. The backend component (handling form submissions, emails) is contained within another repository.

### Local Setup

You need to install NodeJS and Git before proceeding. Visual Studio Code is the recommended IDE for working with this project, since it has well-maintained Astro and Typescript plugins. 

To work on this project, clone it to your computer, open a terminal in the project directory, and install the required dependencies with ```npm install```.

To run a development server with hot-reloading, run the command ```npm run dev```. To build a copy of the website that is ready for export, run the command ```npm run build```.

### Deploying

This repository uses Github Actions to automatically deploy this website to Github Pages anytime new commmits are received on the main branch. It is highly recommended that you preview your changes locally with ```npm run dev``` before pushing code to the main branch of this repository.

## License

This program is free software licensed under the GNU AGPL v3.

The full terms of the license are available in the ``LICENSE`` file. The key takeaway is that if you host this software over the web, you will be required to open source your code to users. At Badger Spill, we felt that this was the best decision for three reasons:

1. Open source means that anyone can get involved

Open source lowers the barrier to entry for contributing. This allows community members to propose changes and fix bugs. It also means that people get credited publicly for their work. This is great for a resume or portfolio, and it gives other people motivation to contribute. Open sourcing our code also ensures there is a record of the source code even if a primary contributor leaves. This extends the lifetime of the software.

2. Open source via GitHub makes version control a breeze

Prior to open source, Badger Spill was sharing .zip files between contributors. This is a very messy way of sharing code, and it meant that changes were hard to track and reconcile. Using GitHub makes our developer workflow cleaner and allows future maintainers to see the history of the project's files.

3. This isn't a commercial product--it's a community good

Lastly, and most significantly, this isn't a piece of software that will ever be sold. It's a passion project by the student community and for the student community. There's no reason that we need to keep this code private. We stand only to gain by making our work public. We also felt that improvements made to this project should be shared back with the community to ensure that everyone benefits. Open source and AGPL3 align with these values.
