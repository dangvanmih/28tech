/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopic } from "../../service/topicService";
import { getListQuestion } from "../../service/questionService";

function Quiz () {
    const params = useParams();
    const [dataTopic, setDataTopc] = useState();
    const [dataQuestion, setDataQuestion] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getTopic(params.id)
            setDataTopc(response)
        }
        fetchApi();
    },[])
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListQuestion(params.id)
            setDataQuestion(response)   
        }
        fetchApi();
    },[])
    return (
        <>
            <h2>Bài Quiz chủ đề: {dataTopic && (<>{dataTopic.name}</>)}</h2>
            <ul></ul>
        </>
    )
}
export default Quiz;