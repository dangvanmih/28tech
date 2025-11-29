import { useNavigate } from "react-router-dom"

function GoBack () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1); // trờ lại 1 bước
    }
    return (
        <>
            <button onClick={handleClick}>Back</button>
        </>
    )
}
export default GoBack