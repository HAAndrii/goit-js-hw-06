function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
let boxSize = 30;


const onBtnCreate = () => {
  const arr = [];
  for (let index = 0; index < input.value; index += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize}px`
    box.style.height = `${boxSize}px`
    boxSize += 10;
    arr.push(box);
  }
  boxes.append(...arr);
  boxSize = 30;
}

const onBtnDestroy = () => {
  const arr = boxes.querySelectorAll('div');
  arr.forEach(element => {
    element.remove();
  });
}

btnCreate.addEventListener('click', onBtnCreate);

btnDestroy.addEventListener('click', onBtnDestroy);




