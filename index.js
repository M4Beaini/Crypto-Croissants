// SETUP TO CONNECT AND USE EXPRESS

const express = require('express');//Set up the express module
const app = express();
const port = 3000;
// const router = express.Router();
//const path = require('path')//Include the Path module

app.use (express.json());
app.listen (port,() => {
  console.log ("Hello world app");
});


/*
//Set up the Express router
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html/index.html'));
});
app.use('/', router);

//Navigate your website
//if they go to '/lol'
router.get('/lol', function(req, res){
  res.sendFile(path.join(__dirname, '/lol.html'));
});
app.use('/lol', router);
//404 Error
app.use(function(req, res, next) {
    res.status(404);
    res.sendFile(__dirname + '/404.html');
});


//set up the Express server to listen on port 3000 and logs some messages when the server is ready
let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
});

*/

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