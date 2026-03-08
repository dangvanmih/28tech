//dưới đây là trường hợp useEffect dùng dependency và có truyền 1 biến vào dependency đó 
// Khi render lại giao diện (tức render lần 2 trở đi), thì callback của useEffect được gọi lại khi dependency thay đổi.

import { useEffect, useState } from "react";
import "./useEffect.scss"
function UseEffect3() {
    const limit = 10; //số phần tử mỗi trang
    const [data, setData] = useState([]); //data chứa mảng sản phẩm hiện tại. Khởi tạo bằng [] để lúc render đầu tiên data.map không lỗi.
    const[pageActive, setPageActive] = useState(0); //là chỉ số trang hiện tại (0-based). Ban đầu là trang 0.
    const [quatityPage, setQuantityPage] = useState(0); //(số trang tổng cộng). Khởi tạo 0.
    useEffect(() => {
        fetch(`https://dummyjson.com/products?skip=${pageActive*limit}&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.products);
                setData(data.products);
                setQuantityPage(Math.ceil(data.total/limit)); // hàm làm tròn số
               
            })
    }, [pageActive])
    // console.log(data);
    const handlePage = (e) => {
       setPageActive(e);
    }

    return (
        <>

            <div className="product__list">
                {data.map(item => (
                    <div className="product__item" key={item.id}>
                        <div className="product__image">
                            <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <div className="product__title">
                            {item.title}
                        </div>
                        <div className="product__price">
                            {item.price}$
                        </div>
                    </div>
                ))}
            </div>
            <ul>
                {/* vì quatityPage là 1 số nên phải chuyển nó thành 1 mảng như bên dưới đây */}
                {[...Array(quatityPage)].map((_,index) => (  // _ không dùng đến thì viết như thế
                    <li key={index} onClick={() =>{handlePage(index)} }>{index+1}</li>
                ))}
              
            </ul>
        </>
    )
}
export default UseEffect3;
