import { setCookie } from "../../helper/cookie";
import { login } from "../../service/userService";
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import { checkLogin } from "../../actions/login";
import "./login.scss"
function Login () {
    const navigate = useNavigate() // dùng để điều hướng sang trang khác
    const dispatch = useDispatch()
    const handleSubmit = async  (e) => {
        e.preventDefault();
        const userName = e.target[0].value;
        const passWord =  e.target[1].value;

        const response = await login(userName,passWord);
        
        if(response.length > 0) {
            // lưu data vào cookie
            setCookie("id", response[0].id,1); // [0] user đầu tiên tìm được
            setCookie("fullName", response[0].fullName,1);
            setCookie("email", response[0].email,1);
            setCookie("token", response[0].token,1);
            //hết lưu cookie
            dispatch(checkLogin(true))
            navigate("/")
        }
        else {
            alert("Tài khoản hoặc mật khẩu không chính xác!")
        }
    }
    return (
        <>
            <form className="login"  onSubmit={handleSubmit}>
                <h2 className="login__title">Login</h2>
                <div className="login__input">
                    <input type="email" placeholder="Nhập email" />
                </div>
                 <div className="login__input">
                    <input type="password" placeholder="Nhập password" />
                </div>
                <button className="login__submit" type="submit" >
                    Login
                </button>
            </form>
        </>
    )
}
export default Login;
