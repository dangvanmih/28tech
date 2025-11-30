import { get } from "../utils/request";

// API lấy data
export const getProductList = async () => {
    const result = await get("products")
    return result;
}
