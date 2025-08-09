import { handleClickShowMenu, handleClickShowUser } from "./common.js";
document.addEventListener("DOMContentLoaded", function (event) {
  handleClickShowMenu();
  handleClickShowUser();
  fetch("./product.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      const products = result.products;
      const CATEGORY_POPULAR = "popular";
      const CATEGORY_ARRIVAL = "new-arrival";
      let popularProducts = [];
      //    1. filter product has category popular
      for (let index = 0; index < products.length; index += 1) {
        let product = products[index];
        if (product.category == CATEGORY_POPULAR) {
          popularProducts.push(product);
        }
      }

      // 2. Render popular products.
      const popularBoxes = document.querySelector(".popular-boxes");
      let html_popular = "";
      for (let index = 0; index < popularProducts.length; index += 1) {
        let product = popularProducts[index];
        html_popular += `
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="watch-box" data-id=${product.id}>
                            <img src="${product.img_url}"
                                alt="">
                            <div class="watch-box-desc">
                                <h3>${product.name}</h3>
                                <p>${product.price}</p>
                            </div>
                        </div>
                    </div>
                `;
      }
      popularBoxes.innerHTML = html_popular;

      // filter new arrival category
      let newArrivalProducts = [];
      for (let index = 0; index < products.length; index += 1) {
        let product = products[index];
        if (product.category == CATEGORY_ARRIVAL) {
          newArrivalProducts.push(product);
        }
      }
      // render new arrival products
      const newArrivalBoxes = document.querySelector(".new-arrival-boxes");
      let html_arrival = "";
      for (let index = 0; index < newArrivalProducts.length; index += 1) {
        let product = newArrivalProducts[index];
        html_arrival += `
            <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="product-box">
                            <div class="img-1">
                                <img
                                    src="${product.img_url}"
                                    alt="">
                                </div>
                            <div class="product-caption">
                                <h3>${product.name}</h3>
                                <span>${product.price}</span>
                            </div>
                        </div>
                    </div>`;
      }
      newArrivalBoxes.innerHTML = html_arrival;
    })
    .catch(function (error) {
      console.log("exception: ", error);
    });

  // click show menu
  parent.addEventListener("click", function () {
    const ul = document.querySelector(".icon-user ul");
    ul.classList.toggle("show-user");
  });
});
