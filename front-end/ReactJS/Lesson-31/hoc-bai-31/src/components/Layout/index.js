import Header from "../header";
import { createContext } from "react";

export const Menucontext = createContext();

function Layout() {

    const menus = [
        "Trang chủ",
        "Tin tức",
        "Giới thiệu",
        "Liên hệ"
    ];

    return (
        <>
            <Menucontext.Provider value={menus}>
                 <Header />
            </Menucontext.Provider>
           
            <div>Main</div>
            <div>Footer</div>
        
        </>
    )
}
export default Layout;