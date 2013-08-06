  
  module webshop {
    // local module
    import userservice;
    // remote module
    module shoppingcart = require('http://url/modules/shoppingcart.js');

    export function placeOrder() { ... }
  }