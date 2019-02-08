import React from 'react'
import '../../App.css';
import moment from 'moment'
import MediaQuery from 'react-responsive';
import logo from '../../Images/Logos/bts-logo-gray.png'


const ShowReservation = (props) => {

  return (
    <div className='Shows contianer '>
      <ul>
      {props.reservations.length > 0 ? props.reservations.map(show =>
        <li className="list-group-item highlightOnHover show-list-item" key={show.orderId} id={show.orderId}>
          <div className="row" id={show.orderId}>
            <MediaQuery minWidth={768}>
              <div className="col-md-2 list-item-font" id={show.orderId}>{show.date} <br /> {moment(show.date, "MM-DD-YYYY").format("dddd")}</div>
              <div className="col-md-3 list-item-font" id={show.orderId}>
                <strong>{show.headliner}</strong> <br />
                  {show.support1 ? <React.Fragment> with {show.support1} <br /> </React.Fragment> : ''}
                  {show.support2 ? <React.Fragment> and more! <br /> </React.Fragment> : ''}
                  {show.venue}
              </div>
              <div className="col-md-2 list-item-font" id={show.orderId}>{moment(show.startTime, "hh:mm:ss ").format('h:mm A')} </div>
              <div className="col-md-2 list-item-font" id={show.orderId}>{show.willCallFirstName} {show.willCallLastName}</div>
              <div className="col-md-2 list-item-font" id={show.orderId}>{show.locationName} </div>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
              <div className="col-md-3 list-item-font" id={show.orderId}>{show.startTime} </div>
              <div className="col-md-7 list-item-font" id={show.orderId}>
                <strong>{show.headliner}</strong> <br />{show.venue}
              </div>
            </MediaQuery>
            

          </div>

        </li>) :
        <li className="list-group-item ">
          <div className="row justify-content-center" style={{textAlign: "center"}}>
            <div className="col-md-12 col-xs-12 ">
              <h5 className='black-text'>No reservations for this user.</h5>
              <img
                      className='nothing-in-cart-image'
                      src={logo}
                      alt="bts-logo"
                      width="233"
                      height="100" />
            </div>
          </div>
        </li>}
      </ul>
    </div>
  )
}

export default ShowReservation;
