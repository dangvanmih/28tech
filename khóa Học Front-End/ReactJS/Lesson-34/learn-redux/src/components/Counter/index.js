import { useDispatch, useSelector } from "react-redux";
import { down, reset, up } from "../../actions/counter"
function Counter() {
    const counter = useSelector(state => state.counter); // state
    console.log(counter);
    
    const dispatch = useDispatch();
    return (
        <>
            <h2>Counter: {counter} </h2>
            <button onClick={() => dispatch(up())}>Up</button>
            <button onClick={() => dispatch(down())}>Down</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
}
export default Counter;
//56:00