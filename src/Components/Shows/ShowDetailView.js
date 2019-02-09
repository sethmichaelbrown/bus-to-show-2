import React from 'react'
import '../../App.css';
import logo from '../../Images/Logos/bts-logo-gray.png'
import MediaQuery from 'react-responsive';
import moment from 'moment'

const ShowDetailView = (props) => {

  const show = props.displayShow
  const headlinerBio = show.headlinerBio.split('<a')[0]


  let basePrice;

  if (props.pickupLocationId) {
    basePrice = props.pickupLocations.find(location => parseInt(location.id) === parseInt(props.pickupLocationId)).basePrice.toFixed(2)
  }


  return (
    <div className='ShowDetailView'>
      {show ?
        <div className={`content-section-details ${props.displayBorder ? 'add-border' : 'remove-border'}`}>
          <h4>Bus Rides to {show.headliner} at {show.venue.split('Amphitheatre').join('')}</h4>
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
                      <div className="col-md-4" style={{ textAlign: "center" }}>Location</div>
                      <div className="col-md-4" style={{ textAlign: "center" }}>Date</div>
                      <div className="col-md-4" style={{ textAlign: "center" }}>Day of Week</div>
                    </div>
                  </div>
                </MediaQuery>}


            <div className="list-group-item">
              <div className="row">
                <div className="col-md-4" style={{ textAlign: "center" }}>{show.venue.split('Amphitheatre')[0]}</div>
                <div className="col-md-4" style={{ textAlign: "center" }}>{show.date}</div>
                <div className="col-md-4" style={{ textAlign: "center" }}>{moment(show.date, "MM-DD-YYYY").format("dddd")}</div>
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
                            <p>
                              The concept for Bus to Show was conceived by our founder several years in the future, and then planted in the mind of his younger self (2007) through inter-temporal-telepathy. Bus to Show is, at its core, designed to save the lives of a few future political and spiritual leaders, who would otherwise have been killed in their youth by impaired drivers on their way home from concerts. At the same time, Bus to Show works to reduce the amount of fuel consumption that results from events, which, in turn, will delay the destruction of the Earth long enough for the saved leaders to come of-age and implement their plans for reaching a sustained equilibrium between industry and environment.
                              <br />
                              <br />
                              Bus to Show is a Colorado Nonprofit Corporation with the ability to accept 501(c)(3) tax-exempt donations through its fiscal sponsor partnership with The Nowak Society.
                            </p>
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
                  <div className={`row justify-content-center ${show.headlinerImgLink ? '' : 'bts-logo-flex'}`}>
                  {show.headlinerImgLink ? 
                    <img src={show.headlinerImgLink} alt="headliner-img" /> :
                    <img src={logo} alt="bts-logo" className='logo-img'/>}
                  </div>
                </div>
              </div>

              <div className="row">

                <div className="col-md-7">
                  <div>Departure Location</div>
                  <form className="was-validated">
                    <div className="form-group">
                      <select id="departureLocation" className="custom-select mt-2" onChange={props.selectPickupLocationId} required>
                        <option value="Select a Departure Location..." >Select a Departure Location...</option>
                        {props.pickupLocations ?
                          props.pickupLocations.map(location => {
                            return (
                              <option
                                key={location.id}
                                id={location.id}
                                value={location.id}>{location.locationName} - ${location.basePrice.toFixed(2)} each
                            </option>
                            )
                          })
                          : ''}
                      </select>
                    </div>
                  </form>
                </div>

                <div className="col-md-5 float-right mt-4">
                  {props.displayQuantity ?
                    <React.Fragment>
                      <h5>
                        <span className='badge badge-secondary align-left'>
                          <div>${basePrice} per ticket</div>
                          <div>+ ${(basePrice * .1).toFixed(2)} processing fee</div>
                        </span>
                      </h5>

                    </React.Fragment>
                    : ''}
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  {props.displayQuantity ?
                    <React.Fragment>
                      <div className="col-md-12">
                        Ticket Quantity
                        </div>
                      <form className="was-validated">
                        <div className="form-group">
                          {props.ticketsAvailable.length === 0 ?
                            <button className="btn btn-danger" disabled="disabled" type="button">Sold Out!</button>
                            :
                            <select
                              className="custom-select mt-2"
                              onChange={props.selectTicketQuantity}
                              disabled={props.ticketsAvailable.length === 0 ? 'disabled' : ''}
                              required>
                              <option value="">Select Quantity</option>
                              {props.ticketsAvailable.map(number => <option key={number} value={number}>{number}</option>)}
                            </select>}
                        </div>
                      </form>
                    </React.Fragment> : ''}
                </div>
                <div className="col-md-5 float-right mt-4 py-2">
                  {props.displayAddBtn ?
                    <div>
                      <h3><span className="badge badge-success">
                        Total: ${((props.pickupLocations.map(location => location.basePrice.toFixed())[0]) * (props.ticketQuantity) * 1.1).toFixed(2)}
                        {props.pickupLocation}
                      </span></h3>
                    </div> : ''}
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className='row col-md-12'>
                <button type="button" onClick={props.returnToShows} className="btn btn-outline-danger return-btn float-right">Cancel</button>
                {props.displayAddBtn ?
                  <button role="tabpanel" aria-labelledby="cart-tab" type="button" onClick={props.addToCart} className="btn btn-outline-primary return-btn ml-2 float-right">Add to Cart</button> : ''}
                {props.displayViewCartBtn ?
                  <button aria-labelledby="cart-tab" type="button" onClick={props.viewCart} className="btn btn-outline-success return-btn ml-2 float-right">View Cart</button> : ''}
              </div>
            </div>
          </div>

        </div> : ''}

    </div>
  )
}




export default ShowDetailView;
