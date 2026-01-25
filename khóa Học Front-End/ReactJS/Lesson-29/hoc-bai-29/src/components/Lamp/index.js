//useState: giúp cập nhật lại trạng thái của dữ liệu (hay cập nhật lại giá trị của dữ liệu).
//Khi dữ liệu thay đổi thì giao diện được cập nhật lại theo dữ liệu mới.
import {useState } from "react";
import "./lamp.css"
function Lamp() {
    const [isTheme, setTheme] = useState(false);
    const handleClick = () => {
        setTheme(!isTheme)
    }

    return (
        <>
            <div className={isTheme ? "theme-light" : "theme-dark"}>
                <button onClick={handleClick}>
                    {isTheme ? "Tắt đi" : "Bật lên"}
                </button>
            </div>
        </>
    )
}
export default Lamp;
