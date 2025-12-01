import { useEffect, useState } from "react"
import { getProductList } from "../../service/ProductService"
import "./product.scss";
import ProductItem from "./ProductItems";
function Product() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getProductList();
            setProduct(result)
        }
        fetchAPI()
    }, [])
    // console.log(product);
    return (
        <><div className="product">
            {product.map(item => (
                <ProductItem item = {item} key = {item.id}/>
            ))}
        </div>

        </>
    )
}
export default Product
// 43/17