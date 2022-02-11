import { Facebook,MailOutline } from '@material-ui/icons'
import axios from 'axios'
import React, { useState } from 'react'
import { useLocation,useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import '../assets/css/login.css'

const Register = ()=>{
    const [registerInput,setRegister] = useState({
        username:'',
        email:'',
        password:'',
        error_list:[]
    })
    const [error,setError] = useState("")
    const history = useHistory();
    const handleInput = (e)=>{
        e.persist()
        setRegister({...registerInput,[e.target.name]:e.target.value})
    }
    const registerSubmit = async (e)=>{
        e.preventDefault();
        const data = {
            username:registerInput.username,
            email:registerInput.email,
            password:registerInput.password
        }
        axios.post('http://localhost:5000/api/users/register',data).then(res=>{
            if(res.status===200){
                history.push('/login')
            }
            else{
                alert('Đăng ký thất bại')
            }
            })
    }
    return (
        <div className="container-login">
            <header>Register Form</header>
            <form onSubmit={registerSubmit}>
                <div className="input-field">
                    <input type="text" onChange={handleInput} name="username" value={registerInput.username} required />
                    <label>UserName</label>
                </div>
                <div className="input-field">
                    <input type="email" name="email" onChange={handleInput} value={registerInput.email} required />
                    <label>Email</label>
                </div>
                <div className="input-field">
                    <input className="pswrd" type="password" name="password" value={registerInput.password} onChange={handleInput} required />
                    <span className="show">Show</span>
                    <label>Password</label>
                </div>
                <div className="button">
                    <div className="inner"></div>
                    <button type="submit">Register</button>
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