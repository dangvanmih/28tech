import { useSelector } from "react-redux"
import "./cart.scss"
function CartList() {
    const cart = useSelector(State => State.cartReducer)
    return (
        <>
            <div className="cart">
                {cart.map(item => (
                    <div className="cart__item" key={item.id}>
                        <div className="cart__image">
                            <img src={item.info.thumbnail} alt={item.info.title}/>
                        </div>
                        <div className="cart__content">
                            <h4 className="cart__title">
                                {item.info.title}
                            </h4>
                            <div className="cart__price--new">
                                {Math.round(item.info.price * (100 - item.info.discountPercentage) / 100)} $
                            </div>
                            <div className="cart__price--old">
                                {item.info.price}
                            </div>
                        </div>
                        <div className="cart__quantity">
                            <button>+</button>
                            <input value={item.quantity}/>
                            <button>-</button>
                        </div>
                        <button>Xóa</button>
                    </div>
                ))}
            </div>
        </>
    )
}
export default CartList
// 1:25:58