import { Menu } from "antd";
import { ChromeOutlined, GithubOutlined, WindowsOutlined } from "@ant-design/icons"
function MenuSider() {
    const items = [
        {
            label: "Menu 1",
            icon: <GithubOutlined />,
            key: "menu-1",
            children: [
                {
                    label: "Github",
                    key: "menu-1-1",
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
            icon: <ChromeOutlined />
        },
        {
            label: "Menu 3",
            icon: <WindowsOutlined />
        },
    ]
    return (
        <>
            <Menu
                mode="inline"
                items={items}
            />
        </>
    )
}
export default MenuSider;
// 1/39/46