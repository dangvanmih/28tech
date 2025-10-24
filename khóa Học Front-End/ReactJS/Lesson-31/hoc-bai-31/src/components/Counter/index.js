import { useState } from "react";
import Box from "../Box";


function Counter () {
    const [counter, setCounter] = useState(0)
    const handleCounter = () => {
        setCounter(counter + 1);
    }
    return (
        <>
            <Box /> 
            {/* tại vì thằng này ko liên quan gì đến thằng Counter nên mỗi khi thằng Counter thay đổi dữ liệu
            thì thằng này ko cần phải render lại giao diện nên ta cần dùng UseMemo */}
            <div>Kết quả: {counter} </div>
            <button onClick={handleCounter}>Click</button>
        </>
    )
}
export default Counter; 