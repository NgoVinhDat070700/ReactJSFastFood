import React,{useState,useEffect} from 'react'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import '../assets/css/product.css'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import {useHistory,Link} from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
import { API_UPLOADIMAGE } from '../services/config'
import {fetchDataProductSearch_Cate,fetchDataProduct} from "../redux/ProductSlice"
const Product_List = ({cat_id,filters})=>{
    const {products} = useSelector((state)=>state.products)
        const history = useHistory()
        const dispatch = useDispatch()
        const handleAddCart = (data)=>{ 
            dispatch(addToCart(data))
            history.push('/cart')
            console.log("data",data)
            
        }
        useEffect(() => {
            const getProducts = async ()=>{
                    cat_id?dispatch(fetchDataProductSearch_Cate(cat_id)):dispatch(fetchDataProduct())
            }
            getProducts()
        }, [cat_id])     
    return (
        <div className="product-container">
            {products.map((item)=>
            {
                
                return (
                    <div className="product-item" key={item._id} >
                        <div className="circle">
                        <img className="product-img" src={`${API_UPLOADIMAGE}${item.image}`} />
                        <div className="product-name">{item.nameproduct}</div>
                            <div className="product-icon">
                                <div className="icon">
                                    <ShoppingCartOutlined onClick={()=>handleAddCart({id:item._id,nameproduct:item.nameproduct,price:item.price,image:item.image,qty:item.qty})} />
                                </div>
                                <div className="icon">
                                    <Link to={`/Products/${item._id}`} >
                                    <SearchOutlined />
                                    </Link>
                                </div>
                                <div className="icon">
                                    <FavoriteBorderOutlined />
                                </div>
                            </div>
                        </div>
                    </div>
                )

            }
            )}
        </div>
    )
}
export default Product_List