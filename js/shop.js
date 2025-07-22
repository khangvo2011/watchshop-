document.addEventListener("DOMContentLoaded", function(event){
    fetch("./product.json")
    .then(function(response){
        return response.json()
    })
    .then(function(result){
        const products = result.products; 
        const CATEGORY_POPULAR = "popular"; 
        const CATEGORY_ARRIVAL = "new-arrival"; 
        let popularProducts = []
        let newArrivalProducts = []
        let allProducts = []
    //     filter product has category popular
        for(let index = 0; index < products.length; index += 1){
            let product = products[index]
            allProducts.push(product)
            if(product.category == CATEGORY_POPULAR){
                popularProducts.push(product)
            }
            if(product.category == CATEGORY_ARRIVAL){
                newArrivalProducts.push(product)
            }
        }
        
        // render popular products

        const propertiesButton = document.querySelectorAll(".properties-btn button")
        const allButton = document.querySelector(".all-product-justify button")
        for (let index = 0; index < propertiesButton.length; index ++){
            const button = propertiesButton[index]
            button.addEventListener("click", function(){
                const buttonTab = button.getAttribute("data-tab")
                if (buttonTab == "newest-arrival"){
                    const productContent= document.querySelector(".products-content")
                    const Title = document.querySelector(".popular-title")
                    let html2 = `<h2 class="section-title">Newest Arrival</h2>
                    <p class="section-desc">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>`
                    Title.innerHTML = html2;
                    let html1 = "";
                    for(let index = 0; index < newArrivalProducts.length; index +=1){
                    let product = newArrivalProducts[index]
                    html1 += `
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="watch-box" data-id = ${product.id}>
                                    <img src="${product.img_url}"
                                        alt="">
                                    <div class="watch-box-desc">
                                        <h3>${product.name}</h3>
                                        <p>${product.price}</p>
                                    </div>
                                </div>
                            </div>`
                    }
                    productContent.innerHTML = html1;

                }
                if (buttonTab == "most-popular"){
                    const productContent= document.querySelector(".products-content")
                    const Title = document.querySelector(".popular-title")
                    let html2 = `<h2 class="section-title">Popular Items</h2>
                    <p class="section-desc">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>`
                    Title.innerHTML = html2;
                    let html1 = "";
                    for(let index = 0; index < popularProducts.length; index +=1){
                    let product = popularProducts[index]
                    html1 += `
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="watch-box" data-id = ${product.id}>
                                    <img src="${product.img_url}"
                                        alt="">
                                    <div class="watch-box-desc">
                                        <h3>${product.name}</h3>
                                        <p>${product.price}</p>
                                    </div>
                                </div>
                            </div>`
                    }
                    productContent.innerHTML = html1;

                }
                if (buttonTab == "all"){
                    const productContent= document.querySelector(".products-content")
                     const Title = document.querySelector(".popular-title")
                    let html2 = `<h2 class="section-title">All Items</h2>`
                    Title.innerHTML = html2;
                    let html1 = "";
                    for(let index = 0; index < allProducts.length; index +=1){
                    let product = allProducts[index]
                    html1 += `
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="watch-box" data-id = ${product.id}>
                                    <img src="${product.img_url}"
                                        alt="">
                                    <div class="watch-box-desc">
                                        <h3>${product.name}</h3>
                                        <p>${product.price}</p>
                                    </div>
                                </div>
                            </div>`
                    }
                    productContent.innerHTML = html1;

                }
                

            })
        }
        }
        
    )
    
}
)

