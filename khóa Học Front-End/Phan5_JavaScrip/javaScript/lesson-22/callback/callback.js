import {tong} from "./tong";
import { kiemTraSoDuong } from "./KiemTraSoDuong";
import {kiemTraChanLe } from "./KiemTraChanLe";
//Dạng thường
// function ham1() {
//     console.log("hàm 1");
    
// }

// function ham2() {
//     console.log("hàm 2");
    
// }
// ham1();
// ham2();

//Dạng callback: một hàm được truyền dưới dạng đối số của một hàm khác
// function ham1(callback) {
//     console.log("hàm 1");
//     callback()    
    
// }

// function ham2() {
//     console.log("hàm 2");
    
// }
// ham1(ham2); // hàm 2 đang đc truyền vào dưới dạng đối số của hàm 1

// ví dụ 3:
tong(10,20,kiemTraSoDuong);
tong(15,20,kiemTraChanLe);