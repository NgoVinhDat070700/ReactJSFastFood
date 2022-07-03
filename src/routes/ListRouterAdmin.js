import React from 'react'
import AddNews from '../pages/admin/AddNews'
import AddProduct from '../pages/admin/AddProduct'
import EditNews from '../pages/admin/EditNews'
import EditProduct from '../pages/admin/EditProduct'
import EditUser from '../pages/admin/EditUser'
import Home from '../pages/admin/Home'
import News from '../pages/admin/News'
import Product from '../pages/admin/Product'
import Report from '../pages/admin/Report'
import User from '../pages/admin/User'
const ListRouterAdmin=[
    {
        path:'/admin',exact:true,name:'Home',component:Home
    },
    {
        path:'/admin/dashboard',exact:true,name:'Home',component:Home
    },
    {
        path:'/admin/products',name:'Product',component:Product
    },
    {
        path:'/admin/addproduct',exact:true,name:'AddProduct',component:AddProduct
    },
    {
        path:'/admin/edit-product/:_id',exact:true,name:'EditProduct',component:EditProduct
    },
    {
        path:'/admin/list_account_user',exact:true,name:'User',component:User
    },
    {
        path:'/admin/add_user',exact:true,name:'User',component:User
    },
    {
        path:'/admin/edit-user/:_id',exact:true,name:'EditUser',component:EditUser
    },
    {
        path:'/admin/news',exact:true,name:'News',component:News
    },
    {
        path:'/admin/add_news',exact:true,name:'AddNews',component:AddNews
    },
    {
        path:'/admin/edit-news/:_id',exact:true,name:'EditNews',component:EditNews
    },
    {
        path:'/admin/order',exact:true,name:'Report',component:Report
    },
]
export default ListRouterAdmin