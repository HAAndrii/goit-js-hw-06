const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const createList = (arr) => {
  return arr.map((el) => {
    const li = document.createElement('li');
    li.textContent = el;
    li.classList.add('item');
    return li;
  })
}

const list = createList(ingredients);
ingredientsEl.append(...list);

