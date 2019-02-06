import React from 'react'
import '../App.css';
import logo from '../Images/Logos/bustoshow-text-logo--white-outline-no-fill-328x46.png'

const Header = (props) => {


  return (
    <nav className='Header row bts-orange-bg py-1'>
      <div className="col-2">
        <a className="navbar-brand pl-2">
          <img src={logo} width="180" height="24" className="d-inline-block align-middle pl-4" alt="bts-logo" />
        </a>
      </div>
      <div>
      </div>

      {/* <button onClick={props.loginClick} className="btn btn-outline-primary my-2 my-sm-0">Login</button>
      <button onClick={props.signUpClick} className="btn btn-outline-secondary my-2 my-sm-0 ml-1">Sign Up</button> */}
    </nav>

  )
}

export default Header;
