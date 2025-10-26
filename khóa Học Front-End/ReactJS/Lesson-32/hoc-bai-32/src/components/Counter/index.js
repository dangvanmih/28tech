import { useMemo, useState } from "react";
import { pow } from "../helper/pow";

function Counter () {
    const [counter, setCounter] = useState(0)
    // const handleCounter = () => { // mỗi lần render lại thì nó khởi tạo thành hàm mới nên khi truyền sang bên Box thì nó nhận thấy props thay đổi và nó lại render lại nên ta phải dùng useCallBack
    //     setCounter(counter + 1);
    // }

    const handleCounter = () => {

         setCounter( counter => counter + 1);
    }
    
    // const resultPow = pow();
    // useMemo giúp tránh thực hiện lại 1 logic nào đó. và nó tạo ra 1 vùng nhớ để lưu giá trị đầu vào và chỉ ghi nhớ giá trị mới khi dependency thay đổi
    const resultPow = useMemo( () => { 
        pow()
    },[]) 
    
    
    return (

        <>
            
            {/* tại vì thằng này ko liên quan gì đến thằng Counter nên mỗi khi thằng Counter thay đổi dữ liệu
            thì thằng này ko cần phải render lại giao diện nên ta cần dùng UseMemo */}
            <div>Kết quả: {counter} </div>
            <button onClick={handleCounter}>Couter</button> 
            <div>{resultPow}</div>
        </>
    )
}
export default Counter; 
