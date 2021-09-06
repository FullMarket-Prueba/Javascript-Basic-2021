// let nombre = 'camisa';
// let price = 20;

const product = {
  nombre: 'camisa',
  code: '001',
  price: 10,  
  resumen: function () {
    console.log(`El producto ${this.nombre} tiene un precio de ${this.price}`);
  }
}

product.resumen();