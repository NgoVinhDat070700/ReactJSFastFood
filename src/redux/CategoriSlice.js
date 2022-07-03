import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataCategories } from "../services/CategorieService";

export const fetchDataCategories = createAsyncThunk('fetch/DataCategories',async()=>{
    const data = await getDataCategories()
    console.log(data)
    return data
})
const initialState = {
    categories:[],
    isLoading:true,
    isStatus:""
}
const categoriSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchDataCategories.fulfilled,(state,action)=>{
            state.categories =  action.payload
            state.isLoading = false
            state.isStatus = "fulfilled"
        })
        .addCase(fetchDataCategories.pending,(state)=>{
            state.isStatus = "pending"
            state.isLoading = true
        })
        .addCase(fetchDataCategories.rejected,(state)=>{
            state.isStatus="rejected"
            state.isLoading = true
        })
    }
})
export default categoriSlice.reducer