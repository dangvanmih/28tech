import { fetchApi } from "./fetchApi.js";
import { API_PRODUCT } from "./constants.js";
import { params } from "./variable.js";





const products = document.querySelector("#products")

export const drawProduct = () => {

    console.log(params); // chỗ này để in ra value từ người dùng nhập vào sau đó vẽ giao diện 

    const api = `${API_PRODUCT}?q=${params.q}` // nối chuỗi API PRODUCT với chuỗi giá trị trong input search

    fetchApi(api)
        .then(data => {
            let htmls = data.map(item => { // vòng lặp map là để trả ra một mảng mới        
                return ` <div class="product__item">
                    <div class="product__image">
                         <img src="${item.thumbnail}" alt="${item.title}">
                            <div class="product__percent">
                              ${item.discountPercentage}%
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
}

