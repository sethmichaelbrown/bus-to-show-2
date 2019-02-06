import React from 'react'
import '../App.css';
import logo from '../Images/Logos/bustoshow-text-logo--white-outline-no-fill-328x46.png'
import facebook from './facebook'
import FacebookButton from './facebook';
import MediaQuery from 'react-responsive';

const Header = (props) => {


  return (
    <nav className='Header row bts-orange-bg nav-flex'>
      <div className="col-2 ml-3 mt-1">
        <a className="navbar-brand ">
          <img src={logo} width="180" height="24" className="" alt="bts-logo" />
        </a>
      </div>
    
      {/* <MediaQuery minWidth="500px">
        <div className="col-lg-7 col-md-6 col-sm-4">
        </div>
      </MediaQuery> */}
      
      <div className="mr-5" style={{textAlign: 'center'}}>
        <FacebookButton/>
      </div>
      

      
          {/* <button onClick={props.loginClick} className="btn btn-outline-primary my-2 my-sm-0">Login</button>
            <button onClick={props.signUpClick} className="btn btn-outline-secondary my-2 my-sm-0 ml-1">Sign Up</button> */}
    </nav>

  )
}

export default Header;
