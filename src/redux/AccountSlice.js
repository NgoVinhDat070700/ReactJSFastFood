import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createAccount, deleteAccount, getListAccount, updateAccount } from "../services/AccountService"

export const fetchDataAccount = createAsyncThunk('fetch/GetDataAccount',async()=>{
    const data = await getListAccount()
    return data
})
export const fetchDataCreateAccount = createAsyncThunk('fetch/GetDataCreateAccount',async(formData)=>{
    const data = await createAccount(formData)
    return data
})
export const fetchDataUpdateAccount = createAsyncThunk('fetch/GetDataUpdateAccount',async(id,formData)=>{
    const data = await updateAccount(id,formData)
    return data
})
export const fetchDataDeleteAccount = createAsyncThunk('fetch/GetDataDeleteAccount',async(id)=>{
    const data = await deleteAccount(id)
    return data
})
const initialState = {
    users:[],
    isLoading:true,
    isStatus:""
}
const accountSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchDataAccount.fulfilled,(state,action)=>{
            state.users = action.payload
            state.isLoading = false
            state.isStatus = "fulfilled"
        })
        .addCase(fetchDataAccount.pending,(state)=>{
            state.isLoading = true
            state.isStatus = "pending"
        })
        .addCase(fetchDataAccount.rejected,(state)=>{
            state.isStatus = "rejected"
            state.isLoading = true
        })
        .addCase(fetchDataCreateAccount.fulfilled,(state,action)=>{
            state.users = [...state.users,action.payload]
        })
        .addCase(fetchDataUpdateAccount.fulfilled,(state,action)=>{
            const idx = action.payload.id
            const data = state.users.filter((item)=>item.id !== idx)
            state.users = [...data,action.payload]
        })
        .addCase(fetchDataDeleteAccount.fulfilled,(state,action)=>{
            const idx = action.payload.id
            const data = state.users.filter((item)=>item.id !== idx)
            state.users = [...data]
        })

    }
})
export default accountSlice.reducer