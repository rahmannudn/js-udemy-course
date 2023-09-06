// console.log('this is shopping cart');
const cart = [];
const test = 1;

// export manually
// export const addProduct = function (name, amount) {
//   cart.push([name, amount]);
//   console.log(`${amount} ${name} has been added to cart`);
// };

// class Product {
//   constructor(name, stock) {
//     this.productName = name;
//     this.stock = stock;
//   }
// }

const addProduct = function (product, quantity) {
  //   const product = new Product(name, amount);
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} has been added to cart`);
};

//  multiple things by name
// export { addProduct, cart as keranjang };

// export default
// export default addProduct;

// export default addProduct;

// console.log('exporting file');

// const getTodos = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await res.json();

//   return data;
// };

// // getTodos().then(data => console.log(data));
// console.log(await getTodos());

// console.log('finish fetching at tes');

export { addProduct, cart };
