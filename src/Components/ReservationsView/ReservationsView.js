import React from 'react'
import '../../App.css';
import logo from '../../Images/Logos/bts-logo-orange.png'
import MediaQuery from 'react-responsive';
import ShowReservation from './ShowReservation'

const ReservationsView = (props) => {


  return (
    <div className='Shows'>
      <div className='container mt-3'>
        <div className="list-group">
          <div className="list-group-item show-header">

            <div className="row show-list-flex">

              <div className="col-2 mb-3 ml-5" >
                  <strong>Date  </strong>
              </div>
              <div className="col-2 mb-3" >
                  <strong>Event  </strong>
              </div>
              <div className="col-2 mb-3" >
                  <strong>Start Time  </strong>
              </div>
              <div className="col-2 mb-3 mr-2" >
                  <strong>Will Call Name  </strong>
              </div>
              <div className="col-2 mb-3 mr-2" >
                  <strong>Pickup Location  </strong>
              </div>
              <div className="col-2 mr-2">
              </div>
            </div>

            <ul className="list-group">

              {props.reservations ?
                <div>
                  <MediaQuery minWidth={768}>
                    <div className="row ">
                      <div className="col-md-12">
                    <ShowReservation
                      addBorder={props.addBorder}
                      displayShow={props.displayShow}
                      reservations={props.reservations} />
                      </div>
                    </div>
                  </MediaQuery>
                  <MediaQuery maxWidth={768}>
                    <div className="row text-center container">
                      <div className="col-md-12 mt-5">
                        <ShowReservation
                          addBorder={props.addBorder}
                          displayShow={props.displayShow}
                          reservations={props.reservations} />
                      </div>
                    </div>
                  </MediaQuery>
                </div>
                : ''}
            </ul>

          </div>
        </div>
      </div>
    </div>)
}

export default ReservationsView;
