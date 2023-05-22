import "./Dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import postrequest from "../../Backend/postrequest";
import { useEffect, useState } from "react";

// const data = [
//   {
//     slno: "Anom",
//     email: 19,
//     category: "Male",
//     type: "Male",
//     quantity: "Male",
//     date: "Male",
//   },
//   {
//     slno: "Anom",
//     email: 19,
//     category: "Male",
//     type: "Male",
//     quantity: "Male",
//     date: "Male",
//   },
// ];

const Dashboard = () => {
  const [data,setdata] = useState([])
  const username = localStorage.getItem("name");
  const email=localStorage.getItem("email")
  const userid = localStorage.getItem("userid");
  const getdata = async () => {
    const values = { userid: userid };
    const { retdata: retdata } = await postrequest(
      `${window.name}bookinghistory`,
      values
    );
    console.log(retdata.bookings);
    setdata(retdata.bookings)
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <p className="textColour">Your current booking details</p>
      <div className="tableClass">
        <table>
          <tr>
            <th>SL No</th>
            <th>Email</th>
            <th>Category</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
          {data.length>0?data.map((val, key) => {
            let a=new Date(val.checkindate);
            let b=new Date();
            return a.getTime()>=b.getTime()?(
              <tr key={key}>
                <td>{key+1}</td>
                <td>{email}</td>
                <td>{val.category}</td>
                <td>{val.type}</td>
                <td>{1}</td>
                <td>{val.checkindate.substring(0,10)}</td>
                <td>
                  {
                    <div>
                      {/* <button className="button1" variant="contained">
                        Cancel
                      </button> */}
                      <button className="button2" variant="contained">
                        Booked
                      </button>
                    </div>
                  }
                </td>
              </tr>
            ):"";
          }):""}
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
