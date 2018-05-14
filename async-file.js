var fs = require("fs");

var call_back = function(err, data){
    if(!err) {
       console.log(data);
    }
}

fs.readFile('message.txt', 'utf8', call_back);
console.log("something else");
