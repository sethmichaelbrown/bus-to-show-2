import React from 'react'
import '../App.css';

const Footer = (props) => {


  return (
    <div className='Footer'>
      <nav className='navbar navbar-light bg-light'>
        <div className='footer-col-1 footer-col col-md-2'>
          <p>About</p>
          <ul>
            <li>Mission/ Vison</li>
            <li>Philosophy</li>
            <li>History</li>
            <li>Board</li>
            <li>Staff</li>
            <li>Press</li>
            <li>Photos</li>
          </ul>
        </div>
        <div className='footer-col-2 footer-col col-md-2'>
          <p>Services</p>
          <ul>
            <li>Bus reservation</li>
            <li>Private Buses</li>
            <li>Event Planning</li>
            <li>Promotions</li>
            <li>Greening</li>
          </ul>
        </div>
        <div className='footer-col-3 footer-col col-md-2'>
          <p>Contribute</p>
          <ul>
            <li>Membership</li>
            <li>Sponsorship</li>
            <li>Partnership</li>
            <li>Volunteer</li>
            <li>On-Board Artists</li>
            <li>Add an Event</li>
            <li>Seeding</li>
            <li>Careers</li>
            <li>Become a Service Provider</li>
            <li>Start a Chapter</li>
          </ul>
        </div>
        <div className='footer-col-4 footer-col col-md-2'>
          <p>Community</p>
          <ul>
            <li>Member Profiles</li>
            <li>Sponsored Members</li>
            <li>On-Board Artists</li>
            <li>Staff & Drivers</li>
            <li>Sponsors</li>
            <li>Win Free Rides</li>
            <li>Social Media</li>
            <li>Blog</li>
            <li>Photos</li>
            <li>Causes</li>
            <li>Member Benefits</li>
          </ul>
        </div>
        <div className='footer-col-5 footer-col col-md-2'>
          <p>Help & FAQ</p>
          <ul>
            <li>Determining departure location</li>
            <li>Determining departure times</li>
            <li>Reserving for multiple people</li>
            <li>Getting back home</li>
            <li>Why membershio?</li>
            <li>Tips for enjoyment</li>
          </ul>
        </div>
      </nav>
    </div>


  )
}

export default Footer;
