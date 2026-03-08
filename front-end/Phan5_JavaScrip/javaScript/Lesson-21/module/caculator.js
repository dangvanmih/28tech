export function tong(a,b){
    return a+b;
};

export function hieu(a,b){
    return a-b;
};

export function tich(a,b){
    return a*b;
};

export function thuong(a,b){
    return a/b;
};

export default function thongBao(){
    
    return "Thong Bao..."
}
// có thể đổi tên hàm cho gọn bằng cách nameold as namenew sau:
// export(tong as to,hieu as hi,tich as ti,thuong as th)