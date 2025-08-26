import { fetchApi } from "../helpers/fetchApi.js";
// Get Product
    fetchApi("https://dummyjson.com/products")
    .then(data => {
        let htmls = "";
        data.products.forEach(items => {
            htmls += `<div class="product-item">
            <img src="${items.thumbnail}" alt="${items.title}">
            <h3>${items.title}</h3>
            <p>${items.price}</p>
        </div>`
        });
        const divProduct = document.querySelector("#product");
        divProduct.innerHTML = htmls;
    }
    )
//End Get Product