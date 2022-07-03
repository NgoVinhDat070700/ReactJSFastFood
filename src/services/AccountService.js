
import {  API_ACCOUNTS, instance } from "./config"

export const getListAccount = async ()=>{
    const response = await instance.get(`${API_ACCOUNTS}`)
    return response.data
}
export const createAccount = async(formData)=>{
    const response = await instance.post(`${API_ACCOUNTS}`,formData)
    return response.data
}
export const updateAccount = async(id,formData)=>{
    const response = await instance.put(`${API_ACCOUNTS}/${id}`,formData)
    return response.data
}
export const deleteAccount = async(id)=>{
    const response = await instance.delete(`${API_ACCOUNTS}/${id}`)
    return response.data
}
