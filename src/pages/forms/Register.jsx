import { useState } from "react"
import "../forms/forms.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () =>{
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    //form submit handler
    const formSubmitHandler=(event)=>{
        event.preventDefault()
        if(email.trim()===""){
            return toast.error("Email Is Required")
        }
        if(username.trim()===""){
            return toast.error("Username Is Required")
        }
        if(password.trim()===""){
            return toast.error("Password Is Required")
        }
        if(password !== confirmPassword){
            return toast.error("Passwords don't match")
        }
        console.log({email,password,username})
    }
    return (
        <div className="form-wrapper">
        <ToastContainer theme="colored"/>
            <form onSubmit={formSubmitHandler} className="form">
                <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Email"/>
                <input onChange={(e)=> setUsername(e.target.value)} value={email} type="text" placeholder="Username"/>
                <input onChange={(e)=> setPassword(e.target.value)}  value={password} type="password" placeholder="Password"/>
                <input onChange={(e)=> setConfirmPassword(e.target.value)}  value={confirmPassword} type="password" placeholder="confirmPassword"/>
                <button className="form-btn">Register</button>
            </form>
        </div>
    );
}
export default Register;