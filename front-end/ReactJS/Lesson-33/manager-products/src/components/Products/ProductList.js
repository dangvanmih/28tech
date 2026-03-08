import { useEffect, useState } from "react";
import EditProduct from "./EditProducts";
import DeleteProduct from "./DeleteProduct"
function ProductList(props) {
    const {reload} = props
    const [data, setData] = useState([]);
    const [editreload, setEditreload] = useState(false)
    const handleEditreload = () => {
        setEditreload(!editreload)
    }
    useEffect(() => {
        const fecthApi = async () => {
            fetch("http://localhost:3002/products")
            .then(res => res.json())
            .then(data => {
                setData(data.reverse()) // là sản phẩm khi thêm mới sẽ được đổi lên đầu trang
            })
        }
        fecthApi()
    },[reload, editreload]);  // mỗi khi dependency thay đổi thì call lại API vẽ lại giao diện

    
    return (
        <>
           <div className="product__list">
                 {data.map(item => (
                    <div className="product__item" key={item.id}>
                        <div className="product__image">
                            <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <h4 className="product__title">{item.title}</h4>
                        <p className="product__price">{item.price}$</p>
                        <p className="product__discount">{item.discountPercentage}%</p>
                        <EditProduct item = {item} onEditReload = {handleEditreload} />
                        <DeleteProduct item = {item} onEditReload = {handleEditreload} />
                    </div>
                 ))}
           </div>
        
        </>
    )
}
export default ProductList;