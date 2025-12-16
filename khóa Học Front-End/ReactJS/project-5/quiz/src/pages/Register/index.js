import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helper/generateToken";
import { checkExit, register } from "../../service/userService";
function Register() {
    const navigate = useNavigate() // dùng để điều hướng sang trang khác
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userName = e.target[0].value;
        const email = e.target[1].value;
        const passWord = e.target[2].value;

        const checkExitEmail = await checkExit("email", email)
        if (checkExitEmail.length > 0) { // vì API trả về mảng nên phải so sánh response.length > 0 xem có phần tử nào trong mảng không
            alert("Email đã tồn tại!");
        }
        else {
            const options = {
                fullName: userName,
                email: email,
                passWord: passWord,
                token: generateToken(),
            };
            const response = await register(options);
            console.log(response);
            
            if (response) { 

                navigate("/login")
            }
            else {
                alert("Đăng ký không thành công!");
            }
        }
    }
    return (
        <>
            <form className="login" onSubmit={handleSubmit}>
                <h2 className="login__title">Register</h2>
                <div className="login__input">
                    <input type="fullName" placeholder="Nhập fullName" />
                </div>
                <div className="login__input">
                    <input type="email" placeholder="Nhập email" />
                </div>
                <div className="login__input">
                    <input type="password" placeholder="Nhập password" />
                </div>
                <button className="login__submit" type="submit" >
                    Register
                </button>
            </form>
        </>
    )
}
export default Register;
// 1:21;51