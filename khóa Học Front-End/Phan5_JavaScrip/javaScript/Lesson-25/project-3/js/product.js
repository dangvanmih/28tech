import { fetchApi } from "./fetchApi.js";
const category = document.querySelector("#products")
fetchApi("http://localhost:3000/products")
    .then(data => {
        let htmls = data.map(item => { // vòng lặp map là để trả ra một mảng mới        
            return ` <div class="product__item">
                    <div class="product__image">
                         <img src="${item.thumbnail}" alt="${item.title}">
                            <div class="product__percent">
                                Tên sản phẩm: ${item.title}
                            </div>
                    </div>

                    <div class="product__content">
                    <h3 class="product__title">
                         Tên sản phẩm: ${item.title}
                    </h3>
                    <div class="product__meta">
                        <div class="product__price">
                            Giá ${item.price}
                        </div>
                        <div class="product__stock">
                            còn lại : ${item.stock} sản phẩm
                        </div>
                    </div>
                </div>
                </div>
                ` ;
        })
        console.log(htmls.join(""));
        products.innerHTML = htmls.join("") //join() là một hàm của array trong JS. Nó sẽ ghép tất cả phần tử của mảng thành một chuỗi.Tham số trong join() chính là ký tự ngăn cách giữa các phần tử.
    })