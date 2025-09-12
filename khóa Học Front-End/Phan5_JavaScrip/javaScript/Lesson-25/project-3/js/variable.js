// Hàm này để nối chuỗi với value của người dùng nhập vào
export let params = {
    q: "",
    sort: "",
    order: "",
    page: 1,
    limit: 8, // mặc định mỗi trang 8 sản phẩm
    category: ""

};


export const inputSearch = document.querySelector("#search input");
export const buttonSearch = document.querySelector("#search button");
export const filter = document.querySelector("#filter");
export const pagiPrevious = document.querySelector("#pagination__Prev");
export const pagiNext = document.querySelector("#pagination__Next");
export const pagiNumber = document.querySelector("#pagination__Number");
export const products = document.querySelector("#products");
export const category = document.querySelector("#category")