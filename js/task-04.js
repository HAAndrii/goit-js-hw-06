let counterValue = 0;

const btnDecEl = document.querySelector('[data-action="decrement"]');
const btnIncEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

btnDecEl.addEventListener('click', () => {
   counterValue -= 1;
   valueEl.textContent = counterValue;
});

btnIncEl.addEventListener('click', () => {
   counterValue += 1;
   valueEl.textContent = counterValue;
});

