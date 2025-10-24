import { memo } from "react"; // check kết quả hiện tại và trước đó có gì khác không nếu không thì ko cần phải render lại giao diện

function Box () {
    console.log("Render box");
    
    return (
        <></>
    )
}
export default memo(Box);