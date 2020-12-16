import {getOneRecipe} from "./index.js";

const resultList = document.querySelector(".results__list");

const renderResults = recipe => {

    while (resultList.firstChild) {
        resultList.removeChild(resultList.firstChild);
    }
    recipe.slice(0,10).forEach(item => {
        const li = document.createElement("li");

        li.innerHTML = `
            <a id= '${item.id}' class="results__link results__link--active" href="#">
            <figure class="results__fig">
                <img src="${item.image_url}" alt="${item.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${item.title}</h4>
                <p class="results__author">${item.publisher}</p>
            </div>
            </a>
            `;
        
        resultList.appendChild(li);
        li.querySelector("a").addEventListener("click", getOneRecipe);
    });
};
export { renderResults }