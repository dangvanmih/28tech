import { login } from "../../service/userService";
import {useNavigate} from "react-router-dom"
function Login () {
    const navigate = useNavigate() // dùng để điều hướng sang trang khác

    const handleSubmit = async  (e) => {
        e.preventDefault();
        const userName = e.target[0].value;
        const passWord =  e.target[1].value;

        const response = await login(userName,passWord);
        if(response.length > 0) {
            alert("Đăng nhập thành công!")
            navigate("/")
        }
        else {
            alert("Tài khoản hoặc mật khẩu không chính xác!")
        }
        

        // console.log(userName);
        // console.log(passWord);
        
    }
    return (
        <>
            <form  onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <input type="email" placeholder="Nhập email" />
                </div>
                 <div>
                    <input type="password" placeholder="Nhập password" />
                </div>
                <button type="submit" >
                    Login
                </button>
            </form>
        </>
    )
}
export default Login;
// 50:51