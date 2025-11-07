import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './product.css'
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
                <>
                <div className="product__list">
                     {[...Array(6)].map((_, index) => (
                          <div className="product__item" key={index}>
                            <Skeleton className="product__image" />
                            <Skeleton className="product__item" />
                            <Skeleton className="product__image__cricle" />
                        </div>
                     ))}
                </div>
                </>

            ) : (
                <div className="product__list">
                    {products.map(item => (
                        <div className="product__item" key={item.id}>{item.title}
                            <img className="product__image" src= {item.thumbnail} alt= {item.title}  />
                            <h3 className="product__title">{item.title}</h3>
                            <img className="product__image__cricle" src= {item.thumbnail} alt= {item.title}  />
                        </div>
                        
                    ))}
                </div>
            )}
        </>
    )
}
export default ProductState;
// 28:18 