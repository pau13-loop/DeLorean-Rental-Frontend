console.log('App running');


var http = require('http');
let fs = require("fs");

let html;
let css;
let js;
let gateway;

fs.readFile("./src/index.html", (err, data) => {
    if (err) {
        console.log('Error: ', err)
        throw err;
    }
    console.log('Data: ', data);
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

fs.readFile('./src/gateways.js', function (err, data) {
    if (err) {
        throw err;
    }
    gateway = data;
});


http.createServer((req, res) => {
    res.statusCode = 200;
    if (req.url.indexOf('.css') != -1) {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(css);
        res.end();
        return;
    }
    if (req.url.indexOf('index.js') != -1) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(js);
        res.end();
        return;
    }
    if (req.url.indexOf('gateway.js') != -1) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(gateway);
        res.end();
        return;
    }
    res.writeHeader(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();

}).listen(8080);

console.log('Nuevo console log');
