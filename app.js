import { pictures } from "./data/pictures.js";
let pictures1 = [];

document.getElementById("sort-field").addEventListener("change", function () {
  let sortArray = document.getElementById("sort-field");
  sortArray.value === "asc" ? sortAtoZ(pictures) : sortZtoA(pictures);
});

window.searchPic = function () {
  const searchField = document.getElementById("search-field");
  const searchTerm = searchField.value.trim();

  const searchResult = pictures.filter((pic) => {
    if (searchField.value === "author") {
      return pic.author.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return pic.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });
  sortAtoZ(pictures);
  sortZtoA(pictures);
  console.log(searchResult);
  displayGallery(searchResult);
};

function sortZtoA(pictures) {
  let sortDesc = [...pictures];

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
  console.log("pictures1 Array", pictures1);
  displayGallery(pictures1);
}

function sortAtoZ(pictures) {
  let localArray = [...pictures];

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

  console.log("pictures1 Array", pictures1);
  displayGallery(pictures1);
}

function displayGallery(pictures1) {
  //pics structure
  const picsContainer = document.querySelector(".container");
  let html = "";

  pictures1.forEach((picElement) => {
    html += `<div class="card" style="width: 18rem;">
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
displayGallery(pictures);

function Availibility(picElement) {
  for (let i = 0; i < picElement.length; i++) {
    if (picElement[i].inStock) {
      console.log(picElement[i].inStock);
      const inStock = document.querySelectorAll(".stock");
      inStock[i].style.color = "green";
      console.log(inStock[i].style.color);
      inStock[i].style.fontSize = "1.5rem";
    } else {
      const inStock = document.querySelectorAll(".stock");
      inStock[i].style.color = "red";
      inStock[i].style.fontWeight = "900";
      inStock[i].style.fontSize = "1.5rem";
    }
  }
}

Availibility(pictures1);
