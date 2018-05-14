const async = require("async");

async.parallel([
    function(callback) {
        console.log("step 1");
        setTimeout(function() {
            console.log('one');
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        console.log("step 2");
        setTimeout(function() {
            console.log('two');
            callback(null, 'two');
        }, 100);
    },
    function(callback) {
        console.log("step 3");
        setTimeout(function() {
            console.log('three');
            callback("ERROR-STEP-3", 'three');
        }, 150);
    }
],
// optional callback
function(err, results) {
    console.log(err);
    console.dir(results);
});