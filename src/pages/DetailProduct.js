import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  {useHistory} from 'react-router-dom'
import swal from 'sweetalert'
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
        <div className="detail-news">
            Detail Product
            {products.nameproduct}
        </div>
    )
}
export default DetailProduct