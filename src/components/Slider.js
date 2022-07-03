import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import '../assets/css/slider.css'
const Slider = ()=>{
    const slide_items=[
        {
            id:0,
            title:'Chào mừng bạn đến với website FastFood',
            img:'https://images.squarespace-cdn.com/content/v1/58b15f88b3db2b9cf99a60cd/1554707595712-QJGW8NKAFDS8HTKV1YUZ/image-asset.jpeg?format=1000w',
            description:'Thiên đường đồ ăn nhanh đáp ứng mọi nhu cầu về ẩm thực ',
        },
        {
            id:1,
            title:'Chào mừng bạn đến với website FastFood',
            img:'https://cdn.vietnambiz.vn/171464876016439296/2021/3/23/bgrpic-copy-19-1616478414267633905458.jpeg',
            description:'Thiên đường đồ ăn nhanh đáp ứng mọi nhu cầu về ẩm thực ',
        },
        {
            id:2,
            title:'Chào mừng bạn đến với website FastFood',
            img:'https://nld.mediacdn.vn/291774122806476800/2021/10/28/tai-xuong-16353823362312089797013.jpg',
            description:'Thiên đường đồ ăn nhanh đáp ứng mọi nhu cầu về ẩm thực ',
        },
    ]
    const [slideIndex,setSlideIndex] = useState(0)
    const nextSlide = ()=>{
        setSlideIndex(slideIndex === slide_items.length -1? 0:slideIndex +1)
    }
    const prevSlide=()=>{
        setSlideIndex(slideIndex === 0?slide_items.length -1:slideIndex -1)
    }
    console.log(slideIndex)
    return (
        <div className="slide-container">
            <div className="arrow left">
                <ArrowLeftOutlined onClick={prevSlide} />
            </div>
            <div className="slide-wrapper">
                {slide_items.map((item)=>(
                <div className={item.id === slideIndex ?'slide active':'slide'} key={item.id}>
                    {item.id ===slideIndex && (
                    <div className="slide-slide" key={item.id}>
                        <div className="slide-img">
                            <img src={item.img} />
                        </div>
                        <div className="slide-imginfo">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <button>Click</button>
                        </div>
                    </div> )}
                </div>
                ))}
            </div>
            <div className="arrow right">
                <ArrowRightOutlined onClick={nextSlide}  />
            </div>
        </div>
    )
}
export default Slider