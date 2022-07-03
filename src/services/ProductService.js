import { API_PRODUCTS, API_PRODUCTS_SEARCH, API_PRODUCT_SEARCH_CAT, instance } from "./config"

export const getDataProduct = async ()=>{
    const response = await instance.get(`${API_PRODUCTS}`)
    return response.data
}
export const getDataBySearch = async (textInput)=>{
    const response = await instance.get(`${API_PRODUCTS_SEARCH}${textInput}`)
    return response.data
}
export const getDataBySearchCate = async(id_Cate)=>{
    const response = await instance.get(`${API_PRODUCT_SEARCH_CAT}${id_Cate}`)
    return response.data
}
export const createProduct = async(formData)=>{
    const response = await instance.post(`${API_PRODUCTS}`,formData)
    return response.data
}
export const updateProduct = async(id,formData)=>{
    const response = await instance.put(`${API_PRODUCTS}/${id}`,formData)
    return response.data
}
export const deleteProduct = async(id)=>{
    const response = await instance.delete(`${API_PRODUCTS}/${id}`)
    return response.data
}