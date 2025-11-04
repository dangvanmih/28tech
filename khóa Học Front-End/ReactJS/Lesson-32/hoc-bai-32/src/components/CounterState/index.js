import { useState } from "react";

function CounterState() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div>Kết quả: {counter} </div>
            {
            /* () => setCounter(counter + 1) chính là một hàm mũi tên (arrow function).
            Nó không có tên, nên gọi là anonymous function (hàm ẩn danh).
            Đây là một hàm, giống như bạn viết:
            function () {
                setCounter(counter + 1);
            }
            React hiểu:
                “Khi người dùng click vào nút này, gọi hàm ẩn danh đó.” */
            }
            <button onClick={() => setCounter(counter + 1)}>Up</button>
            <button onClick={() => setCounter(counter - 1)}>Down</button>
            <button onClick={() => setCounter(0)}>Reset</button>

        </>
    )
}
export default CounterState;