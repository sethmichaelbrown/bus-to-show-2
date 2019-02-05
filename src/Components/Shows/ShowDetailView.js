import React from 'react'
import '../../App.css';
import logo from '../../Images/Logos/bts-logo-gray.png'
import DiscountCode from '../DiscountCode'

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
          <h4>{show.headliner}</h4>
          <div className="list-group">
            {props.displayWarning ?
              <div className="list-group-item alert-item">
                <div className="alert alert-warning" role="alert">Please either complete purchase of item in cart, or remove it to procceed.</div>
              </div> :
              props.displaySuccess ?
                <div className="list-group-item alert-item">
                  <div className="alert alert-success" role="alert"> Added {show.headliner} - {show.date} to cart!</div>
                </div> :
                <div className="list-group-item">
                  <div className="row">
                    <div className="col-md-4">Location</div>
                    <div className="col-md-4">Date</div>
                    <div className="col-md-4"></div>
                  </div>
                </div>}

            <div className="list-group-item">
              <div className="row">
                <div className="col-md-4">{show.venue}</div>
                <div className="col-md-4">{show.date}</div>
                <div className="col-md-4">Saturday</div>
              </div>
            </div>
            <div className="list-group-item">
              <div className='row container'>
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
                <div className="col-md-4 artist-image">
                  <img src={show.headlinerImgLink ? show.headlinerImgLink : placeKitten} alt="headliner" />
                </div>
              </div>
              <div>
//                <DiscountCode />
              </div>
              <div className="row col-md-10">
                <span>Departure Location</span>
                <form className="was-validated">
                  <div className="form-group">
                    <select className="custom-select" onChange={props.selectPickupLocationId} required>
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
              <div className="row">
                <div className="col-md-5 float-left">
                  {props.displayQuantity ?
                    <div>
                      <span>Ticket Quantity</span>
                      <form className="was-validated">
                        <div className="form-group">
                          {props.ticketsAvailable.length === 0 ?
                            <button type="button" disabled='disabled' className="btn btn-lg btn-danger mt-1">Sold Out!</button> :
                            <select
                              className="custom-select"
                              onChange={props.selectTicketQuantity}
                              disabled={props.ticketsAvailable.length === 0 ? 'disabled' : ''}
                              required>
                              <option value="">Select Quantity</option>
                              {props.ticketsAvailable.map(number => <option key={number} value={number}>{number}</option>)}
                            </select>}
                        </div>
                      </form>
                      <span>Current Total: ${props.totalCost}</span>
                    </div> : ''}
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className='row'>
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
