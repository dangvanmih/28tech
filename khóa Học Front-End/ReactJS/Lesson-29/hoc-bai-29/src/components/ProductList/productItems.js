//Đây là một React component con.
function ProductItems(props) {  //Nó nhận dữ liệu từ props
    const {item} = props  // Trong code, bạn viết const {item} = props → tức là lấy ra object item từ props được truyền vào.
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