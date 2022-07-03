import axios from 'axios'
import React,{ useEffect, useState }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchDataCategories} from '../../redux/CategoriSlice'
import swal from 'sweetalert'
import './addProduct.scss'
import { fetchDataCreateProduct } from '../../redux/ProductSlice'
import { getDataCategories } from '../../services/CategorieService'
const AddProduct = ()=>{
    const [productInput, setProductInput] = useState({
        nameproduct:'',
        image:'',
        price:'',
        desc:'',
        status:'',
        category_id:'',
        
    })
    const {categories} = useSelector((state)=>state.categories)
    const dispatch = useDispatch()
    useEffect( ()=>{
        const getCategories = async()=>{
            dispatch(fetchDataCategories())
        }
        getCategories()
    },[dispatch])
    const [pricture,setPriture] = useState([])
    const handleSubmit= (e)=>{
       e.preventDefault()
       const formData = new FormData()
       formData.append('image',pricture.image)
       formData.append('nameproduct',productInput.nameproduct)
       formData.append('price',productInput.price)
       formData.append('desc',productInput.desc)
       formData.append('status',productInput.status)
       formData.append('category_id',productInput.category_id)
       dispatch(fetchDataCreateProduct(formData))
    }
    const handleInput = (e)=>{
        setProductInput({...productInput,[e.target.name]:e.target.value})
    }
    const handleImage = (e)=>{
        setPriture({image:e.target.files[0]})
    }
    return (
        <div className="container-main">
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit} id="PRODUCT_FORM" encType="multipart/form-data" >
                <div className="form-data">
                    <label>Name Product:</label>
                    <input className="input-name" type="text" name="nameproduct" onChange={handleInput} value={productInput.nameproduct} required />
                </div>
                <div className="form-data">
                    <label>Image:</label>
                    <input className="input-image" type="file" name="image" onChange={handleImage} required />
                </div>
                <div className="form-data">
                    <label>Price:</label>
                    <input type="text" className="input-price" name="price" required onChange={handleInput} value={productInput.price} />
                </div>
                <div className="form-data">
                    <label>Description:</label>
                    <textarea className="input-desc" rows="5" cols="40" name="desc" onChange={handleInput} value={productInput.desc} required />
                </div>
                <div className="form-data">
                    <label>Status:</label>
                    <input type="radio" name="status" onChange={handleInput} value={productInput.status}  />Status 0=Còn/1=Hết
                </div>
                <div className="form-data">
                    <label>Categori_id:</label>
                    <select className="input-category" name="category_id" id="category_id" onChange={handleInput} value={productInput.category_id}>
                        {categories.map(item=>
                                <option value={item._id} key={item._id}>{item.namecategory}</option>
                            )}
                    </select>
                </div>
                <button type="submit" >Create</button>

            </form>
        </div>
    )
}
export default AddProduct