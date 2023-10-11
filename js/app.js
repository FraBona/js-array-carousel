const contImage = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp',
]

const contDomElement = document.querySelector('.sliders');
console.log(contDomElement);
console.log(contImage);

const lengthImage = contImage.length;

for(let i = 0; i < lengthImage; i++){
  const currentSrc = contImage[i];
  console.log(currentSrc);

  const htmlString = `
    <img class='myimage' src="${currentSrc}">
  `;
  console.log(htmlString);

  contDomElement.innerHTML += htmlString;

}

const item = document.querySelectorAll('.myimage');
console.log(item);

let currentIndex = 0;
item[currentIndex].classList.add('active');

const iconUp = document.querySelector('.click-up');
const iconDown = document.querySelector('.click-down');
console.log(iconUp, iconDown);

iconUp.addEventListener('click', function(){
  if(currentIndex < (lengthImage - 1)){
    currentIndex++;
    if(currentIndex > (currentIndex - 1)){
      item[currentIndex - 1].classList.remove('active');
      item[currentIndex].classList.add('active');
    }
  }
})

iconDown.addEventListener('click', function(){
  if(currentIndex > 0){
    currentIndex--;
    if(currentIndex < (currentIndex + 1)){
      item[currentIndex + 1].classList.remove('active');
      item[currentIndex].classList.add('active');
    }
  }
})