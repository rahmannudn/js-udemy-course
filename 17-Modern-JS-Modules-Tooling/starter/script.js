// import './shoppingCart.js';
import { addProduct, cart } from './shoppingCart.js';
// import addProduct from './shoppingCart.js'; //import default
// import * as SP from './shoppingCart.js';
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import addProduct from './shoppingCart.js';
import cloneDeep from 'lodash-es';

// console.log('this is script');

addProduct('bread', 4);
addProduct('apple', 2);
console.log(cart);
// SP.addProduct('bread', 4);
// SP.addProduct('apple', 2);
// console.log(SP.cart);

// console.log('importing file');

// console.log('fetching todos');
// const res = await fetch('https://jsonplaceholder.typicode.com/todos');
// const data = await res.json();
// console.log(data.at(-1));
// console.log('finish fetching');

// --- module patern ---
const shippingCart2 = (function () {
  let cart = [];

  const addProduct = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`you add ${quantity} ${product} to the cart`);
  };

  const getCart = () => cart;

  return {
    addProduct,
    getCart,
  };
})();

// shippingCart2.addProduct('apple', 3);
// shippingCart2.addProduct('manggo', 2);
// const yourCart = shippingCart2.getCart();
// console.log(yourCart);

const state = {
  cart: [{ product: 'manggo', quantity: 4, product: 'apple', quantity: 10 }],
  user: { loggedIn: true },
};
// const stateClone = Object.assign({}, state);
// const stateClone = { ...state };
const stateClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(state);

if (module.hot) module.hot.accept();

// const arr = [1, 2, 3, 4];
// const arrClone = Object.assign([], arr);
// arr[0] = 0;
// console.log(arrClone);
// console.log(arr);

// const test = [12312, 2312312];
// const tetsClone = Object.assign([], test);
// console.log(tetsClone);
