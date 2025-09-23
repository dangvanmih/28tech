// Default Parameters (tham số mặc định)
// const sum = (a = 0,b = 0) => { // gán a,b = 0 để khi người dùng ko truyền vào giá trị thì trả về 0 chứ ko phải NAN
//     return a + b;
// }
//cách 2:
// const sum = (a,b) => {
//     a = a || 0;
//     b = b || 0;
//     return a + b;
// }

// console.log(sum(10,20));

//Spread syntax cú phải trải ra các phần tử của mảng
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [1, 2, 3,4, 5, 6];
// const array4 = [...array1,...array2]
 
// console.log(...array1);
// console.log(...array2);
// console.log(...array3);
// console.log(...array4);


// let infoUser = {
//     fullName: "Đặng Văn Minh",
//     email: "minh@gmail.com",
// };



// let infoUpdate = {
//     phone: "12345678",
//     age: 18
// }

// let inforFinal = {
//     ...infoUser,
//     ...infoUpdate
// }
// console.log(inforFinal);


// Rest Parameter: tham số còn lại, là tham số đại diện cho những tham số không được khai báo của một function.

// Mảng numbers = [10,20,30,40,50,60].
// reduce bắt đầu với total = 0
// Lần 1: total = 0 + 10 = 10.
// Lần 2: total = 10 + 20 = 30.
// Lần 3: total = 30 + 30 = 60.
// … tiếp tục cho đến hết.

// const sum = (...numbers) => {
//     console.log(numbers);

//     const result = numbers.reduce((total, item) => {
//         return total + item;
//     },0);


//     return result;
// }
// console.log(sum(10,20,30,40,50,60));


//DestructuringDestructuring (phá vỡ cấu trúc) cho phép chúng ta dễ dàng sử dụng các giá trị phần tử của Array hoặc Object (Mỗi lần lấy giá trị sẽ ngắn hơn).

let infoUser = {
    fullName: "Đặng Văn Minh",
    email: "minh@gmail.com",
 };

 console.log(infoUser.fullName);
 

 
 const {fullName , email} = infoUser;


console.log(fullName);
console.log(email);

 