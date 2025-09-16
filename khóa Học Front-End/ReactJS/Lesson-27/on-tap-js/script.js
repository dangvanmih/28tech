// Default Parameters (tham số mặc định)
// const sum = (a = 0,b = 0) => { // gán a,b = o để khi người dùng ko truyền vào giá trị thì trả về 0 chứ ko phải NAN
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


// Rest Parameter

const sum = (...numbers) => {
    console.log(numbers);

    const result = numbers.reduce((total, item) => {
        return total + item;
    },0);


    return result;
}
console.log(sum(10,20,30,40,50,60));
// 1:31