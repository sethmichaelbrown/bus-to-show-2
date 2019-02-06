import React from 'react'
import '../App.css';
import banner from '../Images/banners/bts-planning-is-time-travel-2018-fb-cover.jpg'

const BannerRotator = (props) => {


  return (
    <div className='banner px-2 mr-2 mb-4'>
      <img src={banner} className="img-fluid" alt="bus to show red rocks planning is time travel" />
    </div>


  )
}

export default BannerRotator;
