import { useEffect, useReducer} from "react";

const init = {
    products: [],
    loading: true
};

const reducer = (state, action) => {
    if(action.type === "SUCCESS") {
        console.log(action.type);
        
        return {
            products: action.products,
            loading: false
        }
    }
    else {
        return state;
    }
}
function ProductsReducer () {
    const[data, dispatch] = useReducer(reducer, init)
    useEffect(() => {
        const fetchApi = () => {
            fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "SUCCESS",
                    products: data.products
                });
            })
        }
        setTimeout(() => {
            fetchApi();
        },2000); 
    }, [])

        console.log(data);
        
    return (
        <>
            {data.loading ? (
                 <>Đang tải dữ liệu...</>

            ) : (
                <ul>
                    {data.products.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </>
    )
}
export default ProductsReducer; 