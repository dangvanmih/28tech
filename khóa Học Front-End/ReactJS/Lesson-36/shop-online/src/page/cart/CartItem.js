import { useDispatch } from "react-redux"
import { deleteItem, updateQuantity } from "../../actions/cart"


function CartItem(props) {
    const { item } = props
    const dispatch = useDispatch()
    const handleUp = () => {
            dispatch(updateQuantity(item.id))


    }
    const handleDown = () => {
        if (item.quantity > 1) {
            dispatch(updateQuantity(item.id, -1))
        }
    }

    const handledel = () => {
        dispatch(deleteItem(item.id))
    }
    return (
        <>
            <div className="cart__item" key={item.id}>
                <div className="cart__image">
                    <img src={item.info.thumbnail} alt={item.info.title} />
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
                    <button onClick={handleUp}>+</button>
                    <input value={item.quantity} />
                    <button onClick={handleDown}>-</button>
                </div>
                <button onClick={handledel}>Xóa</button>
            </div>
        </>
    )
}
export default CartItem