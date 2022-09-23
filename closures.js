let sum = function (a) {
  console.log("Calling sum" + a);
    var c = 'A';
  return function(b){
    console.log('Calling return func');
    return a+b+c;
  }
};

let store = sum(" Gaurav ");
console.log(store(1))
