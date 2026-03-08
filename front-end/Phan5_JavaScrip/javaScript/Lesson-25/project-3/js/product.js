import { drawProduct } from "./drawProduct.js";
import { buttonSearch, inputSearch, filter, pagiNext, pagiPrevious, pagiNumber, params } from "./variable.js";

drawProduct();




//Search



const search = () => {
    params.q = inputSearch.value; // gán giá trị input vào key q của hàm params
    drawProduct(); // khi gán xong giá trị, gọi lại hàm này để vẽ lại giao diện
}

// timf kiếm khi bấm nút search
buttonSearch.addEventListener("click", () => {

    search();
})

// tìm kiếm khi bấm Enter
inputSearch.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        search();
    }
})
//End Search

// filter


filter.addEventListener("change", (event) => {
    switch (event.target.value) {
        case "mac-dinh":
            params.sort = "";
            params.order = "";
            break;

        case "gia-thap-den-cao":
            params.sort = "price";
            params.order = "asc"; // tăng dần
            break;
        case "gia-cao-den-thap":
            params.sort = "price";
            params.order = "desc"; // giảm dần
            break
        case "giam-gia-nhieu":
            params.sort = "discountPercentage";
            params.order = "desc"; // giảm dần
            break
        default:
            break;
    }
    drawProduct();
})
// End filter


//pagination

pagiNext.addEventListener("click", () => {
    params.page += 1;
    pagiNumber.innerHTML = params.page;
    drawProduct();
})


pagiPrevious.addEventListener("click", () => {

    if (params.page > 1) {
        params.page -= 1;
        pagiNumber.innerHTML = params.page;
        drawProduct();
    }
    else {
        params.page = 1;
        drawProduct()
    }

})

//End Pagination
