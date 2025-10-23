// useRef trả về một object với thuộc tính current được khởi tạo thông qua tham số truyền vào.
// Object được trả về không bị khởi tạo lại khi component render lại.
// Giá trị trong object thay đổi nhưng component không bị render lại (useState thay đổi thì làm component render lại).
import { useRef, useState } from "react";

function UseRef () {
    const [counter, setCouter] = useState(0); // useState giúp cập nhật lại giao diện khi dữ liệu thay đổi
    const counterRef = useRef(0);
    const counterobj = { // cái này luôn luôn bằng 0 bởi vì mỗi lần useState render lại thì nó lại gán lại giá trị của current bằng 0
        current: 0
    }
    const handleClick = () => {
        setCouter(counter + 1) // nó check giá trị mà khác với giá trị cũ thì sẽ render lại giao diện
        counterRef.current = counterRef.current + 1; // còn thằng useRef thì không nó vẫn chạy và ko bị render lại giao diện
        counterobj.current = counterobj.current + 1
    }
    console.log("counter: " + counter );
    console.log("counterRef: " + counterRef ); // useRef
    console.log("counterobj: " + counterobj );
    return (
        <>
            <button onClick={handleClick}>Click</button>
        </>
    )
}
export default UseRef;