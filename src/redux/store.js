import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import productSlice from './ProductSlice'
import categoriSlice from './CategoriSlice'
import accountSlice from './AccountSlice'
export const store = configureStore({
    reducer: {
        cart:cartSlice,
        products:productSlice,
        categories:categoriSlice,
        users:accountSlice
    }
})