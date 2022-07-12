import React from 'react'
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import '../assets/css/nav.css'
import { Link } from 'react-router-dom';
const Navbar = ()=>{
    return(
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <div className="logo">
                    <Link className="link" to="/" >KINGFOOD</Link>
                    </div>
                    <div className="navbar-language">
                        EN
                    </div>
                </div>
                <div className="navbar-right">
                    {/* <div className="navbar-search">
                        <input type="text" placeholder="Search" />
                        <Search type={{color:'gray',fontSite:16}} />
                    </div> */}
                    <div className="navbar-item"><Link className="link" to="/" >Home</Link></div>
                    <div className="navbar-item"><Link className="link" to="/Products" >Product</Link></div>
                    <div className="navbar-item"><Link className="link" to="/Cart" >Cart</Link></div>
                    <div className="navbar-item"><Link className="link" to="/register" >Register</Link></div>
                    <div className="navbar-item"><Link className="link" to="/login">Login</Link></div>
                    <div className="navbar-item"><ShoppingCartOutlined /></div>
                </div>
            </div>
        </div>
    )
}
export default Navbar