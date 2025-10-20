//trường hợp 1 khi useEffect không có dependence là nó sẽ render ra giao diện thì hàm callback sẽ được gọi lại kể cả render lần thứ 2 thì hàm callback vẫn được gọi lại
import { useEffect } from "react";
function UseEffect1() {
    // truyền vào 1 hàm callback : hàm callback là 1 hàm được truyền vào đối số của 1 hàm khác
    // bởi vì sau từ khóa return thì sẽ ko chạy được gì nên ta phải dùng useEffect
    // để thực hiện 1 logic nào đó sau khi giao diện được render ra như dưới đây là lấy ra 3 thẻ li
    useEffect(() => {
        let listItem = document.querySelectorAll("ul li");
        console.log(listItem);
        
    })
    return(
        <>
            <ul>
                <li>Mục 1</li>
                <li>Mục 2</li>
                <li>Mục 3</li>
            </ul>
        </>
    )
}
export default UseEffect1;