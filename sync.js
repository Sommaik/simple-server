const fs = require('fs');
data = fs.readFileSync('message.txt', 'utf8');
console.log(data);
console.log("something else");