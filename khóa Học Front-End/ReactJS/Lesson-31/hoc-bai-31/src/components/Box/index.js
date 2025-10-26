import { memo } from "react"; // memo: bọc component lại để tránh render lại giao diện đỡ tốn hiệu năng
// dùng để tối ưu: check kết quả hiện tại và trước đó có gì khác không nếu không thì ko cần phải render lại giao diện
function Box (props) {
    const {onCounter, onReset} = props;

    console.log("Render box");
    const handleClick = () => {
        onCounter();
    }
    const handleReset = () => {
        onReset();
    }
    return (
        <>
        
            <button onClick={handleClick}>Couter</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default memo(Box);