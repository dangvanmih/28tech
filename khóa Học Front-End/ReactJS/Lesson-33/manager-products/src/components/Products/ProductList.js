import { useEffect, useState } from "react";

function ProductList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fecthApi = async () => {
            fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data);
            })
        }
        fecthApi()
    },[]);


    console.log(data);
    
    return (
        <>
           <div className="product__list">
                 {data.map(item => (
                    <div className="product__item" key={item.id}>
                        <div className="product__image">
                            <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <h4 className="product__title">{item.title}</h4>
                        <p className="product__price">{item.price}</p>
                        <p className="product__discount">{item.discountPercentage} %</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                 ))}
           </div>
        
        </>
    )
}
export default ProductList;