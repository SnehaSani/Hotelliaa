import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import './App.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import Review from "./Pages/Review/Review";
import Status1 from "./Pages/Status/Status1";
import Status2 from "./Pages/Status/Status2";
import Status3 from "./Pages/Status/Status3";
import Status4 from "./Pages/Status/Status4";
import Status5 from "./Pages/Status/Status5";
import Status6 from "./Pages/Status/Status6";
import History from "./Pages/History/History";
export default function App() {
  
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/signup"  exact element={<Signup/>}/> 
         <Route path="/home"  exact element={<Home/>}/> 
         <Route path="/dashboard"  exact element={<Dashboard/>}/> 
         <Route path="/review"  exact element={<Review/>}/> 
         <Route path="/status1"  exact element={<Status1/>}/> 
         <Route path="/status2"  exact element={<Status2/>}/> 
         <Route path="/status3"  exact element={<Status3/>}/> 
         <Route path="/status4"  exact element={<Status4/>}/> 
         <Route path="/status5"  exact element={<Status5/>}/> 
         <Route path="/status6"  exact element={<Status6/>}/> 
         <Route path="/history"  exact element={<History/>}/> 


      </Routes>
    </div>
    
    
  );
}


// <div >
    //   <Router>

    //     <ul>
    //     <li>
    //             <Link to="/">Home</Link>
    //           </li>
    //     </ul>

    //     <Routes>
    //     <Route exact path='/' element={< Login />}></Route>
    //     </Routes>
    //   </Router>
    // </div>