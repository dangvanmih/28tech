function ProductItem(props) {
    const {item} = props
    return (
        <>
            <div className="product__item">
                <img className="product__image" src={item.thumbnail} alt={item.title} />
                <h3 className="product__title">
                    {item.title}
                </h3>
                <div className="product__price-new">
                    {Math.round(item.price * (100 - item.discountPercentage) / 100)} $
                </div>
                <div className="product__price-old">
                    {item.price} $
                </div>
                <div className="product__percent">
                    {item.discountPercentage} %
                </div>
                <button>Thêm vào giỏ hàng</button>
            </div>
        </>
    )
}
export default ProductItem;