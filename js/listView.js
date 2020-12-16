import {recipeObj} from './index.js';

export const addShopping = event => {
  const item = recipeObj.data.recipe.ingredients;
  const ulShopList = document.querySelector('.shopping__list');

  while (ulShopList.firstChild) {
    ulShopList.removeChild(ulShopList.firstChild);
}
  item.forEach(el => {
    const li = document.createElement('li');
    li.className = 'shopping__item';
    li.innerHTML = `
    <div class="shopping__count">
        <input type="number" value="${el.quantity}" step="100">
        <p>${el.unit}</p>
    </div>
    <p class="shopping__description">${el.description}</p>
    <button class="shopping__delete btn-tiny">
        <svg>
            <use href="img/icons.svg#icon-circle-with-cross"></use>
        </svg>
    </button>    
    `
    li.querySelector('.shopping__delete').addEventListener('click', function (event) {
      ulShopList.removeChild(event.currentTarget.parentElement);
    })
    ulShopList.appendChild(li)    
  })
};


