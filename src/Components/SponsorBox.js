import React from 'react'
import '../App.css';
import logo from '../Images/Logos/bts-logo-orange.png'

const SponsorBox = (props) => {


  return (
    <div className='SponsorBox container mt-2'>
        <div className="col-md-6 float-left">
          <img className='justify-content-center' src={logo} alt="bts-logo" width="303" height="130"/>
        </div>
    </div>

      )
    }
    
    export default SponsorBox;
