import React from 'react'
import '../../App.css';
import MediaQuery from 'react-responsive';

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
          <h3 style={{textAlign: "center"}}>{show.headliner}</h3>
          <div className="list-group">
            <div className="list-group-item">
            <MediaQuery minWidth={768}>
              <div className="row ">
                <div className="col-md-1"></div>
                <div className="col-md-4">Location</div>
                <div className="col-md-4">Date</div>
                <div className="col-md-"></div>
              </div>
            </MediaQuery>
            </div>

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
                <div className="col-md-8 artist-info bio-font" >
                  {show.headlinerBio ? headlinerBio : noBio}
                </div>
                </MediaQuery>
                <div className="col-md-4 artist-image">
                  <div className="row justify-content-center">
                  <img src={show.headlinerImgLink ? show.headlinerImgLink : placeKitten} alt="headliner" />
                  </div>
                </div>
              </div>
              <div className="row col-md-7 offset-md-2 justify-content-center">
                <div style={{textAlign: "center"}}>Departure Location</div>
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
                              value={location.id}>{location.locationName}</option>
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
                      <span className="badge badge-secondary"><h4 >Sold Out!</h4></span> :

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

            {props.displaySuccess ?
              <div className="list-group-item alert-item">
                <div className='row justify-content-center'>
                  <div className="alert alert-success" role="alert"> Added {show.headliner} - {show.date} to cart!</div>
                </div>
              </div> : ''}
            {props.displayWarning ?
              <div className="list-group-item alert-item">
                <div className='row justify-content-center'>
                  <div className="alert alert-warning" role="alert">Please either complete purchase of item in cart, or remove it to procceed.</div>
                </div>
              </div> : ''}
          </div>

        </div> : ''}

    </div>
  )
}




export default ShowDetailView;
