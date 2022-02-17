import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  {Link, useHistory} from 'react-router-dom'
import swal from 'sweetalert'
import './detailproduct.scss'
function DetailProduct(props){
    const [products,setProduct] = useState([])
    const history = useHistory()
    const [loading,setLoading]=useState(true)
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
            <img className="detail-image" src={`http://localhost:5000/uploads/${products.image}`} />
            <h3 className="name-product">Tên sản phẩm:{products.nameproduct}</h3>
            <p className="detail-price">Image:{products.desc}</p>
            <p className="detail-desc">Description:{products.desc}</p>
            <p className="detail-status">Status:{products.status}</p>
            <div>
                <button>Mua</button>
                <Link to="/products" className="link-back" >Back To List</Link>
            </div>
        </div>
    )
}
export default DetailProduct