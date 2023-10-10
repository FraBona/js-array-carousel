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
    <img src="${currentSrc}">
    <span><i class="fa-solid fa-arrow-up icon-up"></i></span>
    <span><i class="fa-solid fa-arrow-down icon-down"></i></span>
  `;
  console.log(htmlString);

  contDomElement.innerHTML += htmlString;
  contDomElement.classList.add(' d-none');
}

