import React from 'react'
import '../App.css';
import logo from '../Images/Logos/bts-logo-orange.png'

const Header = (props) => {


  return (
    <div className='Header'>
      <nav className="navbar navbar-right navbar-light bg-light mr-8">
        <a className="navbar-brand">
          <img src={logo} width="70" height="30" className="d-inline-block align-top" alt="bts-logo" />
        </a>
          <div className="form-inline justify-content-between my-2 my-lg-0">
            <input onKeyUp={props.searchShows} className="form-control mr-sm-2 align-right" placeholder="Search Events..." aria-label="Search" />
          </div>
          {/* <button onClick={props.loginClick} className="btn btn-outline-primary my-2 my-sm-0">Login</button>
            <button onClick={props.signUpClick} className="btn btn-outline-secondary my-2 my-sm-0 ml-1">Sign Up</button> */}
      </nav>
    </div>

  )
}

export default Header;
