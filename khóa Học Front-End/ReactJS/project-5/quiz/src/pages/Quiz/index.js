/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopic } from "../../service/topicService";
import { getListQuestion } from "../../service/questionService";
import { getCookie } from "../../helper/cookie";
import { CreateAnswer } from "../../service/quizService";

function Quiz() {
    const params = useParams();
    const [dataTopic, setDataTopc] = useState();
    const [dataQuestion, setDataQuestion] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getTopic(params.id)
            setDataTopc(response)
        }
        fetchApi();
    }, [])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListQuestion(params.id)
            setDataQuestion(response)
        }
        fetchApi();
    }, [])

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);

        let selectedAnswer = [];
        for (let i = 0; i < e.target.elements.length; i++) {
            if (e.target.elements[i].checked) {
                const name = e.target.elements[i].name;
                const value = e.target.elements[i].value;
                
                selectedAnswer.push({
                    questionId: parseInt(name),
                    answer: parseInt(value)
                })
            }
        }
        let options = {
            userId : parseInt(getCookie("id")),
            topicId: parseInt(dataTopic.id),
            answer: selectedAnswer
        }

        const response = await CreateAnswer(options)
        if(response){
            navigate(`/result/${response.id}`)
        }
        
    }
    return (
        <>
            <h2>Bài Quiz chủ đề: {dataTopic && (<>{dataTopic.name}</>)}</h2>
            <div className="form-quiz">
                <form onSubmit={handleSubmit}>
                    {dataQuestion.map((item, index) => (
                        <div className="form-quiz__item" key={item.id}>
                            <p>Câu {index + 1}: {item.question}</p>
                            {item.answers.map((itemAns, indexAns) => (
                                <div className="form-quiz__answer" key={indexAns}>
                                    <input type="radio"
                                        name={item.id}
                                        value={indexAns}
                                        id={`quiz-${item.id}-${indexAns}`
                                        } />
                                    <label htmlFor={`quiz-${item.id}-${indexAns}`}>{itemAns}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button type="submit">Nộp bài</button>
                </form>
            </div>
        </>
    )
}
export default Quiz;