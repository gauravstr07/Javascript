let userDetails = {
  name: "Gaurav-Sutar",
  age: 22,
  email: "gauravstr05@gmail.com",
};

let printDetails = function () {
    console.log(this);
  };
  
  printDetails.call(userDetails);

let userDetails2 = {
  name: "Akshu-Sutar",
  age: 22,
  email: "akshu07@gmail.com",
};

printDetails.call(userDetails2);

