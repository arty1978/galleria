import {pictures} from './data/pictures.js';
console.log(pictures);

function displayGallery(pics) {
    //pics structure 
    const picsContainer = document.querySelector('#container');
    let html = '';
    //pics = pictures
    pics.forEach(picElement => {
        html +=
            `<div class="card" style="width: 18rem;">
                <img src="${picElement.getPaint()}"
                    class="card-img-top" alt="${picElement.getTitle()}">
                <div class="card-body">
                    <h5 class="card-title">${picElement.getAuthor()}</h5>
                    <p class="card-text">
                        ${picElement.getPrice()}</p>
                    <p class="card-text">
                        ${picElement.getInStock()}</p>
                    <a href="#" class="btn btn-primary">View Details</a>
                </div>
            </div>`;
    });
    picsContainer.innerHTML = html;
}
displayGallery(pictures);