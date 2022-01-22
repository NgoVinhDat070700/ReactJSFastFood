import { Facebook,MailOutline } from '@material-ui/icons'
import React from 'react'
import '../assets/css/login.css'
const Login = ()=>{
    return(
        <div className="container-login">
            <header>Login Form</header>
            <form>
                <div className="input-field">
                    <input type="text" required />
                    <label>Email or Username</label>
                </div>
                <div className="input-field">
                    <input className="pswrd" type="password" required />
                    <span className="show">Show</span>
                    <label>Password</label>
                </div>
                <div className="button">
                    <div className="inner"></div>
                    <button>Login</button>
                </div>
            </form>
            <div className="auth">
                Or login with
            </div>
            <div className="links">
                <div className="facebook">
                    <Facebook/>
                </div>
                <div className="google">
                    <MailOutline />
                </div>
            </div>
            <div className="signup">
                Not a member? <a href="">Signup now</a>
            </div>
        </div>
    )
}
export default Login