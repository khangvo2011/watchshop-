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
    //     filter product has category popular
        for(let index = 0; index < products.length; index += 1){
            let product = products[index]
            if(product.category == CATEGORY_POPULAR){
                popularProducts.push(product)
            }
        }
        // render popular products

        const propertiesButton = document.querySelectorAll(".properties-btn")
        for (let index = 0; index < propertiesButton.length; index ++){
            const button = propertiesButton[index]

            button.addEventListener("click", function(){
                const buttonClass = button.getAttribute("data-tab")
                console.log(buttonClass);
                

            })
        }
            const popularContent = document.querySelector(".products-content")
            let html = "";
            for(let index = 0; index < popularProducts.length; index +=1){
                let product = popularProducts[index]
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
                    </div>`
            }
            popularContent.innerHTML = html;
        }
        
    )
    
}
)

