import { SearchOutlined } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { fetchDataProduct, fetchDataProductSearch } from '../../redux/ProductSlice'
import { API_UPLOADIMAGE } from '../../services/config'

const Product = ()=> {
    const {products,isLoading} = useSelector((state)=>state.products)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchDataProduct())
    },[])
    const [inputSearch,setInputSearch]= useState([])
    const handleSearch = ()=>{
        dispatch(fetchDataProductSearch(inputSearch))
    }
    const deleteProduct = (e,id)=>{
      e.preventDefault();
      const thisClicked = e.currentTarget;
      thisClicked.innerText = "Deleting";
      axios.delete(`http://localhost:5000/api/products/deleteProduct/${id}`).then(res=>{
        if(res.status===200){
          swal("Success",res.data.message,"Success")
          thisClicked.closest("tr").remove();
        }
        else{
          swal("Errorr",res.data.error,"Error")
          thisClicked.innerText = "Deleting";
        }
      })
    }
    var LIST_PRODUCT=""
    if(isLoading)
    {
        return <h1>Loading Product List...</h1>
    }
    else{
        LIST_PRODUCT=products.map(item=>{
            return(
                <tr key={item._id}>
                    <td>{item.nameproduct}</td>
                    <td><img src={`${API_UPLOADIMAGE}${item.image}`} width="50px" height="50px" alt="image" /></td>
                    <td>{item.price}</td>
                    <td>{item.desc}</td>
                    {/* <td>{item.status}</td> */}
                    <td>{item.category_id}</td>
                    <td>
                        <Link to={`edit-product/${item._id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>
                    <td>
                        <button type="button" onClick={e=>deleteProduct(e,item._id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            )
        })
    }
    return ( 
      <div className="table-class">
        <Link to="/admin/addproduct">Create Product</Link>
        <div className="search">
          <input type="text" name="search" value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)} />
          <SearchOutlined onClick={()=>handleSearch()} />
        </div>
        <table>
          <thead>
            <th>Name Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Desc</th>
            {/* <th>Status</th> */}
            <th>Category_id</th>
            <th>Action</th>
          </thead>
          <tbody>
            {LIST_PRODUCT}
          </tbody>
        </table>
      </div>
    )
}
export default Product