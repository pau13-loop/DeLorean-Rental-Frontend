# DeLorean-Rental-Frontend

Frontend of the previous project **_DeLorean Rental_** backend created. The goal of the project is to understand how work JS in its base level and how it communicates with the DOM through the DOM api. This project has been the deep introduction that all of us need if we want to understand how the DOM works and JS fundamental concepts.

This project complement really well the last one, to be honest I think that both of them should be developed, of course if you like more the backend than the frontend or other way round you'll choose one over the other. But to start to masterize yourself in Web Software Development, I think you must know what happens on the backend and the frontend.

I'll advise these two projects to anyone that feel brave enough to try them. If you don't feel brave enough to start with the [Backend](https://github.com/pau13-loop/DeLorean-Rental-OLOO-JS) don't worry, you could clone them and use it as it is already.

Good luck !

[![status application](https://img.shields.io/badge/status-stable-brightgreen)](https://github.com/pau13-loop/DeLorean-Rental-OLOO-JS)
[![webpack version](https://img.shields.io/badge/webpack-v.5.70.0-blueviolet)](https://webpack.js.org/)
[![node version](https://img.shields.io/badge/node-v16.13.0-brightgreen)](https://nodejs.org/en/)
[![npm version](https://img.shields.io/badge/npm-v8.1.0-critical)](https://www.npmjs.com/)
[![version application](https://img.shields.io/badge/version-v1.0.0-informational)](https://github.com/pau13-loop/DeLorean-Rental-Frontend/releases/tag/v.1.0.0)

<!-- Source: https://www.deloreanrental.com/ -->
<p align="center">
  <img src="./doc/img/rent-a-car.gif" alt="animated" width="80%" height="300" />
</p>

## Table of Contents

1. [Webpack](#webpack)
1. [Motivation](#motivation)
1. [Project Goals](#project-goals)
1. [Dependencies to install with webpack](#dependencies-to-install-with-webpack)
1. [Compile your code with webpack](#compile-your-code-with-webpack)
1. [Create a server with Webpack and run compiled code](#create-a-server-with-webpack-and-run-compiled-code)
1. [Technologies Implemented](#technologies-implemented)
1. [Instalaltion](#instalaltion)
1. [Links to Project Documentation](#links-to-project-documentation)
1. [Acknowledgment](#acknowledgment)
1. [License](#license)

## Webpack

To install Webpack do it as a development dependency because it is just required to compile the code you're going to send to the server but once is compiled you won't need webpack any more. And WebpackPlugin, is a plugin of webpack to be able to compile as well the HTML code, otherwise we will be just getting the JavaScript code compiled.

---

**[⬆ back to top](#table-of-contents)**

## Motivation

I should start telling you that I have not had as much time as I would like, or better I should say that I had more than enough time, but I've been through one of the hardest stages of my life and I couldn't find the right moment to sit down myself and start to code. When I did it, I tried to develop all the project with the minimum dependencies required and this in my head was something like _"I'm going to do this just with HTML, CSS, JS vanilla and node"_ and of course I've been through lot of troubles until one night of desperation and doing tech spiked I've found **Webpack** and I have to say that saved this project because what was exactly what I was looking for, but I didn't even thought about it. Then finally when I had a consistent idea about how I wanted to do it I start to develop all of this in just three days, because the fourth restarted the nightmare I was just living and I came back to find some time to sit down to code, I just don't want to force it because I really fucking enjoyed this last three days and I don't want to change this really nice vibe I get when I code. But the **main motivation** of this project was tried to do the same kind of web frontEnd development I do at my job with React just with JS Vanilla and I had to say that it was incredibly satisfying.

---

**[⬆ back to top](#table-of-contents)**

## Project Goals

[x] Usage of DOM API

[x] Dynamically add class, styles, html...

[x] NodeElements and NodeLists

[x] Dialog windows

[x] LocalStorage, SessionStorage or cookies

[x] Fetch GET, POST, DELETE and PUT

[x] Async/await and Promises

[x] Form data handling

---

**[⬆ back to top](#table-of-contents)**

## Dependencies to install with webpack:

These dependencies are to compile the code for the server

> $ npm i webpack -D

> $ npm i html-webpack-plugin -D

These dependencies are to be able to run a server just with Webpack

> $ npm i webpack-dev-server -D

These dependencies are to be able to load the stylesheets

> $ npm i css-loader -D

> $ npm i style-loader -D

This dependecy allows you to have multiple CSS files

> $ npm install --save-dev mini-css-extract-plugin

These dependencies are to be able to load the HTML

> $ npm i html-loader -D

This dependency allows us to see images

> $ npm install file-loader --save-dev

The **_-D_** indicates is going to be installed as a development dependency

---

**[⬆ back to top](#table-of-contents)**

## Compile your code with webpack

To compile the code, run the following command from your terminal after you've installed webpack:

> $ npx webpack

Or if u want this compiled code turn into a readable human format run instead:

> $ npx webpack -d

---

**[⬆ back to top](#table-of-contents)**

## Create a server with Webpack and run compiled code

To create a server where you can run your compiled code, run the following command on your terminal:

> $ npx webpack-dev-server

---

**[⬆ back to top](#table-of-contents)**

## Technologies Implemented

-   HTML5
-   CSS3
-   JS Vanilla
-   Webpack
-   Node
-   NPM

---

**[⬆ back to top](#table-of-contents)**

## Instalaltion

To be able to run this project you just will have to create an account into MongoDB, clone this project and run the command `$ npm i` to install all the required dependencies. Finally, create a `.env` file in the root directory of your project and fill the credentials specified in the `.env template` that you'll find below. Enjoy !

---

**[⬆ back to top](#table-of-contents)**

## Links to Project Documentation

### Bibliography

[**Bibliography**](./doc/bibliography.md)

---

### env. Template

[**_.env Template_**](./doc/env-template.md)

---

**[⬆ back to top](#table-of-contents)**

## Acknowledgment

I would like to acknowledge the help and support of:

[**_dfleta_**](https://github.com/dfleta)

---

**[⬆ back to top](#table-of-contents)**

## License

MIT License

Copyright (c) 2020 AntoniPizarro and Pau Llinàs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

**[⬆ back to top](#table-of-contents)**
