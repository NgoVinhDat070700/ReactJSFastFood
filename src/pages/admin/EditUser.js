import axios from 'axios'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import {useHistory} from 'react-router-dom'

function EditUser(props){
    const [valueCheckbox,setValueCheckBox] = useState([])
    const [loading,setLoading]=useState(true)
    const history = useHistory()
    useEffect(()=>{
        const user_id = props.match.params._id
        axios.get(`http://localhost:5000/api/users/find/${user_id}`).then(res=>{ 
        console.log(res.data)
            if(res.status===200)
            { 
                setValueCheckBox(res.data)
            }
            else{
                swal('Error',res.data.message,'Error')
                history.push('/admin/list_account_user')
            }
            setLoading(false)
        })
    },[props.match.params._id,history])
    const handleSubmit=(e)=>{
        e.preventDefault()
        const user_id = props.match.params._id
        const formData = {
            isAdmin:valueCheckbox.isAdmin?'true':'false'
        }
        axios.put(`http://localhost:5000/api/users/${user_id}`,formData)
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
    const handleCheckbox = (e)=>{
        e.persist()
        setValueCheckBox({...valueCheckbox,[e.target.name]:e.target.checked})
    }
    if(loading)
    {
        return <h4>Loading Edit User....</h4>
    }
    return (
        <div className="container-main">
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit} id="PRODUCT_FORM" encType="multipart/form-data" >
                <div className="form-data">
                    <label>is Admin:</label>
                    <input type="checkbox"  name="isAdmin"  onChange={handleCheckbox} defaultChecked={valueCheckbox.isAdmin ===true ? true:false}  ></input>
                </div>
                <button type="submit" >Update</button>

            </form>
        </div>
    )
}
export default EditUser 