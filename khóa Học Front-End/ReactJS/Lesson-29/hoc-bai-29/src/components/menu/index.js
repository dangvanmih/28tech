function Menu() {
    const arrayMenu = [
        "Trang chủ",
        "Sản phẩm",
        "Tin tức",
        "Giới Thiệu",
        "Liên hệ",
    ];

    return (
        <>
            <ul>
                {arrayMenu.map((item, index) =>
                (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}
export default Menu