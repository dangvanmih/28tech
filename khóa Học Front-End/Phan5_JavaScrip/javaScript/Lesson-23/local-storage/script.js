const input = document.querySelector("input")
const buttoSend = document.querySelector("#send")
const resultDiv = document.querySelector("#result")
const buttonClear = document.querySelector("#clear")
const buttonUp = document.querySelector("#up")
const buttonClearAll = document.querySelector("#clearAll")


buttoSend.addEventListener("click", () =>{
    const name = input.name;
    const value = input.value;
    
    
    if(value) {
        localStorage.setItem(name , value); // thêm dữ liệu  vào sessionStorage

        const email = localStorage.getItem("email"); // lấy dữ liệu từ sessionStorage
        resultDiv.innerHTML = email;
    }}
)

buttonClear.addEventListener("click", () => {
    localStorage.removeItem("email"); // xóa  dữ liệu từ sessionStorage
    resultDiv.innerHTML = "";
});

let count = 0;
buttonUp.addEventListener("click", () => {
   localStorage.setItem(`key${count}`, `value${count}`); // nối chuỗi

   count++;
});

buttonClearAll.addEventListener("click", () => {
   localStorage.clear(); // xóa toàn bộ dữ liệu từ sessionStorage
});

for(let i = 0 ; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key , value);
    
}
// localStorage : lưu vô hạn 
// sessionStorage: lưu có thời hạn, hết hạn sau khi tắt trình duyệt
sessionStorage.setItem("token","ádasdasdasdasdasd")