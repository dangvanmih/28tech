import { post } from "../utils/request";

// post danh sách bài quiz của user
export const CreateAnswer = async (options) => {
    const result = await post(`answers`,options)
    return result;
}