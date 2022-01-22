import { CalendarViewDayOutlined, Person } from '@material-ui/icons'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/new.css'
const News = ()=>{
    const [news,setNews] = useState([])

    useEffect(()=>{
        
        axios.get("http://localhost:5000/api/news").then((req,res)=>{
            setNews(req.data)
        })
    },[])
    return (
        <div className="container">
            <div className="grid">
                {news.map(item=>(
                    <article key={item._id}>
                        <img src={`http://localhost:5000/uploads/${item.image}`} />
                        <div className="text">
                            <h3>{item.title}</h3>
                            <p>{item.createdAt}</p>
                            <p>Tác giả</p>
                            <button>Read More</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
export default News