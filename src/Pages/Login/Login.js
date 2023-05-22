import { async } from "q";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import postrequest from "../../Backend/postrequest";
import './Login.css';

export default function Login() {
  const [values,setValues]=useState({
    email:"",
    pass:"",
})
const [submitted,setSubmitted]=useState(false)

const inputEmail=(event)=>{
  setValues({...values,email:(event.target.value)})
}
const inputPassword=(event)=>{
    setValues({...values,pass:(event.target.value)})
  }
const handleSubmit=async(event)=>{
  event.preventDefault()
  setSubmitted(true)
  console.log(values)
  const{retdata:retdata}=await postrequest(`${window.name}login`,values)
  console.log(retdata.status)
   if(retdata.status==="Success")
   {
    
    localStorage.setItem("userid",retdata.user.id)
    localStorage.setItem("name",retdata.user.name)
    localStorage.setItem("phone",retdata.user.phone)
    localStorage.setItem("email",retdata.user.email)
    window.location.replace('/home')
   }
   else{
    //ninghla endaan vecha kaatiko
   }
}


  return (
    <div className="body">
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        
        {submitted &&  values.email && values.password ? <div className="success-message">Welcome Back!!</div>:null}
        <h2 className="head" >Log In</h2>
        <input
          id="email"
          value={values.email}
          onChange={inputEmail}
          class="form-field"
          type="email"
          placeholder="Email"
          name="email"
        />
          {submitted && !values.email? <span>Please enter email</span>: null}
          
          <input
          id="password"
          value={values.password}
          onChange={inputPassword}
          class="form-field"
          type="password"
          placeholder="Password"
          name="password"
        />
          {submitted && !values.pass? <span>Please enter password</span>: null}
        

         
          <button class="form-field" type="submit" >
          Log In
          </button>
          

          <Link to="/signup" className="form-field">
          Don't have an account?
          </Link>
          
      </form>
    </div>
    </div>
  );
}
