import { useNavigate } from "react-router-dom"
import { deleteAllCookies } from "../../helper/cookie";
import { useEffect } from "react";

function Logout () {
    const navigate = useNavigate();
    deleteAllCookies();
    useEffect(() => {
        navigate("login")
    },[navigate])
    return (
        <>
        
        </>
    )
}
export default Logout