//useContext (bối cảnh) giúp đơn giản hóa việc chuyền dữ liệu từ component cha xuống các component con mà không cần phải sử dụng đến props.
import { useContext } from "react";
import { Menucontext } from "../Layout";
function Menu() {
  const menus = useContext(Menucontext)
    return (
        <>
            <ul>
                {menus.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        
        
        </>
    )
}
export default Menu;