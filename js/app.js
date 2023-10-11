const contImage = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp',
]

const contDomElement = document.querySelector('.cont-image');
console.log(contDomElement);
console.log(contImage);

const lengthImage = contImage.length;

for(let i = 0; i < lengthImage; i++){
  const currentSrc = contImage[i];
  console.log(currentSrc);

  const htmlString = `
    <img class='myimage' src="${currentSrc}">
    <span class="click-btn"><i class="fa-solid fa-arrow-up icon-up"></i></span>
    <span class="click-btn"><i class="fa-solid fa-arrow-down icon-down"></i></span>
  `;
  console.log(htmlString);

  contDomElement.innerHTML += htmlString;

}

const item = document.querySelectorAll('.myimage');
console.log(item);

let currentIndex = 0;
item[currentIndex].classList.add('active');

const iconUp = document.querySelector('.click-btn');
const iconDown = document.querySelector('.click-btn');
console.log(iconUp, iconDown);

iconUp.addEventListener('click', function(){
  console.log('ho schiacchiato la freccia in basso');
})

iconUp.addEventListener('click', function(){
  console.log('ho schiacchiato la freccia in basso');
})