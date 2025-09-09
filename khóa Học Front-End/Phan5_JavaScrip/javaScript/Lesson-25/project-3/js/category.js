import { fetchApi } from "./fetchApi.js";
const category = document.querySelector("#category")
fetchApi("http://localhost:3000/categories")
    .then(data => {
      let htmls = data.map(item => { // vòng lặp map là để trả ra một mảng mới
        return `<div class="category__item">
                  ${item.name}
                </div>` ;
      })
    console.log(htmls.join(""));
    category.innerHTML = htmls.join("") //join() là một hàm của array trong JS. Nó sẽ ghép tất cả phần tử của mảng thành một chuỗi.Tham số trong join() chính là ký tự ngăn cách giữa các phần tử.
    })