import { drawProduct } from "./drawProduct.js";
import { params } from "./variable.js";

drawProduct();




//Search
const inputSearch = document.querySelector("#search input")

const buttonSearch = document.querySelector("#search button")

buttonSearch.addEventListener("click", () => {
    params.q = inputSearch.value; // gán giá trị input vào key q của hàm params
    drawProduct(); // khi gán xong giá trị, gọi lại hàm này để vẽ lại giao diện => sau đó ở file vẽ giao diện sản phẩm t
    
})
//End Search