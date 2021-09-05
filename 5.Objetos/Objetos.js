let product = {
  code: 001,
  detail: 'T-shirt',
  price: '50USD',
  avalaibleColours: ['Blue','Black','White','Yellow','Red','Green'],
  stock: {
    adidas: 50,
    nike: 80
  }
}

// Forma clásica
let response = `Su producto deseado es: ${product.detail} y cuesta ${product.price}`;
// Ayudándose de destructuring
let { detail, price } = product;
let response2 = `Su producto deseado es: ${detail} y cuesta ${price}`;

{ code, detail, {stock : {adidas} } = product;

console.log(response);
console.log(response2);


