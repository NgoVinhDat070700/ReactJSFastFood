import { SearchOutlined } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

const News = ()=> {
    const [news,setNews] = useState([])
    const [isLoading,setLoading] = useState(true)
    useEffect(()=>{
      axios.get('http://localhost:5000/api/news').then(res=>{
        if(res.status===200){
          setNews(res.data)
          setLoading(false)
        }
      })
    },[])
    const [inputSearch,setInputSearch]= useState([])
    const handleSearch = ()=>{
        axios.get('http://localhost:5000/api/news/search?title='+inputSearch).then(res=>{
          setNews(res.data)
        })
    }
    const deleteNews = (e,id)=>{
      e.preventDefault();
      const thisClicked = e.currentTarget;
      thisClicked.innerText = "Deleting";
      axios.delete(`http://localhost:5000/api/news/deleteNews/${id}`).then(res=>{
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
    var LIST_NEWS=""
    if(isLoading)
    {
        return <h1>Loading News List...</h1>
    }
    else{
        LIST_NEWS=news.map(item=>{
            return(
                <tr key={item._id}>
                    <td>{item.title}</td>
                    <td><img src={`http://localhost:5000/uploads/${item.image}`} width="50px" height="50px" alt="image" /></td>
                    <td><iframe width="200" height="100" src={`https://www.youtube.com/embed/${item.video}`}></iframe></td>
                    <td>{item.desc}</td>
                    <td>
                        <Link to={`edit-news/${item._id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>
                    <td>
                        <button type="button" onClick={e=>deleteNews(e,item._id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            )
        })
    }
    return ( 
      <div className="table-class">
        <Link to="/admin/add_news">Create News</Link>
        <div className="search">
          <input type="text" name="search" value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)} />
          <SearchOutlined onClick={()=>handleSearch()} />
        </div>
        <table>
          <thead>
            <th>Title</th>
            <th>Image</th>
            <th>Video</th>
            <th>Desc</th>
            <th>Action</th>
          </thead>
          <tbody>
            {LIST_NEWS}
          </tbody>
        </table>
      </div>
    )
}
export default News