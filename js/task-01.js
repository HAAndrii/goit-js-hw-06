const itemEl = document.querySelectorAll('#categories .item');

const numberEl = (arrEl) => {
    console.log(`Number of categories: ${arrEl.length}`);
    console.log('');
    arrEl.forEach(element => {
        console.log(`Category: ${element.firstElementChild.textContent}`);
        console.log(`Elements: ${element.querySelectorAll('li').length}`);
        console.log('');
    });
}

numberEl(itemEl)
