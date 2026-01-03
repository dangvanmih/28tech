import { get, post } from "../utils/request";

// API lấy data
export const login = async (email, password) => {
    const result = await get(`users?email=${email}&passWord=${password}`)
    return result;
}

//check data đã tồn tại hay chưa
export const register = async (options) => {
    const result = await post(`users`,options)
    return result;
}

// API lấy data
export const checkExit = async (key, value) => {
    const result = await get(`users?${key}=${value}`);
    return result;
}