////////////////////////////////////////////////
////////// Optional Params /////////////////////
////////////////////////////////////////////////

function es5_optional_params(arg1, callback) {
    arg1 = arg1 || "default value.";
    callback = callback || function() {console.log();};

    const str = "The value of arg1 is: " + arg1;

    callback(str);
}

function es6_optional_params(arg1 = "default value.", callback = function() {console.log();}) {
    const str = "The value of arg1 is: " + arg1;
    callback(str);
}

es5_optional_params();
es5_optional_params('5000');
es5_optional_params('5000', function(str) {
    console.log(str);
})
es5_optional_params('', function(str) {
    console.log(str);
})

es6_optional_params();
es6_optional_params('6000');
es6_optional_params('6000', function(str) {
    console.log(str);
})
es6_optional_params(undefined, function(str) {
    console.log(str);
})

////////////////////////////////////////////////
////////// Argruments Object ///////////////////
////////////////////////////////////////////////

function args_object(arg1, arg2, arg3) {
    console.log('# of args:', arguments.length);
    console.log('arg #1:', arguments[0]);
    console.log('arg #2:', arguments[1]);
    console.log('arg #3:', arguments[2]);
}

args_object('one', 'two', 'three');;

////////////////////////////////////////////////
////////// Rest Argruments /////////////////////
////////////////////////////////////////////////

function rest_arg(arg1, ...rest) {
    for(let i = 0; i < rest.length; i++) {
        console.log(arg1 + ":", rest[i]);
    }
}

rest_arg("Name", 'Shelley', 'Heera', 'Casey', 'Jeff', 'Mikey', 'Biggie');
rest_arg("Name");