import { product } from "../../database/product"
import ProductItems from "./productItems";
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