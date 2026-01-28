import { Navigate, Outlet } from "react-router-dom"
import { getCookie } from "../../helper/cookie"

function PrivateRoutes() {
    // const isLogin = true;
    const checklogin = getCookie("token")
    return (
        <>
            {checklogin ? (<Outlet/>) :(<Navigate to="/login"/>) }
            

        </>
    )
}
export default PrivateRoutes