import axios from 'axios'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import './addProduct.scss'
import {useHistory} from 'react-router-dom'

function EditProduct(props){
    const [loading,setLoading]=useState(true)
    const [productInput,setProductInput] = useState(
        {
            nameproduct:'',
            image:'',
            price:'',
            desc:'',
            status:'',
            category_id:'',
            
        }
    )
    const [pricture,setPriture] = useState([])
    const [categoryList,setCategoryList] = useState([])
    const history = useHistory()
    useEffect(()=>{
        axios.get('http://localhost:5000/api/category').then(res=>{
            setCategoryList(res.data)
        })
        const product_id = props.match.params._id
        axios.get(`http://localhost:5000/api/products/find/${product_id}`).then(res=>{ 
            if(res.status===200)
            { 
                setProductInput(res.data)
            }
            else{
                swal('Error',res.data.message,'Error')
                history.push('/admin/products')
            }
            setLoading(false)
        })
    },[props.match.params._id,history])
    const handleSubmit=(e)=>{
        e.preventDefault()
        const product_id = props.match.params._id
        const formData = new FormData()
        formData.set('image',pricture.image)
        formData.append('nameproduct',productInput.nameproduct)
        formData.append('price',productInput.price)
        formData.append('desc',productInput.desc)
        formData.append('status',productInput.status)
        formData.append('category_id',productInput.category_id)
        axios.put(`http://localhost:5000/api/products/updateProduct/${product_id}`,formData)
        .then(res=>{
            if(res.status===200)
            {
                swal("Success",res.data.message,"Success")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const handleInput = (e)=>{
        e.persist()
        setProductInput({...productInput,[e.target.name]:e.target.value})
    }
    const handleImage = (e)=>{
        setPriture({image:e.target.files[0]})
    }
    if(loading)
    {
        return <h4>Loading Edit Product....</h4>
    }
    return (
        <div className="container-main">
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit} id="PRODUCT_FORM" encType="multipart/form-data" >
                <div className="form-data">
                    <label>Name Product:</label>
                    <input className="input-name" type="text" name="nameproduct" onChange={handleInput} value={productInput.nameproduct}  />
                </div>
                <div className="form-data">
                    <label>Image:</label>
                    <input className="input-image" type="file" name="image" onChange={handleImage} />
                    <img src={`http://localhost:5000/uploads/${productInput.image}`} style={{width:80,height:100}} />
                </div>
                <div className="form-data">
                    <label>Price:</label>
                    <input className="input-price" type="text" name="price" required onChange={handleInput} value={productInput.price} />
                </div>
                <div className="form-data">
                    <label>Description:</label>
                    <textarea className="input-desc" rows="5" cols="40" name="desc" onChange={handleInput} value={productInput.desc}  />
                </div>
                <div className="form-data">
                    <label>Status:</label>
                    <input  type="radio" name="status" onChange={handleInput} value={productInput.status}  />Status 0=Còn/1=Hết
                </div>
                <div className="form-data">
                    <label>Categori_id:</label>
                    <select className="input-category" name="category_id" id="category_id" onChange={handleInput} value={productInput.category_id}>
                        {categoryList.map(item=>
                                <option value={item._id} key={item._id}>{item.namecategory}</option>
                            )}
                    </select>
                </div>
                <button type="submit" >Update</button>

            </form>
        </div>
    )
}
export default EditProduct 