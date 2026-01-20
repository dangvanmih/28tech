import { get, post } from "../utils/request";

// API lấy data
export const bookRoom = async (option) => {
    const result = await post("book-room", option)
    return result;
}
