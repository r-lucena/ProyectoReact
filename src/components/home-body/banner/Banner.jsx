import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerImage from '/src/assets/Banner.png';
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner" style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
      }}>
    </div>
   
  );
};

export default Banner;