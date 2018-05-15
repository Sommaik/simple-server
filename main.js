require("./foo");
foo();
foo2("v1","v2", "v3");

var bar2 = require("./bar");
bar2();

var fz = require('./fiz').fiz; 
fz();

var fz2 = require('./fiz').fiz2;
fz2('xxxxx');

var fizz = require('./fiz');
fizz.fiz();
fizz.fiz2("yyyy");

var buz = require('./buz'); 
buz.log();
buz.log2('John');

var baz = require('./baz').Baz;
baz.log();

var Doo = require('./doo');
var doo = new Doo();
doo.log();

var Qux = require('./qux').Qux;
var qux = new Qux();
qux.log();