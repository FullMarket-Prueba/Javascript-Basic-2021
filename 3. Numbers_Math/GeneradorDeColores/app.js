const myBody = document.querySelector('#body');
btnGenerate = document.querySelector('#btn-generate');

btnGenerate.addEventListener('click',generateColor);

function randomNumber(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function generateColor() {
  let redColor = randomNumber(0, 255);   
  let greenColor = randomNumber(0, 255);   
  let blueColor = randomNumber(0, 255);
  
  myBody.style.backgroundColor = `rgb(${redColor},${greenColor},${blueColor})`;
  
}
