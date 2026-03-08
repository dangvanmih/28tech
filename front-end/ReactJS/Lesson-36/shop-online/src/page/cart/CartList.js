import { useSelector } from "react-redux"
import "./cart.scss"
import CartItem from "./CartItem"
function CartList() {
    const cart = useSelector(State => State.cartReducer)
    return (
        <>
            <div className="cart">
                {cart.map(item => (
                    <CartItem item ={item} />
                ))}
            </div>
        </>
    )
}
export default CartList
