import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/product.css'
import Product_List from '../components/Product_List'
const Products = ()=>{
    const [categoryList,setCategoryList] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/api/category').then(res=>{
            setCategoryList(res.data)
        })
    },[])
    const [filters, setFilters] = useState({});
    const handleCategory = (e) => {
        const value = e.target.value;
        setFilters({
          ...filters,
          [e.target.name]: value,
        });
      };
      console.log(filters)
    return(
        <>
            <div className="banner-product">
                <div className="banner-content">
                    <img className="img-banner" src="http://amoon.com.vn/wp-content/uploads/2020/04/8-sai-lam-luyen-tap-9-1400x787.jpg" alt=""  />
                    <div className="content">
                        <h3 className="title-content">Sản phẩm tại KingFood</h3>
                        <p className="p-content">KingFood nơi bạn có thể thoải mái lựa chọn các đồ ăn nhanh vừa ngon vừa rẻ chất lượng đảm bảo 100% </p>
                        <Link className="btn-menu">Ourmenu</Link>
                    </div>
                </div>
            </div>
            <h1 className="h1-menu">Menu Order</h1>
            <div className="filter-product">
                <div className="filter">
                    <span>Filter Products:</span>
                    <select onChange={handleCategory} name="cat_id">
                        <option disabled selected>Category</option>
                        {categoryList.map(item=>
                                <option value={item._id} key={item._id}>{item.namecategory}</option>
                        )}
                    </select>
                    
                </div>
            </div>
            <Product_List cat_id={filters.cat_id} />
           
        </>
    )
}
export default Products