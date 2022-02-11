import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'

const Products_Item = (item)=>{
    const handleAddCart = ()=>{ 
        console.log('AddCart')
    }
    return (
        <div className="product-item" >
            <div className="circle">
                <img className="product-img" src={`http://localhost:5000/uploads/${item.item.image}`} />
                <div className="product-name">{item.item.nameproduct}</div>
                <div className="product-icon">
                    <div className="icon">
                        <ShoppingCartOutlined onClick={handleAddCart} />
                    </div>
                    <div className="icon">
                        <SearchOutlined />
                    </div>
                    <div className="icon">
                        <FavoriteBorderOutlined />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products_Item