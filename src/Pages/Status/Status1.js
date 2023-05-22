import postrequest from "../../Backend/postrequest";
import './Status.css';
import React, { useState } from "react";
import NumericInput from 'react-numeric-input';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import GetRequestwithData from '../../Backend/getrequestwithdata';

const t1="Business Class";
const t2="Small";
const t3="Room Cost : 2600 per night";


function Status1() {

  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  
 async function  handleClick ()
 {
    const userid=localStorage.getItem('userid')
    const values={
        userid:userid,
        category:t1,
        bed:t2,
        type:"AC",
        checkin:startDate,
        checkout:startDate1,
        no:1
        
    }
    console.log(values)
    const{retdata:retdata}=await postrequest(`${window.name}bookroom`,values);
   console.log(retdata.status)
   if(retdata.status==="Success")
{
    alert("Booking Confirmed!")
}
else{
    ////
}
  
 }
  
  
  return (
    <>
    <div className="Status">
        <Navbar/>
        <p>{t1}</p>  
        <p className="t1">{t2}</p> 
         <p>{t3}</p>
         <p className="s1">Check-in Date:</p>

<DatePicker className="c" selected={startDate} onChange={(date:Date) => setStartDate(date)} />

 
         <p className="s2">Check-out Date:</p>

         <DatePicker className="c1" selected={startDate1} onChange={(date:Date) => setStartDate1(date)} />
         <p className="s3">Room Want:</p>
         <NumericInput className="pc"></NumericInput>
<p> </p>
         <button onClick={handleClick} className='b'>confirm booking</button>
      </div>
      <Footer/>
      </>
  );
  
  }


export default Status1;





