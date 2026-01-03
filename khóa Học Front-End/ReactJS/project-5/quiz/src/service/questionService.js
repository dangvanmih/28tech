import { get } from "../utils/request";

// API lấy ra danh sách câu hỏi
export const getListQuestion = async (id) => {
    const result = await get(`questions?topicId=${id}`)
    return result;
}