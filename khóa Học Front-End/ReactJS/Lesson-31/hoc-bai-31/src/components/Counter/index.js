import { useCallback, useState } from "react";
import Box from "../Box";


function Counter () {
    const [counter, setCounter] = useState(0)
    // const handleCounter = () => { // mỗi lần render lại thì nó khởi tạo thành hàm mới nên khi truyền sang bên Box thì nó nhận thấy props thay đổi và nó lại render lại nên ta phải dùng useCallBack
    //     setCounter(counter + 1);
    // }

    const handleCounter = useCallback( 
        //Giúp tạo ra một vùng nhớ để lưu hàm callback và chỉ tạo ra hàm callback mới khi dependencies thay đổi.
        // dùng hàm này để khi useState render lại thì hàm này ko cần phải khởi tạo 1 hàm mới
        () => {
            setCounter( counter => counter + 1); // Hãy lấy giá trị hiện tại của counter, rồi cộng thêm 1
            // setCounter(counter + 1); kết quả sẽ luôn bẳng 1 vì callback chỉ lưu giá trị cũ ko cập nhật lại dù counter có bằng bao nhiêu đi nữa
        },[])

    const handleReset = useCallback( () => {
        setCounter(0);
    },[])
    return (
        <>
            
            {/* tại vì thằng này ko liên quan gì đến thằng Counter nên mỗi khi thằng Counter thay đổi dữ liệu
            thì thằng này ko cần phải render lại giao diện nên ta cần dùng UseMemo */}
            <div>Kết quả: {counter} </div>
            <Box onCounter = {handleCounter} onReset = {handleReset}/> 
        </>
    )
}
export default Counter; 
// 1:19:43