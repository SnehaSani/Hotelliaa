import './Review.css';
import './style.css';
import RatingStars from './cmponents/RatingStars';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Review() {
    return (
      <div>
        <Navbar/>
      <div className="Review">
        <RatingStars/>
        <Footer/>
      </div>
      </div>
    );
}


export default Review