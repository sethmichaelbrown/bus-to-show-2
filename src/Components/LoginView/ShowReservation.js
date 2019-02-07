import React from 'react'
import '../../App.css';
import moment from 'moment'
import MediaQuery from 'react-responsive';
import logo from '../../Images/Logos/bts-logo-gray.png'


const ShowReservation = (props) => {
  const filterString = props.filterString.toLowerCase()
  let filterShows = props.shows.filter(show => show.headliner.toLowerCase().includes(filterString))

  if (filterShows.length === 0) {
    filterShows = props.shows.filter(show => show.venue.toLowerCase().includes(filterString))
  }

  return (
    <div className='Shows contianer'>
      <ul>
      {filterShows.length > 0 ? filterShows.map(show =>
        <li className="list-group-item highlightOnHover show-list-item" key={show.id} id={show.id}>
          <div className="row" id={show.id}>
            <MediaQuery minWidth={768}>
              <div className="col-md-3 list-item-font" id={show.id}>{show.date} <br /> {moment(show.date, "MM-DD-YYYY").format("dddd")}</div>
              <div className="col-md-7 list-item-font" id={show.id}>
                <strong>{show.headliner}</strong> <br /> 
                  {show.support1 ? <React.Fragment> with {show.support1} <br /> </React.Fragment> : ''} 
                  {show.support2 ? <React.Fragment> and more! <br /> </React.Fragment> : ''}    
                  {show.venue}
              </div>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
              <div className="col-md-3 list-item-font" id={show.id}>{show.date} <br /> {moment(show.date, "MM-DD-YYYY").format("dddd")}</div>
              <div className="col-md-7 list-item-font" id={show.id}>
                <strong>{show.headliner}</strong> <br />{show.venue}
              </div>
            </MediaQuery>
            <button
              id={show.id}
              // onClick={props.addBorder}
              onClick={props.showsExpandClick}
              type="button"
              className='btn detail-btn my-4 col-md-2'>Details</button>

          </div>

        </li>) :
        <li className="list-group-item ">
          <div className="row">
            <div className="col-md-12 col-xs-12">
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
