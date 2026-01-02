import { get } from "../utils/request";

// API lấy data
export const getListTopic = async () => {
    const result = await get(`topics`)
    return result;
}