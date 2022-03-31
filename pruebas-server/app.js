const http = require('http');
const fs = require("fs");
const FileServerReader = require('./file-server-reader');

let html;
let css;
let js;
let imgs;

fs.readFile("./src/index.html", (err, data) => {
    if (err) {
        console.log('Error: ', err)
        throw err;
    }
    html = data;
});

fs.readFile('./src/index.css', function (err, data) {
    if (err) {
        throw err;
    }
    css = data;
});

fs.readFile('./src/index.js', function (err, data) {
    if (err) {
        throw err;
    }
    js = data;
});

fs.readFile('./assets/img/delorean.jpeg', function (err, data) {
    if (err) {
        throw err;
    }
    console.log('Enserio ? ', data);
    imgs = data;
});



// GLOBAL CONSTANTS
const hostname = '127.0.0.1';
const port = 5555;

const server = http.createServer((req, res) => {
    res.statusCode = 200;

    if (req.url.indexOf('.jpeg') != -1) {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.write(imgs);
        res.end();
        return;
    }

    if (req.url.indexOf('.js') != -1) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(js);
        res.end();
        return;
    }

    if (req.url.indexOf('.css') != -1) {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        console.log('Css inside: ', css);
        res.write(css);
        res.end();
        return;
    }

    res.writeHeader(200, { "Content-Type": "text/html" });
    res.write(html);
    console.log('Estoy !');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});