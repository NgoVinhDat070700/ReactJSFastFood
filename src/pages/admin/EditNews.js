import axios from 'axios'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
import {useHistory} from 'react-router-dom'

function EditNews(props){
    const [loading,setLoading]=useState(true)
    const [newsInput,setNewsInput] = useState(
        {
            title:'',
            image:'',
            video:'',
            desc:'',
        }
    )
    const [pricture,setPriture] = useState([])
    const history = useHistory()
    useEffect(()=>{
        const news_id = props.match.params._id
        axios.get(`http://localhost:5000/api/news/find/${news_id}`).then(res=>{ 
            if(res.status===200)
            { 
                setNewsInput(res.data)
            }
            else{
                swal('Error',res.data.message,'Error')
                history.push('/admin/news')
            }
            setLoading(false)
        })
    },[props.match.params._id,history])
    const handleSubmit=(e)=>{
        e.preventDefault()
        const news_id = props.match.params._id
        const formData = new FormData()
        formData.append('image',pricture.image)
        formData.append('title',newsInput.nameproduct)
        formData.append('video',newsInput.video)
        formData.append('desc',newsInput.desc)
        axios.put(`http://localhost:5000/api/news/updateNews/${news_id}`,formData)
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
    const handleInput = (e)=>{
        e.persist()
        setNewsInput({...newsInput,[e.target.name]:e.target.value})
    }
    const handleImage = (e)=>{
        setPriture({image:e.target.files[0]})
    }
    if(loading)
    {
        return <h4>Loading Edit News....</h4>
    }
    return (
        <div className="container-main">
            <h1>Update News</h1>
            <form onSubmit={handleSubmit} id="PRODUCT_FORM" encType="multipart/form-data" >
                <div className="form-data">
                    <label>Title:</label>
                    <input type="text" name="title" onChange={handleInput} value={newsInput.title}  />
                </div>
                <div className="form-data">
                    <label>Image:</label>
                    <input type="file" name="image" onChange={handleImage}  />
                </div>
                <div className="form-data">
                    <label>ID Video trên Youtube:</label>
                    <input type="text" name="video" required onChange={handleInput} value={newsInput.video} />
                </div>
                <div className="form-data">
                    <label>Description:</label>
                    <textarea rows="5" cols="40" name="desc" onChange={handleInput} value={newsInput.desc}  />
                </div>
                <button type="submit" >Update</button>

            </form>
        </div>
    )
}
export default EditNews 