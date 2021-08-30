const btnGenerate = document.querySelector('#btn-generate');
const imgScenery = document.querySelector('#img-scenery');
const btnLike = document.querySelector('#btn-like');
const btnDislike = document.querySelector('#btn-dislike');
const btnImgEmoji = document.querySelector('#img-emoji');

function randomNumber(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

btnGenerate.addEventListener('click',generateImg);
btnLike.addEventListener('click', changeImage1);
btnDislike.addEventListener('click', changeImage2);

function generateImg() {
  let numberImage = randomNumber(1,8);
  console.log(numberImage);
  imgScenery.removeAttribute('src');
  imgScenery.setAttribute('src',`/TheBetterImage/Image/img${numberImage}.jpg`);
}

function changeImage1() {
  btnImgEmoji.removeAttribute('src');
  btnImgEmoji.setAttribute('src','/TheBetterImage/Image/happy.jpg');
}

function changeImage2() {
  btnImgEmoji.removeAttribute('src');
  btnImgEmoji.setAttribute('src','/TheBetterImage/Image/sad.jpg');
}