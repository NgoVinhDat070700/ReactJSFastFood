import { Link } from '@material-ui/core'
import React from 'react'
const Navbar = ()=>{
    return ( 
        <nav className="main-header navbar navbar-expand navbar-white navbar-da bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <h4><Link className="nav-link" to="">FastFood</Link></h4>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="">Logout</Link>
                </li>
            </ul>
            <form class="form-inline ml-3">
                <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" ></input>
                    <div class="input-group-append">
                    <button class="btn btn-navbar" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                    </div>
                </div>
            </form>
            
        </nav>
    )
}
export default Navbar