import axios from "axios";

export const instance = axios.create({
    baseURL:"http://localhost:5000/api",
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
})
export const API_PRODUCTS="/products"
export const API_PRODUCTS_SEARCH="/products?search="
export const API_PRODUCT_SEARCH_CAT = '/products/search_category?category_id='
export const API_CATEGORIES = "/category"
export const API_UPLOADIMAGE = "http://localhost:5000/uploads/"
export const API_ACCOUNTS = "/users"
