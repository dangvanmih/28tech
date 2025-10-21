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