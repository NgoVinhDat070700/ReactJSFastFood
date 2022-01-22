import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/product.css'
import Product_List from '../components/Product_List'
const Products = ()=>{
    return(
        <>
            <div className="banner-product">
                <div className="banner-content">
                    <img className="img-banner" src="https://qph.fs.quoracdn.net/main-qimg-1a51579507323697e23ce91d51ec4e6e" alt=""  />
                    <div className="content">
                        <h3 className="title-content">Sản phẩm tại FastFood</h3>
                        <p className="p-content">Fastfood nơi bạn có thể thoải mái lựa chọn các đồ ăn nhanh vừa ngon vừa rẻ chất lượng đảm bảo 100% </p>
                        <Link className="btn-menu">Ourmenu</Link>
                    </div>
                </div>
            </div>
            <h1 className="h1-menu">Menu Order</h1>
            <div className="filter-product">
                <div className="filter">
                    <span>Filter Products:</span>
                    <select>
                        <option disabled selected>Category</option>
                        <option>hamberger</option>
                        <option>Trà sữa</option>
                        <option>Combo gà KFC</option>
                    </select>
                    <span>Sort Product:</span>
                    <select>
                        <option selected>Mời chọn</option>
                        <option>DESC</option>
                        <option>ASC</option>
                    </select>
                    
                </div>
            </div>
            <Product_List />
           
        </>
    )
}
export default Products