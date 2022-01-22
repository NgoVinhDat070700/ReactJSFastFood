import { Facebook,MailOutline } from '@material-ui/icons'
import React from 'react'
import '../assets/css/login.css'
const Register = ()=>{
    return (
        <div className="container-login">
            <header>Register Form</header>
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
                <div className="input-field">
                    <input className="pswrd" type="password" required />
                    <span className="show">Show</span>
                    <label>Confirm Password</label>
                </div>
                <div className="button">
                    <div className="inner"></div>
                    <button>Register</button>
                </div>
            </form>
            <div className="auth">
                Or register with
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
                <a href="">Login now</a>
            </div>
        </div>
    )
}
export default Register