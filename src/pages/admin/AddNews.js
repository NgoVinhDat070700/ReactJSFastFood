import axios from 'axios'
import React,{ useEffect, useState }from 'react'
import swal from 'sweetalert'
import './addProduct.scss'
const AddNews = ()=>{
    const [newsInput, setNewsInput] = useState({
        title:'',
        image:'',
        video:'',
        desc:''
        
    })
    const [pricture,setPriture] = useState([])
    const handleSubmit= (e)=>{
       e.preventDefault()
       const formData = new FormData()
       formData.append('image',pricture.image)
       formData.append('title',newsInput.title)
       formData.append('video',newsInput.video)
       formData.append('desc',newsInput.desc)
       console.log(formData)
       console.log(pricture.image)
       axios.post('http://localhost:5000/api/news/',formData).then(res=>{
           if(res.status===200)
           {
            swal('Success',res.data.message,'Success')
            setNewsInput({...newsInput,
                title:'',
                image:'',
                video:'',
                desc:''
            })
           }
           else{
               swal("Error","Error")
               
           }
       })
    }
    const handleInput = (e)=>{
        e.persist()
        setNewsInput({...newsInput,[e.target.name]:e.target.value})
    }
    const handleImage = (e)=>{
        setPriture({image:e.target.files[0]})
    }
    return (
        <div className="container-main">
            <h1>Add News</h1>
            <form onSubmit={handleSubmit} id="NEWS_FORM" encType="multipart/form-data" >
                <div className="form-data">
                    <label>Title:</label>
                    <input type="text" name="title" onChange={handleInput} value={newsInput.title} required />
                </div>
                <div className="form-data">
                    <label>Image:</label>
                    <input type="file" name="image" onChange={handleImage} required />
                </div>
                <div className="form-data">
                    <label>Video:</label>
                    <input type="text" name="video" required onChange={handleInput} value={newsInput.video} />
                </div>
                <div className="form-data">
                    <label>Description:</label>
                    <textarea rows="5" cols="40" name="desc" onChange={handleInput} value={newsInput.desc} required />
                </div>
                <button type="submit" >Create</button>

            </form>
        </div>
    )
}
export default AddNews