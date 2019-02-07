import React from 'react'
import '../App.css';
import logo from '../Images/Logos/bustoshow-text-logo--white-outline-no-fill-328x46.png'
import mobileLogo from '../Images/Logos/bts-logo-orange.png'
import FacebookButton from './facebook';
import MediaQuery from 'react-responsive';

const Header = (props) => {


  return (
    <nav className='Header row bts-orange-bg nav-flex'>
      <div className="col-2 ml-3 mt-1 mr-4">
      <MediaQuery minWidth="500px">
        <a className="navbar-brand ">
          <img src={logo} width="180" height="24" className="" alt="bts-logo" />
        </a>
      </MediaQuery>
      <MediaQuery maxWidth="500px">
        <a className="navbar-brand ">
          <img src={mobileLogo} width="180" height="24" className="" alt="bts-logo" />
        </a>
      </MediaQuery>
      </div>




      <div className="mr-5 row inline-block" style={{textAlign: 'center'}}>
        {props.loggedIn?
          <button type="button" className="btn btn-outline-light sort-btn" onClick={props.userDashboard}>
            <strong>{props.myReservationsView ? "Upcoming Shows" : "My Reservations"}</strong>
          </button>:""}
        <FacebookButton userDashboard={props.userDashboard} toggleLoggedIn={props.toggleLoggedIn} loggedIn={props.loggedIn}/>
      </div>



          {/* <button onClick={props.userDashboard} className="btn btn-outline-primary my-2 my-sm-0">Login</button>
            <button onClick={props.signUpClick} className="btn btn-outline-secondary my-2 my-sm-0 ml-1">Sign Up</button> */}
    </nav>

  )
}

export default Header;
