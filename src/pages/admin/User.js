import { SearchOutlined } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
function User(){
  const [users,setUser] = useState([])
  const [isLoading,setLoading] = useState(true)
  useEffect(()=>{
    axios.get('http://localhost:5000/api/users').then(res=>{
      if(res.status===200){
        setUser(res.data)
        setLoading(false)
      }
    })
  },[])
    const [inputSearch,setInputSearch]= useState([])
    const handleSearch = ()=>{
       
    }
    const deleteUser = (e,id)=>{
      e.preventDefault();
      const thisClicked = e.currentTarget;
      thisClicked.innerText = "Deleting";
      axios.delete(`http://localhost:5000/api/users/${id}`).then(res=>{
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
    var LIST_ACCOUNT=""
    if(isLoading)
    {
        return <h1>Loading List Account...</h1>
    }
    else{
        LIST_ACCOUNT=users.map(item=>{
            return(
                <tr key={item._id}>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.isAdmin === true ?"admin":"user"}</td>
                    <td>
                        <Link to={`edit-user/${item._id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>
                    <td>
                        <button type="button" onClick={e=>deleteUser(e,item._id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            )
        })
    }
    return ( 
      <div className="table-class">
        <h1>List Account User</h1>
        <div className="search">
          <input type="text" name="search" value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)} />
          <SearchOutlined onClick={()=>handleSearch()} />
        </div>
        <table>
          <thead>
            <th>User Name</th>
            <th>Email</th>
            <th>isAdmin</th>
            <th>Action</th>
          </thead>
          <tbody>
            {LIST_ACCOUNT}
          </tbody>
        </table>
      </div>
    )
}
export default User