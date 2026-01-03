import { getCookie } from "../helper/cookie";
import { get } from "../utils/request";

// API lấy ra danh sách câu trả lời của người dùng
export const getListAnswersByUser = async () => {
    // const userId = getCookie("id");  
    const result = await get(`answers`)
    return result;
}