import { Facebook,MailOutline } from '@material-ui/icons'
import axios from 'axios'
import React, { useState } from 'react'
import '../assets/css/login.css'
import {useHistory} from 'react-router-dom'
import swal from 'sweetalert'
const Login = ()=>{
    const history = useHistory();
    const [inputLogin,setInputLogin] = useState({
        username:'',
        email:'',
        password:''
    })
    const handleInput = (e)=>{
        e.persist()
        setInputLogin({...inputLogin,[e.target.name]:e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault()
        const data = {
            username:inputLogin.username,
            email:inputLogin.email,
            password:inputLogin.password
        }
        axios.post('http://localhost:5000/api/users/login',data)
            .then(res=>{
                localStorage.setItem('token',res.data.accessToken)
                localStorage.setItem('user_id',res.data._id)
                localStorage.setItem('username',res.data.username)
                console.log(res.status)
                if(res.status === 200)
                {
                    if(res.data.isAdmin === true){
                        localStorage.setItem('isAdmin',res.data.isAdmin)
                        history.push('/admin/dashboard')
                    }
                    else{
                        history.push('/')
                    }
                }
                else if(res.data.status===401)
                {
                    swal("Lỗi",res.data.message,"Lối")
                }
            })
            .catch(err=>{
                console.log(err)
            });
    }
    return(
        <div className="container-login">
            <header>Login Form</header>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input type="text" required onChange={handleInput} value={inputLogin.username} name="username" />
                    <label>Username</label>
                </div>
                <div className="input-field">
                    <input type="text" required onChange={handleInput} value={inputLogin.email} name="email" />
                    <label>Email</label>
                </div>
                <div className="input-field">
                    <input className="pswrd" type="password" onChange={handleInput} value={inputLogin.password} name="password" required />
                    <span className="show">Show</span>
                    <label>Password</label>
                </div>
                <div className="button">
                    <div className="inner"></div>
                    <button type="submit">Login</button>
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