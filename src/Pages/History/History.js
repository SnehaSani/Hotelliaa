import './History.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import postrequest from "../../Backend/postrequest";
import { async } from 'q';


const History=()=> {
    const [data,setdata] = useState([])
    const username=localStorage.getItem('name')
    const userid=localStorage.getItem('userid')
    useEffect(()=>{
        const date = new Date();
       console.log(date)

       getdata()
    },[])


    const getdata=async()=>{
        const values={userid:userid}
        const{retdata:retdata}=await postrequest(`${window.name}bookinghistory`,values);
        console.log(retdata)
        setdata(retdata.bookings)
    }
  return (
    <div className="App">
      <Navbar/>
      <p className="textColour">Your booking is placed !</p>
      <div className="tableClass">
        <table>
        <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Category</th>
        <th>Type</th>
        <th>Status</th>
        </tr>
        {data.length>0 ? data.map((val, key) => {
            let a=new Date(val.checkindate);
            let b=new Date();

        return a.getTime()<b.getTime()?(
          <tr key={key}>
          <td>{username}</td>
          <td>{val.checkindate.substring(0,10)}</td>
          <td>{val.category}</td>
          <td>{val.type}</td>
          <td>{val.roomno}</td>
          </tr>
        ):""
        }):""}
        </table>
      </div>
      <Footer/>
    </div>
  );
}

export default History;