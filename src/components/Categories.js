import React, { useState,useEffect } from 'react'
import Categories_Item from './Categories_Item'
import '../assets/css/category.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataCategories } from '../redux/CategoriSlice'
const Categories = ()=>{
    const {categories,isLoading} = useSelector((state)=>state.categories)
    console.log(categories)
    const dispatch = useDispatch()
    useEffect(()=>{
        const getAllCategory = async ()=>{
            dispatch(fetchDataCategories())
        }
        getAllCategory()
    },[])
    return (
        <div className="category-container">
            {categories.map(item=>(
                <Categories_Item key={item._id} name={item.name} image={item.image}  />
            ))}
        </div>
    )
}
export default Categories