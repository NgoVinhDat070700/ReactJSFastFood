import { ShopOutlined } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import  {Link, useHistory} from 'react-router-dom'
import swal from 'sweetalert'
import Product_List from '../components/Product_List'
import { addToCart } from '../redux/cartSlice'
import './detailproduct.scss'
function DetailProduct(props){
    const [products,setProduct] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()
    const [loading,setLoading]=useState(true)
    const handleAddCart = (data)=>{ 
        dispatch(addToCart(data))
        history.push('/cart')
        console.log("data",data)
        
    }
    useEffect(()=>{
        const product_id = props.match.params._id
        axios.get(`http://localhost:5000/api/products/find/${product_id}`).then(res=>{ 
            if(res.status===200)
            { 
                setProduct(res.data)
            }
            else{
                swal('Error',res.data.message,'Error')
                history.push('/admin/products')
            }
            setLoading(false)
        })
    },[props.match.params._id,history])
    if(loading)
    {
        return <h4>Loading View Product....</h4>
    }
    return (
        <div className="detail-product">
            <h1 className="title-detail"> Detail Product</h1>
            <div className="detail-content">
                <img className="detail-image" src={`http://localhost:5000/uploads/${products.image}`} />
                <div className="content-text">
                    <h2 className="name-product">Name Product:{products.nameproduct}</h2>
                    <p className="detail-price">Price:{products.price} VNĐ</p>
                    <p className="detail-price">Qty:{products.qty=1}</p>
                    <p className="detail-desc">Description:{products.desc}</p>
                    <p className="detail-status">Status:{products.status}</p>
                    <div className="detail-button">
                        <ShopOutlined className="button-buy" onClick={()=>handleAddCart({id:products._id,nameproduct:products.nameproduct,price:products.price,image:products.image,qty:products.qty})} />
                        <Link to="/products" className="link-back" >Back To List</Link>
                    </div>
                </div>
            </div>
            <div>
                <h2>Sản phẩm cùng loại</h2>
                <hr></hr>
                <div className="product-relation">
                    <Product_List cat_id={products.category_id} />
                </div>
            </div>
        </div>
    )
}
export default DetailProduct