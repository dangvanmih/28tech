import { useReducer } from "react";

const reducer = (state, action) => {
    // action Up, Down , Reset
    switch(action) {
        case "Up":
            return state + 1;
        case "Down":
            return state - 1;
        case "Reset":
            return 0;
        default:
            return state;
    }

}

function CounterReducer() {
    // const [counter, setCounter] = useState(0);
    const [counter, dispatch] = useReducer(reducer,0)

    // counter và dispatch giống với useState, tương tự giá trị khởi tạo ban đầu bằng 0 khi đó counter = 0
    // và khi onClick vào 1 trong 3 button kia thì dispatch sẽ gửi lên 1 action vào trong cái reducer trong đoạn useReducer(reducer,0)
    // nó như là 1 biến trung gian thì khi đó cái hàm reducer bên trên , tham số action sẽ nhận được giá trị tương ứng mà dispatch gửi lên
    // còn tham số state thì nhận giá trị của counter
    return (
        <>
            <div>Kết quả: {counter} </div>
            <button onClick={() => dispatch("Up")}>Up</button>
            <button onClick={() => dispatch("Down")}>Down</button>
            <button onClick={() => dispatch("Reset")}>Reset</button>

        </>
    )
}
export default CounterReducer;