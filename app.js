import { pictures } from './data/pictures.js';
// console.log(pictures);
let pictures1 = [];
window.searchPic = function () {
    const searchField = document.getElementById('search-field');
    // console.log(searchField);
    const searchTerm = searchField.value.trim(); // ' tab '.trim() => 'tab'

    const searchResult = pictures.filter(pic => {
        return pic.author
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    });
    sortAtoZ(pictures);
    sortZtoA(pictures);
    console.log(searchResult);
    displayGallery(searchResult);
}
// window.
function sortZtoA(pictures) {
    const sort = document.getElementById('sort-field');
    let sortDesc = [...pictures]
    if (sort.value === 'desc') {

        sortDesc.sort((a, b) => {
            if (a.title < b.title) {
                return 1;
            }
            if (a.title > b.title) {
                return -1;
            }
            return 0;
        });
        console.log(22222, sortDesc);
        pictures1 = sortDesc;
    }
    console.log('pictures1 Array', pictures1);
    displayGallery(pictures1);
};

// sortZtoA(pictures);

// window.
function sortAtoZ(pictures) {
    const sort = document.getElementById('sort-field');
    let localArray = [...pictures];
    if (sort.value === 'asc') {

        localArray.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
        console.log(11111, localArray);
        pictures1 = localArray;
    }
    console.log('pictures1 Array', pictures1);
    displayGallery(pictures1);
};

// sortAtoZ(pictures);

function displayGallery(pictures1) {
    //pics structure 
    const picsContainer = document.querySelector('.container');
    let html = '';

    //pics = pictures
    pictures1.forEach(picElement => {
        html +=
            `<div class="card" style="width: 18rem;">
                                <h3 name of the work of art class="card-title">Name of the art work: 
                        ${picElement.getTitle()}</h3>
                <img src="${picElement.getPaint()}"
                    class="card-img-top" alt="${picElement.getTitle()}">
                <div class="card-body">
                    <h5 class="card-title">Author: ${picElement.getAuthor()}</h5>
                    <p class="card-text"> price: 
                        ${picElement.getPrice()}</p>
                    <p class="card-text" > Availibility: <span class="stock">${picElement.getInStock()}</span></p>
                    <a href="#" class="btn btn-primary">View Details</a>
                </div>
            </div>`;
    });
    picsContainer.innerHTML = html;

}

Availibility(pictures);

function Availibility(picElement) {

    for (let i = 0; i < picElement.length; i++) {

        if (picElement[i].inStock) {

            const inStock = document.querySelectorAll('.stock');
            inStock[i].style.color = 'green';
            inStock[i].style.fontSize = '1.5rem';

        } else {

            const inStock = document.querySelectorAll('.stock');
            inStock[i].style.color = 'red';
            inStock[i].style.fontWeight = '900';
            inStock[i].style.fontSize = '1.5rem';
        }
    }
}
// using forEach Method
// pictures.forEach((picElement, i) => {
//     if (picElement.inStock) {
//         const inStock = document.querySelectorAll('.stock');
//         inStock[i].style.color = 'green';
//     } else {
//         const inStock = document.querySelectorAll('.stock');
//         inStock[i].style.color = 'red';
//         inStock[i].style.fontWeight = '900';
//         inStock[i].style.fontSize = '1.5rem';
//     }
// });
// }








