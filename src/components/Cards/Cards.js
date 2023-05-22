import React, { useEffect } from "react";
import './Cards.css'
import { Link } from 'react-router-dom';

function Cards(){
 
    return(
      
        <div className="card-body">
        <div className="heading">
          <span>Our Rooms</span>
        </div>
        <div className="cards">

          <div className="card">
          <div className="content">
           
            <div className="image">
              <img src="../../../Images/delux-room.jpg" alt="" />
            </div>
            
              <p className="category">Business AC Room</p>
              <span className="bed">Small</span>
              <p className="price">&#x20B9; 2600 per night</p>

              <div className="button-book">
                <Link to='/status1'>
                <button className="book">Book Now!</button>
                </Link>
            </div>

          </div>
          </div>
          
          <div className="card">
          <div className="content">
           
            <div className="image">
              <img src="../../../Images/delux-room.jpg" alt="" />
            </div>
            
              <p className="category">Business AC Room</p>
              <span className="bed">Large Room</span>
              <p className="price">&#x20B9; 3000 per night</p>

              <div className="button-book">
                <Link to='/status2'>
                <button className="book">Book Now!</button>
                </Link>
            </div>

          </div>
          </div>
          
          <div className="card">
          <div className="content">
           
            <div className="image">
              <img src="../../../Images/delux-room.jpg" alt="" />
            </div>
            
              <p className="category">Common AC Room</p>
              <span className="bed">Single Bed</span>
              <p className="price">&#x20B9; 1500 per night</p>

              <div className="button-book">
                <Link to='/status3'>
                <button className="book">Book Now!</button>
                </Link>
            </div>

          </div>
          </div>
          
          <div className="card">
          <div className="content">
           
            <div className="image">
              <img src="../../../Images/delux-room.jpg" alt="" />
            </div>
            
              <p className="category">Common AC Room</p>
              <span className="bed">Double Bed</span>
              <p className="price">&#x20B9; 2100 per night</p>

              <div className="button-book">
                <Link to='/status4'>
                <button className="book">Book Now!</button>
                </Link>
            </div>

          </div>
          </div>
          
          <div className="card">
          <div className="content">
           
            <div className="image">
              <img src="../../../Images/delux-room.jpg" alt="" />
            </div>
            
              <p className="category">Common Non AC Room</p>
              <span className="bed">Single Bed</span>
              <p className="price">&#x20B9; 1100 per night</p>

              <div className="button-book">
                <Link to='/status5'>
                <button className="book">Book Now!</button>
                </Link>
            </div>

          </div>
          </div>
          
          <div className="card">
          <div className="content">
           
            <div className="image">
              <img src="../../../Images/delux-room.jpg" alt="" />
            </div>
            
              <p className="category">Common Non AC Room</p>
              <span className="bed">Double Bed</span>
              <p className="price">&#x20B9; 1800 per night</p>

              <div className="button-book">
                <Link to='/status6'>
                <button className="book">Book Now!</button>
                </Link>
            </div>
          </div>
          </div>

          

        </div>
      </div>
    );
}

export default Cards