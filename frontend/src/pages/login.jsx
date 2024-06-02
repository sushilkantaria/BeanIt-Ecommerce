import React,{useState} from "react";
import './login.css'
import { Link } from "react-router-dom";



const Login=() =>{
    const [formData,setFormData]=useState({
        username:"",
        password:"",
        email:""
    })
    
    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    
    const login=async()=>{
        if (!formData.email || !formData.password) {
            alert('Please enter both email and password.');
            return;
        }
        console.log("Login Function Executed",formData)
        let responseData;
        await fetch('http://localhost:4000/login', {
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)
         
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            alert('Successfully logged in!');
            window.location.replace("/");
        }else{
            alert(responseData.errors)
        }
    }
        
    return(
        <div className="login">
            <div className="login-container">
                <h1>Log in</h1>
                <div className="login-fields">
                <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address'/> 
                <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/> 
                </div>
                <button onClick={()=>login()}>Continue</button>
                <p className="login-login">Not a Member? <Link to="/signup"><span>Sign up</span></Link></p>
                <div className="login-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default Login;


