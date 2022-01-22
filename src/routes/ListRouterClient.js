import React from 'react'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Cart from '../pages/Cart'
const ListRouterClient=[
    {
        path:'/',exact:true,name:'Home',component:Home
    },
    {
        path:'/Products',exact:true,name:'Products',component:Products
    },
    {
        path:'/Cart',exact:true,name:'Cart',component:Cart
    },
    {
        path:'/login',exact:true,name:'Login',component:Login
    },
    {
        path:'/register',exact:true,name:'Register',component:Register
    },
]
export default ListRouterClient