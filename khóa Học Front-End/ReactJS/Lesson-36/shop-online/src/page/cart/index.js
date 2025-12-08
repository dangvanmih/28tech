import { useSelector } from "react-redux"
import CartList from "./CartList";
function Cart() {
    const cart = useSelector(State => State.cartReducer)
    console.log(cart);

    return (
        <>
            <h2>Giỏi hàng</h2>
            <button>Xóa tất cả</button>

            <div>
                {cart.length > 0 ? (
                    <>
                        <CartList />
                        <div className="cart__total">
                            Tổng tiền: <span>1000$</span>
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