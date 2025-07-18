document.addEventListener("DOMContentLoaded", function(event){
    fetch("./product.json") 
    .then(function(response){
        return response.json()
    })
    .then(function(result){
        console.log(result);
        const popularBoxes = document.querySelector(".popular-boxes")
        console.log(popularBoxes);                                  
        let popularItems = []
        const popularProducts = result.products
        let productUsingRender = ""
        for(let index = 0; index < popularProducts.length; index+=1){
            let product = popularProducts[index]
            if(product.category == "popular"){
                popularItems.push(product)
                let html = `
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="watch-box">
                            <img src="${product.img_url}"
                                alt="">
                            <div class="watch-box-desc">
                                <h3>Thermo Ball Etip Gloves</h3>
                                <p>$45,743</p>
                            </div>
                        </div>
                    </div>
                `
                productUsingRender +=html
            }
            if (popularBoxes) {
        popularBoxes.innerHTML = productUsingRender;
            }
        }
        console.log(popularItems);
        console.log(product.img_url)
        parent.innerHTML = productUsingRender

        
    })
    .catch(function(error){
        console.log("exception: ", error )
    })
})