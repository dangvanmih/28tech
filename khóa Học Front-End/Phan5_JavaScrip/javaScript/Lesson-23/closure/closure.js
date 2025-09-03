// một hàm bên trong hàm khác được gọi là closure
const c = 10; // biến toàn cục
const caculator = () => {
    const tong = (a,b) => {
        return a + b + c;
    }

    const hieu = (a,b) => {
        return a - b;
    }

    const tich = (a,b) => {
        return a * b;
    }

    const thuong = (a,b) => {
        return a / b;
    }

    return {
        tong: tong,
        hieu: hieu,
        tich:tich,
        thuong:thuong
    };
}   

// const tt = caculator();
// console.log(tt);
// console.log(tt.tong(20,30));
// console.log(tt.hieu(20,30));
// console.log(tt.tich(20,30));
// console.log(tt.thuong(20,30));




const info = () =>{
    let fullName = "Đặng Văn Minh";


    const getFullName = () => {
    return fullName;
    }
    const setFullName = (string) => {
    fullName = string;
    }

    return {
        get:getFullName,
        set:setFullName
    };
}
const infoUser = info();
console.log(infoUser);
console.log(infoUser.get());
console.log(infoUser.set("Minhxje"));
console.log(infoUser.get());



