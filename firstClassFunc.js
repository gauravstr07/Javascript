// 1. Function statement

function a() {
  console.log("a called..");
}

// 2. Function epxression
let b = function () {
  console.log("b called..");
};

// 3. Anonymos Function
// function(){
// }

// 4.  Named function expression
let c = function xyz() {
  console.log("c called " + xyz);
};

// 5.  Diffrent between paramenter and arguments
let d = function (param1, param2) {
  console.log("d called " + param1, param2);
};

// 6.  First class function
let e = function(param1, param2){
    console.log('e called ' + param1, param2);
    return function(){
        console.log('return anonymos func');
    }
}
// console.log(e("Gaurav", 22));

// 7. Functions are first class citizen
