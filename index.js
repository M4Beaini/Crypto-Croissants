// SETUP TO CONNECT AND USE EXPRESS

const express = require('express');//Set up the express module
const app = express();
const port = 80;


app.use (express.json());
app.listen (port,() => {
  console.log ("Hello world app");
});



// HELLO WORLD CODE

app.get("/", (req, res) => {
    res.send ("Hello World!");
});

/*
const http = require('http');
server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});
server.listen(4000);
*/