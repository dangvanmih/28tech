//useState: giúp cập nhật lại trạng thái của dữ liệu (hay cập nhật lại giá trị của dữ liệu).
//Khi dữ liệu thay đổi thì giao diện được cập nhật lại theo dữ liệu mới.

import { use, useState } from "react";

function Lamp() {
    // let status = false;
    const [status, setState] = useState(false);
    const handleClick = () =>  {  
        // status = !status;
        setState(!status)
    }
    console.log(status);

    return (
        <>
            <button onClick={handleClick}>
                {status ? "Tắt đi" : "Bật lên"}
            </button>
            <div>

                {status ? "Đèn đang bật" : "Đèn đang tắt"}
            </div>
        </>
    )
}
export default Lamp;
