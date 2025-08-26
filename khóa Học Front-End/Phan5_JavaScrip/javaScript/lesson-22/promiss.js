var a = 10;

var promise = new promise((resolve , reject) => {
    if (a !== undefined && a !== null && a !== "") {
        resolve(a); // Thành công => sẽ chạy vào .then
    }
    else {
        reject(a) // không thành công sẽ chạy vào .catch
    }
   
})

promise 
    .then((success) =>{
        console.log(success);
        return success; // return để trả ra giá trị để sử dụng tiếp cho then bên dưới , nếu ko có return thì sẽ là undifined
    })

    .then((success2) =>{  // hàm then 2 này phải chờ kết quả của then trên rồi mới bắt đầu chạy
        const b = 20;
        console.log(success2 + b);
        return success2 + b;
    })

    .then((success3) =>{
        const c = 30;
        console.log(success3 + c);
    })
    

    .catch((error) =>{

        console.log("lỗi: ",error);
        
    })

    .finally(() =>{

        console.log("Luôn vào đây");
        
    })