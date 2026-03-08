/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAnswers } from "../../service/answersService";
import { getListQuestion } from "../../service/questionService";
import "./result.css"

function Result() {
    const params = useParams();
    const [dataResult, setDataResult] = useState([])
    const [idTopic, setTopicId] = useState(null)
    useEffect(() => {
        const fetchApi = async () => {
            const dataAnswers = await getAnswers(params.id);
            const dataQuestion = await getListQuestion(dataAnswers.topicId)
            let resultFinal = [];
            for (let i = 0; i < dataQuestion.length; i++) {
                resultFinal.push({
                    ...dataQuestion[i],
                    ...dataAnswers.answer.find(item => item.questionId === dataQuestion[i].id)
                })
            }
            setDataResult(resultFinal);
            setTopicId(dataAnswers.topicId)
            console.log(dataAnswers);
            
        }
        fetchApi();
    }, [])
    
    return (

        <>
            <h1>Kết quả</h1>

            <div className="result__list">
                {dataResult.map((item, index) => (
                    <>
                        <div className="result__item" key={item.id}>
                            <p>Câu {index + 1}: {item.question}
                                {item.correctAnswer === item.answer ? (
                                    <span className="result__tag--true"> Đúng</span>
                                ) : (
                                    <span className="result__tag--false"> Sai</span>
                                )}
                            </p>
                            {item.answers.map((itemAns, indexAns) => {
                                let className = "";
                                let checked = false;

                                if (item.answer === indexAns) { //item.answer là id câu trả lời người dùng chọn mà bằng với chỉ số index của câu trả lòi thì gán lại bằng đã checked
                                    checked = true;
                                    className = "result__item--selected"
                                }

                                if (item.correctAnswer === indexAns) {
                                    className += " result__item--result"
                                }


                                return (
                                    <div className="result__answer" key={indexAns}>
                                        <input type="radio" checked={checked} disabled />
                                        <label className={className}  >{itemAns}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                ))}
            </div>
            <button><Link to={`/quiz/${idTopic}`}>làm lại</Link></button>
        </>
    )
}
export default Result;