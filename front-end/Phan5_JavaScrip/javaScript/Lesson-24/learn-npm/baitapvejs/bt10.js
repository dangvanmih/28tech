// viết 1 hàm random các kí tự , đầu vào là 1 độ dài chuỗi, đầu ra là 1 chuỗi string tương ứng với độ dài đó

const generateRandomString = (length) =>{
    const character = 
    "1234567890qwertyuiopasdjklzxcvbnmQƯERTYUIOPASDFGHJKLZXCVBNM";

    let ressult = "";
    for(let i = 0 ; i < length; i++) {
        ressult += character.charAt(Math.floor(Math.random() * character.length));

    }
    return ressult;
}

const input = prompt("Nhập độ dài chuỗi cần random");
if(input.length > 0){
    const number = parseInt(input);
    if(isNaN(number)) {
        console.log("vui lòng nhập số");
    }
    else {
        const ressult = generateRandomString(number);
        console.log(ressult);
        
    }
}
else{
    alert("vui lòng nhập ít nhất một số");
    
}