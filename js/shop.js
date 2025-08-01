document.addEventListener("DOMContentLoaded", function (event) {
  const CATEGORY = {
    popular: "popular",
    "new-arrival": "new-arrival",
    price: "price",
    all: "all",
  };
  const tabActive = document.querySelector(".tabs .active");
  fetchProductList(tabActive.getAttribute("data-tab"));
  f;
  const tabs = document.querySelectorAll(".tab");
  for (let index = 0; index < tabs.length; index += 1) {
    const tab = tabs[index];
    tab.addEventListener("click", function () {
      // remove active class
      for (let i = 0; i < tabs.length; i += 1) {
        const currentTab = tabs[i];
        currentTab.classList.remove("active");
      }
      tab.classList.add("active");

      const categoryFilter = tab.getAttribute("data-tab");
      fetchProductList(categoryFilter);
    });
  }
  function fetchProductList(categoryFilter) {
    fetch("./product.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const products = data.products;
        const parent = document.querySelector(".products-content");

        if (categoryFilter === CATEGORY.all) {
          renderProductsTabs(products, parent);
          return;
        }

        if (
          categoryFilter === CATEGORY.popular ||
          categoryFilter === CATEGORY["new-arrival"]
        ) {
          const productsFilter = filterProducts(products, categoryFilter);
          renderProductsTabs(productsFilter, parent);
          return;
        }

        //   const productSortedPrice = sortProducts(products);
        //   renderProductsTabs(productsFilter, parent);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function filterProducts(products, categoryFilter) {
    const result = [];
    for (let index = 0; index < products.length; index += 1) {
      let product = products[index];
      if (product.category === categoryFilter) {
        result.push(product);
      }
    }
    return result;
  }

  function sortProducts(products) {
    const result = [];

    return result;
  }

  function renderProductsTabs(products, parent) {
    let html = "";
    for (let index = 0; index < products.length; index += 1) {
      let product = products[index];
      html += `
                              <div class="col-lg-4 col-md-6 col-sm-12">
                                  <div class="watch-box" data-id = ${product.id}>
                                      <img src="${product.img_url}"
                                          alt="">
                                      <div class="watch-box-desc">
                                          <h3>${product.name}</h3>
                                          <p>${product.price}</p>
                                      </div>
                                  </div>
                              </div>`;
    }
    parent.innerHTML = html;
  }
  const buttonHamburger = document.querySelector(".hamburger button");
  const listNavItems = document.querySelectorAll(".nav-item");
  buttonHamburger.addEventListener("click", function () {
    const navigation = document.querySelector(".nav-func");
    console.log(navigation);
    // add class - remove class
    navigation.classList.toggle("show");
  });
});
