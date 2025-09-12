import { fetchApi } from "./fetchApi.js";
import { API_PRODUCT } from "./constants.js";
import { params, products } from "./variable.js";
// để gợi ý import ấn ctrl+space 







export const drawProduct = () => {

    // phần này để check chánh danh mục rỗng thì sẽ bị trả về mảng rỗng và giao diện sẽ ko vẽ ra sản phẩm
    let category = "";
    if (params.category != "") {
        category = `&category=${params.category}`;
    }




    const api = `${API_PRODUCT}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}$_limit=${params.limit}${category}` // nối chuỗi API PRODUCT với chuỗi giá trị trong input search

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

