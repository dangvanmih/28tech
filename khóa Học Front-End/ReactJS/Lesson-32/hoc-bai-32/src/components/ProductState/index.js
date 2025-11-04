import { useEffect, useState } from "react";

function ProductState () {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchApi = () => {
            fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                console.log(data.products);
                setProduct(data.products)
                setLoading(false);
            })
        }
        setTimeout(() => {
            fetchApi();
        },3000); 
    }, [])

    return (
        <>
            {loading ? (
                 <>Đang tải dữ liệu...</>

            ) : (
                <ul>
                    {products.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </>
    )
}
export default ProductState; 