import { SearchOutlined } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { fetchDataAccount, fetchDataDeleteAccount } from '../../redux/AccountSlice'
function User(){
    const {users,isLoading} = useSelector((state)=>state.users)
    const dispatch = useDispatch()
    useEffect(()=>{
      const getListAccount = async()=>{
        return await dispatch(fetchDataAccount())
      }
      getListAccount()
    },[dispatch])
    const [inputSearch,setInputSearch]= useState([])
    const handleSearch = ()=>{
       
    }
    const deleteUser = (e,id)=>{
      e.preventDefault();
      const thisClicked = e.currentTarget;
      thisClicked.innerText = "Deleting";
      dispatch(fetchDataDeleteAccount(id))
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