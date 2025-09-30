import { product } from "../../database/product"
import ProductItems from "./productItems";
import "./ProductList.css"
function ProductList() {

    console.log(product);

    return (
        <>
            <div className="product__list">
                {product.map((items) => (
                    <ProductItems item = {items} key={items.id} />
                ))}
            </div>

        </>
    )
}
export default ProductList