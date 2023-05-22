import { async } from "q";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import postrequest from "../../Backend/postrequest";
import './Signup.css';

export default function Signup() {
  const [values,setValues]=useState({
    name:"",
    phone:"",
    ad:"aaaaa",
    email:"",
    pass:"",
    age:20,
    pass:""
})
const [submitted,setSubmitted]=useState(false)

const inputUsername=(event)=>{
  setValues({...values,name:(event.target.value)})
}
const inputEmail=(event)=>{
  setValues({...values,email:(event.target.value)})
}
const inpuPhoneNumber=(event)=>{
  setValues({...values,phone:(event.target.value)})
}
const inputPassword=(event)=>{
    setValues({...values,pass:(event.target.value)})
  }
const handleSubmit=async(event)=>{
  event.preventDefault()
  setSubmitted(true)
  console.log(values)
  const{retdata:retdata}=await postrequest(`${window.name}signup`,values);
 console.log(retdata)
 if(retdata.status="success")
 {
    window.location.replace("/")
    
 }
 else{
    /////
 }
}
  return (
    <div className="body">
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        
        {submitted && values.username && values.email && values.password ? <div className="success-message">Success! Thank you for signing up!</div>:null}
        <h2 className="head" >Sign Up</h2>
        <input
          id="username"
          value={values.name}
          onChange={inputUsername}
          class="form-field"
          type="text"
          placeholder="Username"
          name="username"
        />
          {submitted && !values.name? <span>Please enter username</span>: null}
          
        <input
          id="phoneNumber"
          value={values.ph}
          onChange={inpuPhoneNumber}
          class="form-field"
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
        />
          {submitted && !values.phone? <span>Please enter phone number</span>: null}
          
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
        
          
          <button class="form-field" type="submit">
          Sign Up
        </button>
          
      </form>
    </div>
    </div>
  );
}
