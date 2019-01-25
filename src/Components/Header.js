import React from 'react'
import '../App.css';
import logo from '../Images/Logos/bts-logo-orange.png'

const Header = (props) => {
  

  return (
    <div className='Header'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
         <img src={logo} width="70" height="30" className="d-inline-block align-top" alt="bts-logo"/>
        </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Events <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
        </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input onKeyUp={props.searchEvents} className="form-control mr-sm-2" type="search" placeholder="Search Events..." aria-label="Search" />
            </form>
            <button onClick={props.loginClick} className="btn btn-outline-primary my-2 my-sm-0" type="submit">Login</button>
          </div>
      </nav>
    </div>

      )
    }
    
    export default Header;
