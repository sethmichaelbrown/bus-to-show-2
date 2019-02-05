import React from 'react'
import '../../App.css';

const ShowDetailView = (props) => {
  // console.log("ShowDetailView",props)

  const show = props.displayShow
  const headlinerBio = show.headlinerBio.split('<a')[0]
  const noBio = 'Well. Nothing to see here, so I guess...have a kitten on us.'

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
                  {show.headlinerBio ? headlinerBio : noBio}
                </div>
                <div className="col-md-4 artist-image">
                  <img src={show.headlinerImgLink ? show.headlinerImgLink : placeKitten} alt="headliner" />
                </div>
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
                              value={location.id}>{location.locationName}</option>
                          )
                        })
                        : ''}
                    </select>
                  </div>
                </form>
              </div>
              <div className="row col-md-5">
                {props.displayQuantity ?
                  <React.Fragment>
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
                            {props.ticketsAvailable.map(number => <option value={number}>{number}</option>)}
                          </select>}
                      </div>
                    </form>
                  </React.Fragment> : ''}
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
