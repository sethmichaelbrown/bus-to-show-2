import React from 'react'
import '../../App.css';
import logo from '../../Images/Logos/bts-logo-orange.png'
import MediaQuery from 'react-responsive';
import ShowReservation from './ShowReservation'

const LoginView = (props) => {


  return (
    <div className='Shows'>
      <div className='container mt-3'>
        <div className="list-group">
          <div className="list-group-item show-header">

            <div className="row show-list-flex">

              <div className="col-3 mb-3" onClick={props.sortByDate}>
                <button type="button" className="btn btn-outline-light sort-btn">
                  <strong>Date  </strong>
                
                </button>

              </div>

              <div className="col-3 mb-3" onClick={props.sortByArtist}>
                <button type="button" className="btn btn-outline-light sort-btn">
                  <strong>Event  </strong>
                  
                </button>

              </div>

            </div>

            <ul className="list-group">

              {props.shows ?
                <div>
                  <MediaQuery minWidth={768}>
                    <div className="row ">
                      <div className="col-md-12">
                    <ShowReservation
                      addBorder={props.addBorder}
                      displayShow={props.displayShow}
                      filterString={props.filterString}
                      shows={props.shows}
                      showsExpandClick={props.showsExpandClick} />
                      </div>
                    </div>
                  </MediaQuery>
                  <MediaQuery maxWidth={768}>
                    <div className="row text-center container">
                      <div className="col-md-12 mt-5">
                        <ShowReservation
                          addBorder={props.addBorder}
                          displayShow={props.displayShow}
                          filterString={props.filterString}
                          shows={props.shows}
                          showsExpandClick={props.showsExpandClick} />
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

export default LoginView;
