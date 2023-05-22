import React, { useEffect } from "react";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cards from "../components/Cards/Cards";

function Home(){
    useEffect(()=>{
    
    },[])
    return(
        <div>
           <Navbar/>
           <Cards/>
           <Footer/>
        </div>
    );
}
export default Home