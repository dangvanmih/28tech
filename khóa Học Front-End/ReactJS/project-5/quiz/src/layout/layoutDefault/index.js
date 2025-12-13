import "./LayoutDefault.scss";
import { NavLink, Outlet } from "react-router-dom";
function LayoutDefault() {
    return (
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">Quiz</div>
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="topic">Topic</NavLink>
                            </li>
                            <li>
                                <NavLink to="answers">Answers</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="layout-default__account">
                        <NavLink to = "login"> Đăng Nhập</NavLink>
                        <NavLink to = "register"> Đăng Ký</NavLink>
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

