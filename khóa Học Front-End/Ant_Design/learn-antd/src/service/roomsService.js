import { get, post } from "../utils/request";

// API post data vào database
export const createRoom = async (option) => {
    const result = await post("rooms", option)
    return result;
}

export const getListRoom = async () => {
    const result = await get("rooms")
    return result;
}