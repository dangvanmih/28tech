import { Outlet, Link } from "react-router-dom";
import "./LayoutDefault.scss";
function LayoutDefault() {
    return (
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">
                        <Link to="/">Logo</Link>
                    </div>
                    <div className="layout-default__cart">
                        
                        <Link to="/cart">Giỏ hàng</Link>
                        
                    </div>
                </header>
                <main className="layout-default__main">
                    <Outlet />
                </main>
                <footer className="layout-default__footer">
                    copyright @ 205 by 28tech
                </footer>
            </div>
        </>
    )
}

export default LayoutDefault;

