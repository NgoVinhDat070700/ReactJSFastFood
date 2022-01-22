import React,{useState,useEffect} from 'react'
import Products_Item from './Products_Item'
import '../assets/css/product.css'
import axios from 'axios'
const Product_List = ({cat_id,filters})=>{
    const [products,setProducts]=useState([])
        const [filterProducts,setFilterProducts]=useState([])
        useEffect(() => {
            const getProducts = async ()=>{
                try {
                    const res = await axios.get(cat_id?
                        `? http://localhost:5000/api/products?category=${cat_id}`
                        : "http://localhost:5000/api/products")
                        setProducts(res.data)
                }
                catch (err) {

                }
            }
            getProducts()
        }, [cat_id])     
        useEffect(() => {
            cat_id &&
              setFilterProducts(
                products.filter((item) =>
                  Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                  )
                )
              );
          }, [products, cat_id, filters]);
    return (
        <div className="product-container">
            {/* {listproducts.map(item=>(
                <Products_Item key={item.id} image={item.image} name={item.name} />
            ))} */}
            {products.map((item)=><Products_Item item={item} key={item._id} />)}
        </div>
    )
}
export default Product_List