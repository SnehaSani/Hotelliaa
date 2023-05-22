import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>Popular Locations</p>
          </div>
          <div className="list">
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>About Us</p>
          </div>
          <div className="list">
            <ul>
              <li>About Hotellia Group</li>
              <li>Contact Us</li>
              <li>HotelliaPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>Hotellia</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2023 Hotellia</p>
      </div>
    </div>
  );
}

export default Footer;
