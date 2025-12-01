import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function CartMini () {
    const cart = useSelector(State => State.cartReducer)
    const totalQuantity = cart.reduce((sum, item) => {
    // giải thích code trên như sau: hàm reduce chạy qua tất cả các phần tử của cart để tính tổng sổ lượng items trong giỏ hàng
    // sum là giá trị cộng dồn, ban đầu được gán bằng 0, item.quantity là số lượng của item đó
        return sum + item.quantity
    },0)
    return (
        <>
            <Link to="/cart">Giỏ hàng ({totalQuantity})</Link>
        </>
    )
}

export default CartMini
// 1:12