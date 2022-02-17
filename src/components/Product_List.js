import React,{useState,useEffect} from 'react'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import '../assets/css/product.css'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import {useHistory,Link} from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
const Product_List = ({cat_id,filters})=>{
    const [products,setProducts]=useState([])
        
        const history = useHistory()
        const dispatch = useDispatch()
        const handleAddCart = (data)=>{ 
            dispatch(addToCart(data))
            history.push('/cart')
            console.log("data",data)
            
        }
        // const isLoading = useSelector(state => state.cart.isLoading)
        useEffect(() => {
            const getProducts = async ()=>{
                try {
                    const res = await axios.get(cat_id?
                        `http://localhost:5000/api/products/search_category?category_id=${cat_id}`
                        : "http://localhost:5000/api/products")
                        setProducts(res.data)
                }
                catch (err) {

                }
            }
            getProducts()
        }, [cat_id])     
    return (
        <div className="product-container">
            {products.map((item)=>
            {
                item.qty = 1
                return (
                    <div className="product-item" key={item._id} >
                        <div className="circle">
                        <img className="product-img" src={`http://localhost:5000/uploads/${item.image}`} />
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