import React, { useState,useEffect } from 'react'
import Categories_Item from './Categories_Item'
import '../assets/css/category.css'
import axios from 'axios'
const Categories = ()=>{
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        const getAllCategory = async ()=>{
            try{
                const items = await axios.get('http://localhost:5000/api/category')
                setCategories(items.data)
            }
            catch (err){
                console.log(err)
            }
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