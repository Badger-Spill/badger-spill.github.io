# Badger Spill Website

This repository contains source code for the Badger Spill website!

## Project Information

This website was built using [Astro](https://astro.build). This project uses Astro to generate a static website. This project is designed to compile down to vanilla HTML + CSS with minimal Javascript (except for where necessary, such as for input processing). Astro was chosen because it can perform this task, and it also has great support for other features like blogging (should that be something we want to use in the future). Because Astro compiles into a static site, we can host our generated website for free (and without the need for a server to render our website for users on every visit).

This project also makes use of [TailwindCSS](https://tailwindcss.com), a CSS utility library. This allows us to style our website inline without large .css files.

``src`` - contains the website code
``src/assets`` - contains images that Astro compresses at build time
``src/components`` - contains reusable UI components
``src/layouts`` - folder that contains layouts for the website
``src/pages`` - contains source code for the individual pages on the website

