import React from 'react'
import '../../App.css';
import logo from '../../Images/Logos/bts-logo-gray.png'
<<<<<<< HEAD
import DiscountCode from '../DiscountCode'
=======
import MediaQuery from 'react-responsive';
>>>>>>> 9e526b937cc06cbe37d8bbd4cd6f3e38d07256a9

const ShowDetailView = (props) => {
  // console.log("ShowDetailView",props)

  const show = props.displayShow
  const headlinerBio = show.headlinerBio.split('<a')[0]
  const noBio = 'No bio information available, so enjoy a kitten on us.'


  // placekitten.com/width/height of photo to be displayed
  const placeKitten = 'http://placekitten.com/174/174'

  return (
    <div className='ShowDetailView'>
      {show ?
        <div className={`content-section-details ${props.displayBorder ? 'add-border' : 'remove-border'}`}>
          <h3 style={{textAlign: "center"}}>{show.headliner}</h3>
          <div className="list-group">
            {props.displayWarning ?
              <div className="list-group-item alert-item">
                <div className="alert alert-warning" role="alert">Please either complete purchase of item in cart, or remove it to procceed.</div>
              </div> :
              props.displaySuccess ?
                <div className="list-group-item alert-item">
                  <div className="alert alert-success" role="alert"> Added {show.headliner} - {show.date} to cart!</div>
                </div> :
                <MediaQuery minWidth={768}>
                <div className="list-group-item">
                  <div className="row">
                    <div className="col-md-4">Location</div>
                    <div className="col-md-4">Date</div>
                    <div className="col-md-4"></div>
                  </div>
                </div>
                </MediaQuery>}


            <div className="list-group-item">
              <div className="row">
                <div className="col-md-4" style={{textAlign: "center"}}>{show.venue}</div>
                <div className="col-md-4" style={{textAlign: "center"}}>{show.date}</div>
                <div className="col-md-4" style={{textAlign: "center"}}>Saturday</div>
              </div>
            </div>
            <div className="list-group-item">
              <div className='row container justify-content-center'>
              <MediaQuery minWidth={768}>
                <div className="col-md-8 artist-info bio-font">
                  {show.headlinerBio ? headlinerBio :
                    <div>
                      <div className='row'>
                        <div className="col-md-12">
                          {noBio}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 offset-md-1 mt-3 no-info-logo">
                          <img src={logo} width="233" height="100" className="d-inline-block align-top" alt="bts-logo" />
                        </div>
                      </div>
                    </div>}
                </div>
                </MediaQuery>
                <div className="col-md-4 artist-image">
                  <div className="row justify-content-center">
                  <img src={show.headlinerImgLink ? show.headlinerImgLink : placeKitten} alt="headliner" />
                  </div>
                </div>
              </div>
<<<<<<< HEAD
              <div>
//                <DiscountCode />
              </div>
              <div className="row col-md-10">
                <span>Departure Location</span>
=======
              <div className="row col-md-7 offset-md-2 justify-content-center">
                <div style={{textAlign: "center"}}>Departure Location</div>
>>>>>>> 9e526b937cc06cbe37d8bbd4cd6f3e38d07256a9
                <form className="was-validated">
                  <div className="form-group">
                    <select className="custom-select mt-2" onChange={props.selectPickupLocationId} required>
                      <option value="">Select a Departure Location...</option>
                      {props.pickupLocations ?
                        props.pickupLocations.map(location => {
                          return (
                            <option
                              key={location.id}
                              id={location.id}
                              value={location.id}>{location.locationName} - ${location.basePrice.toFixed(2)} each</option>
                          )
                        })
                        : ''}
                    </select>
                  </div>
                </form>
              </div>
              <div className="row col-md-7 offset-md-2 justify-content-center">
                {props.displayQuantity ?
                  <React.Fragment>

                    <div style={{textAlign: "center"}} className="col-md-12">
                      Ticket Quantity

                  </div>
                    <form className="was-validated">
                      <div className="form-group">

                      {props.ticketsAvailable.length === 0 ?
                      <button className="btn btn-danger px-2" disabled="disabled" type="button">Sold Out!</button> :

                      <select
                        className="custom-select mt-2"
                        onChange={props.selectTicketQuantity}
                        disabled={props.ticketsAvailable.length === 0 ? 'disabled' : ''}
                        required>
                        <option value="">Select Quantity</option>
                        {props.ticketsAvailable.map(number => <option value={number}>{number}</option>)}
                      </select>}

                      </div>
                      </form>

                  </React.Fragment> : ''}
              </div>
            </div>
            <div className="list-group-item">
              <div className='row col-md-12 justify-content-center'>
                <button type="button" onClick={props.returnToShows} className="btn btn-outline-danger return-btn ml-2 float-right">Cancel</button>
                {props.displayAddBtn ?
                  <button role="tabpanel" aria-labelledby="cart-tab" type="button" onClick={props.addToCart} className="btn btn-outline-primary return-btn ml-2 float-right">Add to Cart</button> : ''}
              </div>
            </div>
          </div>

        </div> : ''}

    </div>
  )
}




export default ShowDetailView;
