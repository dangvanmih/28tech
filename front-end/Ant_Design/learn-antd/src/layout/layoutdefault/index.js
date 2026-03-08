import {Layout} from "antd"
import {Outlet} from "react-router-dom"
import "./LayoutDefault.css";
import logo from "../../images/logo.png";
import logoFold from "../../images/logo-fold.png"
import {MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined} from "@ant-design/icons";
import { useState } from "react";
import Notify from "../../components/Notify";
import MenuSider from "../../components/MenuSider";
const {Sider, Content} = Layout;
function LayoutDefault () {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <>
            <Layout className="layout-default">
                <header className="header">
                    <div className={"header__logo " + (collapsed && "header__logo-collapsed")} >
                        <img src={collapsed ? logoFold : logo} alt="Logo"/>
                    </div>
                    <div className="header__nav">
                        <div className="header__nav-left">
                            <div className="header__collapse" onClick={() => setCollapsed(!collapsed)}>
                                {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                            </div>
                            <div className="header__search">
                                <SearchOutlined />
                            </div>
                        </div>
                        <div className="header__nav-right">
                            <Notify />
                        </div>
                    </div>
                </header>

                <Layout>
                    <Sider className="sider" collapsed={collapsed} theme="light">
                        <MenuSider />
                    </Sider>

                    <Content className="content">
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
export default LayoutDefault
