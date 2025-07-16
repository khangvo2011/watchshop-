document.addEventListener("DOMContentLoaded", function(event){
    fetch("./product.json") 
    .then(function(response){
        return response.json()
    })
    .then(function(result){
        console.log(result);
        const popularBoxes = document.querySelector(".populor-boxes")
        console.log(popularBoxes);
        let popularItems = []
        const popularProducts = result.products
        for(let index = 0; popularProducts.length; index+=1){
            let product = popularProducts[index]
            console.log(product);
        }
        
    })
    .catch(function(error){
        console.log("exception: ", error )
    })
})