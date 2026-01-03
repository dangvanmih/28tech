import { useEffect, useState } from "react";
import { getListAnswersByUser } from "../../service/answersService";
function Answers () {
    const [dataAnswers, setDataAnswers] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListAnswersByUser()
            console.log(response);   
        }
        fetchApi();
    },[])
    return (
        <>
            <h2>Danh sách chủ đề</h2>
        </>
    )
}
export default Answers;