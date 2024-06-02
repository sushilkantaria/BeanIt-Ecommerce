import React,{useState} from "react";
import './signup.css'
import { Link } from "react-router-dom";



const Signup=() =>{
    const [formData,setFormData]=useState({
        username:"",
        password:"",
        email:""
    })
    
    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    
    
    const signup=async()=>{
        if (!formData.username || !formData.email || !formData.password) {
            alert('Please enter all required fields.');
            return;
        }
        console.log("Signup Function Executed",  formData);
        let responseData;
        await fetch('http://localhost:4000/signup', {
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)
         
        if(responseData.success){
            // localStorage.setItem('auth-token',responseData.token);
            alert('Registered Successfully! Please log in.');
            window.location.replace("/");
        }else{
            alert(responseData.errors)
        }
    }
    
    return(
        <div className="signup">
            <div className="signup-container">
                <h1>Sign Up</h1>
                <div className="signup-fields">
                    <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='User Name'/>
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address'/>
                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>
                </div>
                <button onClick={()=>signup()}>Continue</button>
                <p className="signup-signup">Already Have an account? <Link to="/login"><span>Login here</span></Link></p>
                <div className="signup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default Signup;


