import { pictures } from "./data/pictures.js";

document.getElementById("sort-field").addEventListener("change", function () {
  let sortArray = document.getElementById("sort-field");
  sortArray.value === "asc" ? sortAtoZ(pictures) : sortZtoA(pictures);
});

window.searchPic = function () {
  const searchField = document.getElementById("search-field");
  const searchTerm = searchField.value.trim();

  const searchResult = pictures.filter((pic) => {
    const searchBy = document.getElementById("searchBy");
    if (searchBy.value === "author") {
      console.log(searchField.value);
      return pic.author.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return pic.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });
  sortAtoZ(pictures);
  sortZtoA(pictures);
  displayGallery(searchResult);
  Availibility(searchResult);
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

  displayGallery(sortDesc);
  Availibility(sortDesc);
}

function sortAtoZ(pictures) {
  let sortAsc = [...pictures];

  sortAsc.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  displayGallery(sortAsc);
  Availibility(sortAsc);
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
      const inStock = document.querySelectorAll(".stock");
      inStock[i].style.color = "lime";
      inStock[i].style.fontWeight = "500";
      inStock[i].style.fontSize = "1.5rem";
    } else {
      const inStock = document.querySelectorAll(".stock");
      inStock[i].style.color = "red";
      inStock[i].style.fontWeight = "900";
      inStock[i].style.fontSize = "1.5rem";
    }
  }
}
Availibility(pictures);
