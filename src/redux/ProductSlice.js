import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { createProduct, deleteProduct, getDataBySearch, getDataBySearchCate, getDataProduct, updateProduct } from "../services/ProductService"

export const fetchDataProduct = createAsyncThunk('fetch/GetDataProduct',async()=>{
    const data = await getDataProduct()
    return data
})
export const fetchDataProductSearch = createAsyncThunk('fetch/GetDataProductBySearch',async(textInput)=>{
    const data = await getDataBySearch(textInput)
    return data
})
export const fetchDataProductSearch_Cate = createAsyncThunk('fetch/GetDataProductBySearch_Cate',async(id_Cate)=>{
    const data = await getDataBySearchCate(id_Cate)
    return data
})
export const fetchDataCreateProduct = createAsyncThunk('fetch/GetDataCreateProduct',async(formData)=>{
    const data = await createProduct(formData)
    return data
})
export const fetchDataUpdateProduct = createAsyncThunk('fetch/GetDataUpdateProduct',async(id,formData)=>{
    const data = await updateProduct(id,formData)
    return data
})
export const fetchDataDeleteProduct = createAsyncThunk('fetch/GetDataDeleteProduct',async(id)=>{
    const data = await deleteProduct(id)
    return data
})
const initialState = {
    products:[],
    isLoading:true,
    isStatus:""
}
const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchDataProduct.fulfilled,(state,action)=>{
            state.products = action.payload
            state.isLoading = false
            state.isStatus = "fulfilled"
        })
        .addCase(fetchDataProduct.pending,(state)=>{
            state.isLoading = true
            state.isStatus = "pending"
        })
        .addCase(fetchDataProduct.rejected,(state)=>{
            state.isStatus = "rejected"
            state.isLoading = true
        })
        .addCase(fetchDataProductSearch.fulfilled,(state,action)=>{
            state.products = action.payload
            state.isLoading = false
        })
        .addCase(fetchDataProductSearch.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(fetchDataProductSearch_Cate.fulfilled,(state,action)=>{
            state.products = action.payload
            state.isLoading = false
        })
        .addCase(fetchDataProductSearch_Cate.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(fetchDataCreateProduct.fulfilled,(state,action)=>{
            state.products = [...state.products,action.payload]
        })
        .addCase(fetchDataUpdateProduct.fulfilled,(state,action)=>{
            const idx = action.payload.id
            const data = state.products.filter((item)=>item.id !== idx)
            state.products = [...data,action.payload]
        })
        .addCase(fetchDataDeleteProduct.fulfilled,(state,action)=>{
            const idx = action.payload.id
            const data = state.products.filter((item)=>item.id !== idx)
            state.products = [...data]
        })

    }
})
export default productSlice.reducer