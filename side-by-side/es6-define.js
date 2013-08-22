  
  module 'webshop' {
    // local module
    import userservice;
    // remote module
    module shoppingcart from 'http://url/modules/shoppingcart.js';

    export function placeOrder() { ... }
  }