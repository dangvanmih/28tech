import { useSelector } from "react-redux"

function Cart () {
    const cart = useSelector(State => State.cartReducer)
    console.log(cart);
    
    return (
        <>Cart</>
    )
}

export default Cart