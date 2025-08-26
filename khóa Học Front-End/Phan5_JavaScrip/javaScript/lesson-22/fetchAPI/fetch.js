// phương thức fetch dùng để gọi lên server thông qua 1 API để lấy dữ liệu từ trên server trả về
// API đơn giản là 1 url cho phép bên FE có thể giao tiếp với BE

// Hàm call API
const fetchApi = (url) =>{  //fetchApi nhận 1 tham số url (chuỗi URL).

    const result = fetch(url) //khởi tạo một request mạng. Nó không trả về dữ liệu ngay, mà trả về một Promise ở trạng thái pending (đang chờ).
    // result lúc này là một Promise (sẽ resolve/reject sau khi request hoàn thành).

    .then(response => response.json()) // Khi fetch hoàn thành, nó truyền cho .then một Response object (gồm status, headers, body...).
    //response.json() là một hàm của Response: nó đọc body (stream) và parse JSON — trả về một Promise khác mà khi resolve sẽ chứa object/array JavaScript đã parse.


    .then(data => { //Đây là .then tiếp theo, nhận data (kết quả đã parse).
        
        return data; //trả giá trị này xuống cho promise chuỗi ở bên ngoài — nghĩa là Promise cuối cùng resolve với data.
    });
    return result;
}
// // get category:
    fetchApi("https://dummyjson.com/products/categories")
    .then(data => {
        let htmls = ""
        data.forEach(items => {
            htmls += `<div class="category-item">${items.name}</div>`
        });
        const divCategory = document.querySelector("#category");
        divCategory.innerHTML = htmls;
    })


//End get category

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