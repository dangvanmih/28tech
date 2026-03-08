// Khi bạn tạo một Promise bằng new Promise(...), bạn truyền vào một executor function có 2 tham số:
// resolve là hàm callback: gọi nó khi công việc thành công.
// reject là hàm callback: gọi nó khi công việc thất bại.





var a = 10;
var promise = new promise((resolve , reject) => {
    if (a !== undefined && a !== null && a !== "") {
        resolve(a); // → Promise fulfilled (thành công) và dữ liệu kết quả = 10 => sau đó chạy đến then
    }
    else {
        reject(a) // không thành công sẽ chạy vào .catch
    }
   
})

promise 
    .then((success) =>{  //.then((success) => {...}) sẽ nhận giá trị đó, tức là success = 10.
        console.log(success);
        return success; // return để trả ra giá trị để sử dụng tiếp cho then bên dưới , nếu ko có return thì sẽ là undifined
    })

//     .then((success2) =>{  // hàm then 2 này phải chờ kết quả của then trên rồi mới bắt đầu chạy
//         const b = 20;
//         console.log(success2 + b);
//         return success2 + b;
//     })

//     .then((success3) =>{
//         const c = 30;
//         console.log(success3 + c);
//     })
    

//     .catch((error) =>{

//         console.log("lỗi: ",error);
        
//     })

//     .finally(() =>{

//         console.log("Luôn vào đây");
        
//     })




// ví dụ 2:

// const promise = new Promise((resolve,reject) => {
//     setTimeout(() =>{
//         // resolve(); //=> trả ra trạng thái fulfill
//         reject();  //=> trả ra trạng thái rejected
//     },3000)
// })

// setTimeout(() => {
//     console.log("sau 1 giây: " , promise); //chạy đến đây vẫn đang trong trạng thái pending vì hàm bên trên setTimeout 3000
// },1000)

// setTimeout(() => {
//     console.log("sau 2 giây: " , promise); //chạy đến đây vẫn đang trong trạng thái pending vì hàm bên trên setTimeout 3000
// },2000)

// setTimeout(() => {
//     console.log("sau 3 giây: " , promise); // chạy đến đây mới trả ra trạng thái là rejeted 
// },3000)



//ví dụ 3:

let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
let f = 60;


let sum1 = new Promise((resolve,reject) => {
    setTimeout(() => {
         resolve(a + b)
    },2000)
})

let sum2 = new Promise((resolve,reject) => {
    setTimeout(() => {
         resolve(c + d)
    },4000)
})

let sum3 = new Promise((resolve,reject) => {
    setTimeout(() => {
         resolve(e + f)
    },6000)
})


Promise.all([sum1,sum2,sum3]) //thực thi song song không phải chờ từng hàm 1 chạy và chỉ mất 6s còn thực thi như bên trên phải mất 12s
    .then((sum1,sum2,sum3) =>{
        let sum = sum1 + sum2 + sum3;
    })

     .catch((error) =>{
        console.log(error);
        
    })

     .finally(() =>{
        console.log("Luôn chạy vào đây");
        
    })