# DeLorean-Rental-Frontend

This is the frontend of the previous DeLorean rental backend created. This project is to understand how work JS in it's base level and how makes the communication with the DOM

## Node project

## Webpack & WebpackPlugin

To install Webpack do it as a development dependency because is just required to compile the code you're going to send to the server but once is compiled you won't need webpack anymore. And WebpackPlugin, is a plugin of webpack to be able to compile as well the html code, otherwise we will be just getting the JavaScript code compiled.

###### To install the deps run:

This dependencies are to compile the code for the server

> $ npm i webpack -D

> $ npm i html-webpack-plugin -D

This dependencies are to be able to run a server just with Webpack

> $ npm i webpack-dev-server -D

This dependencies are to be able to load the stylesheets

> $ npm i css-loader -D

> $ npm i style-loader -D

This dependecy allows you to have multiple css files

> $ npm install --save-dev mini-css-extract-plugin

This dependencies are to be able to load the HTML

> $ npm i html-loader -D

This dependency allows us to see images

> $ npm install file-loader --save-dev

The **_-D_** indicates is going to be installed as a development dependency

###### To make webpack compile the code to send it to the server

> $ npx webpack

Or if u want this compiled code turn into a readeable human format run instead:

> $ npx webpack -d

###### Create a server with Webpack

> $ npx webpack-dev-server
