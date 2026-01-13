import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./constants.js";
import { category, params } from "./variable.js";
import { drawProduct } from "./drawProduct.js";





fetchApi(API_CATEGORY)
    .then(data => {
      let htmls = data.map(item => { // vòng lặp map là để trả ra một mảng mới
        return `<div class="category__item" data-category = ${item.name}> 
                  ${item.name}
                </div>` ;   
      })
    console.log(htmls.join(""));
    category.innerHTML = htmls.join("") //join() là một hàm của array trong JS. Nó sẽ ghép tất cả phần tử của mảng thành một chuỗi.Tham số trong join() chính là ký tự ngăn cách giữa các phần tử.


// Hiển thị danh mục sản phẩm, khi click vào danh mục thì data đổi lại theo danh mục đó.
  const listCategory = document.querySelectorAll("#category .category__item");

  listCategory.forEach(item => {
    item.addEventListener("click", () => {
      // params.category = item.dataset.category; cách 1 
      params.category = item.getAttribute("data-category");
      drawProduct();
    })
  })
})