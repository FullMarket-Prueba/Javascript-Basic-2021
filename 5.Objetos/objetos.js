// let product = {
//   code: 001,
//   detail: 'T-shirt',
//   price: '50USD',
//   avalaibleColours: ['Blue','Black','White','Yellow','Red','Green'],
//   stock: {
//     adidas: 50,
//     nike: 80
//   }
// }

// // Forma clásica
// let response = `Su producto deseado es: ${product.detail} y cuesta ${product.price}`;
// // Ayudándose de destructuring
// let { detail, price, stock : {adidas} } = product;
// let response2 = `Su producto deseado es: ${detail} y cuesta ${price}`;
// let response3 = `En este momento solo nos queda ${adidas} unds de Adidas`;

// console.log(response);
// console.log(response2);
// console.log(response3);

// ------------------------------------------------------------------------
const user = {
  name: 'Edwin',
  age: 34,
  avalaible: true
}

// console.log(user);

// user.name = 'Gustavo';
// //Detalles que no gustan mucho en js, es la posibilidad de cambiar de tipo de dato dentro de la mism variable.
// user.age = 35;
// user.avalaible = false;

// // console.log(user);

// Object.freeze(user);

// // user.color = 'blue';
// // console.log(user);

// console.log(Object.isFrozen(user));

// Uniendo dos objetos
// const newItem = Object.assign(product,user);
// console.log(newItem);

// let uniendoObjetos = {...product,...user};
// console.log(uniendoObjetos);

// Propiedades muy importantes en los objetos
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

