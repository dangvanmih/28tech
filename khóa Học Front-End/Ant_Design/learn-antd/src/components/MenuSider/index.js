import { Menu } from "antd";
import { ChromeOutlined, GithubOutlined, WindowsOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
function MenuSider() {
    const items = [
        {
            label: "Menu 1",
            icon: <GithubOutlined />,
            key: "menu-1",
            children: [
                {
                    label: <Link to="/">Dash Board</Link>,
                    key: "/",
                },
                {
                    label: "Chorme",
                    key: "menu-1-2",
                },
                {
                    label: "Coc Coc",
                    key: "menu-1-3",
                }
            ],   
        },
        {
            label: "Menu 2",
            icon: <ChromeOutlined />,
            children: [
                {
                    label: "Github",
                    key: "menu-2-1",
                },
                {
                    label: "Chorme",
                    key: "menu-2-2",
                },
                {
                    label: "Coc Coc",
                    key: "menu-2-3",
                }
            ],   
        },
        {
            label: "Menu 3",
            icon: <WindowsOutlined />
        },
         {
            label: <Link to="book-room">Book Room</Link>,
            icon: <ChromeOutlined />,
            key: "/book-room"
        },
    ]
    return (
        <>
            <Menu
                mode="inline"
                items={items}
                defaultSelectedKeys={["/"]} // mặc định key nào đc active
                defaultOpenKeys={["menu-1"]} // mặc định key nào được mở
            />
        </>
    )
}
export default MenuSider;