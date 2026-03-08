import { useDispatch, useSelector } from "react-redux"
import CartList from "./CartList";
import { deleteAll } from "../../actions/cart";
function Cart() {
    const cart = useSelector(State => State.cartReducer)
    const total = cart.reduce((sum, item) => {
        const priceNew = (Math.round(item.info.price * (100 - item.info.discountPercentage) / 100))
        return sum + priceNew*item.quantity
    },0)
    const dispatch = useDispatch()
    const handleDelAll = () => {
        dispatch(deleteAll())
    }
    return (
        <>
            <h2>Giỏi hàng</h2>
            <button onClick={handleDelAll}>Xóa tất cả</button>

            <div>
                {cart.length > 0 ? (
                    <>
                        <CartList />
                        <div className="cart__total">
                            Tổng tiền: <span>{total}$</span>
                        </div>
                    </>
                ) : (
                    <> Giỏ hàng trống</>
                )}
            </div>
        </>
    )
}

export default Cart