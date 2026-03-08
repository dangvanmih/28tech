import { get } from "../utils/request";

// API lấy danh sách chủ đề
export const getListTopic = async () => {
    const result = await get(`topics`)
    return result;
}

// API lấy danh sách chủ đề
export const getTopic = async (id) => {
    const result = await get(`topics/${id}`)
    return result;
}
