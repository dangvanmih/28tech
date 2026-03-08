// nếu ở đây useEffect mà ko truyền vào dependency thì mỗi lần render ra giao diện thì lại gọi vào hàm callback 
// mà gọi vào hàm callback thì nó lại fetch API sau đó setData của useState lại set lại data
//  mà cập nhật lại data thì nó lại render lại mà render lại thì lại chạy vào callback nên nó bị lặp vô hạn

// nên ở dưới đây truyền vào 1 dependency rỗng "[]" là khi render giao diện lần thứ 2 trở đi thì callback ko bị gọi lại nữa
// cách đoạn code dưới đây chạy là nó sẽ console.log ra data ( ở đây là data rỗng chưa có gì)
// tiếp theo nps render ra giao diện ở trong câu lệnh return 
// rồi sau đó nó mới chạy vào hàm useEffect 
import { useEffect, useState } from "react";
import "./useEffect.scss"
function UseEffect2() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                // console.log(data.products);
                setData(data.products);
            })
    }, [])
    console.log(data);

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
        </>
    )
}
export default UseEffect2;