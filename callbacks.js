const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  api.proccedToPayment();
});
