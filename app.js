const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
server.listen(3000);
const birds = require('./birds');
const user = require('./controller/user');
const login = require('./controller/login');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('web'));
console.log("server running port 3000");

app.use("/bbb", birds);
app.use("/api/v1/user", user);
app.use("/api/v1/login", login);

app.get('/he*', function (req, res, next) {
    console.log("Hello from all logs");
    next();
});

app.get('/hello', function (req, res) {
    console.log(req.query);
    res.end("Hello World alone" + req.query.userName);
});

app.get('/hello/:userName', function (req, res) {
    console.log(req.params);

    res.end("Hello World..... " + req.params.userName);
});

app.post('/hello', function (req, res) {
    let obj = {
        code: "007",
        name: req.body.userName
    }
    // res.end("Hello World from POST .....");
    res.json(obj);
});

var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}

var cb2 = function (req, res) {
    res.send('Hello from C!');
}

app.get('/example/c', [cb1, cb0, cb2]);

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });