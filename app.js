// var http = require('http');

// http.createServer(function(req,res){ 
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.end('yes you can\n');
// }).listen(8000);

// console.log("server running port 8000"); 

require("./foo");
foo();
foo2("v1","v2", "v3");

var bar2 = require("./bar");
bar2();