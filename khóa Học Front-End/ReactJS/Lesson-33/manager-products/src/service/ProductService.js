import { del, get, patch, post } from "../utils/request";

// code này là code tối ưu để hiểu chứ chưa áp dụng vào bài 33 này
export const getProductList = async () => {
    const result = await get("products")
    return result;
}

export const createProduct = async (options) => {
    const result = await post("products", options)
    return result;
}

export const deleteProduct = async (id) => {
    const result = await del(`products/${id}`)
    return result;
}

export const editProduct = async (id, options) => {
    const result = await patch(`products/${id}`,options)
    return result;
}