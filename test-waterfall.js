const async = require("async");

async.waterfall([
    function(cb) {
        /*
        * Your logic
        */
       console.log("step 1");
        cb("ERROR-STEP-1", 'one', 'two');
    },

    function(arg1, arg2, callback) {
        /**
         * Your logic
         */
        console.log("step 2");
        callback(null, 'three');
    },

    function(arg1, callback) {
        console.log("step 3");
        callback(null, 'done');
    },

    function(arg1, callback) {
        console.log("step 4");
        callback(null, 'final');
    }
], function (err, result) {
    // result now equals 'done'
    console.log("final step");
    if(err){
        console.log(err);
    }
    console.log(result);
});