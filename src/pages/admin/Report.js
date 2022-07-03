import { SearchOutlined } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

const Report = ()=> {
    const [reports,setReports] = useState([])
    const [isLoading,setLoading] = useState(true)
    useEffect(()=>{
      axios.get('http://localhost:5000/api/order').then(res=>{
        if(res.status===200){
          setReports(res.data)
          setLoading(false)
        }
      })
    },[])
    const deleteReport = (e,id)=>{
      e.preventDefault();
      const thisClicked = e.currentTarget;
      thisClicked.innerText = "Deleting";
      axios.delete(`http://localhost:5000/api/order/${id}`).then(res=>{
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
    var LIST_Report=""
    if(isLoading)
    {
        return <h1>Loading Product List...</h1>
    }
    else{
        LIST_Report=reports.map(item=>{
            return(
                <tr key={item._id}>
                    <td>{item.userId}</td>
                    {item.products.map((product)=>{console.log(product.qty,product.product_Id)})}
                    <td>{item.amount}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>{item.status}</td>
                    <td>
                        <Link to={`edit-product/${item._id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>
                    <td>
                        <button type="button" onClick={e=>deleteReport(e,item._id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            )
        })
    }
    return ( 
      <div className="table-class">
        <table>
          <thead>
            <th>UserID</th>
            {/* <th>Products</th> */}
            <th>Amount</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </thead>
          <tbody>
            {LIST_Report}
          </tbody>
        </table>
      </div>
    )
}
export default Report