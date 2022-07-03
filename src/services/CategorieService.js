import { API_CATEGORIES, instance } from "./config"

export const getDataCategories = async ()=>{
    const response = await instance.get(`${API_CATEGORIES}`)
    return response.data
}