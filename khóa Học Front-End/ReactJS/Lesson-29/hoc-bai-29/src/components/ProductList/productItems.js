//Đây là một React component con.
function ProductItems(props) {  //Nó nhận dữ liệu từ props
    const {item} = props  //Dòng này chỉ là cách rút gọn (destructuring) để lấy nhanh ra item thay vì phải viết props.item nhiều lần.
    return (
        <>
            <div className="product__item"  >
                <img className="product__images" src={item.images} alt={item.title} style={{ width: "100px" }} />
                <div className="product__title">{item.title}</div>
                <div className="product__price">{item.price}</div>
            </div>

        </>
    )
}
export default ProductItems;