import { post } from "../utils/request";

// API post data vào database
export const bookRoom = async (option) => {
    const result = await post("book-room", option)
    return result;
}
