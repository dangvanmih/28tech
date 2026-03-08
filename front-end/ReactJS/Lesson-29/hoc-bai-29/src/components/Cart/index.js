import { useState } from "react";
import "./cart.scss"
function Cart() {
    const uniPrice = 120000;
    // let quanity = 1;
    const [quanity, setQuantity] = useState(1);

    const handleChange = (e) => {
        const updateQuantity = parseInt(e.target.value);
        setQuantity (updateQuantity); // báo cho React: “Ê, cập nhật state quanity thành số mới này nhé”.
    }

    
    return (
        <>
            <table className="cart">
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Giày thể thao nam cao cấp</td>
                        <td>
                            <input defaultValue={quanity} type="number" min={1} onChange={handleChange} />
                        </td>
                        <td>{uniPrice}đ</td>
                        <td>{uniPrice * quanity}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )

}

export default Cart;
