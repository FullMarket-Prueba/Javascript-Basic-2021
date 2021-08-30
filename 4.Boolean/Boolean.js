let state = false;

function checkLight() {
  // Operador ternario
  let light = state ? "Encendido" : "Apagado"
  return light;
}

console.log(checkLight());