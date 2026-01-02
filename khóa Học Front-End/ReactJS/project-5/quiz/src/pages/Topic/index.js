import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListTopic } from "../../service/topicService";

function Topic() {
    const [topic, setTopic] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListTopic();
            setTopic(response)
        }
        fetchApi();
    }, [])
    return (
        <>
            <h2>Danh sách chủ đề</h2>
            {topic.length > 0 && (
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên chủ đề</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {topic.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={"/quiz/" + item.id}>Làm bài</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            )}

        </>
    )
}
export default Topic;
// 1:37