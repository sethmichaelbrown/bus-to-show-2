import React from 'react'
import '../../App.css';

const ShowDetailView = (props) => {
  const show = props.displayShow
  console.log(props)

  return (
    <div className='ShowDetailView'>
      {props.displayShow ?
        <React.Fragment>
          <h3>{show.headliner}</h3>
          <div className="list-group">
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-4">Event</div>
                <div className="col-md-2">Location</div>
                <div className="col-md-2">Date</div>
                <div className="col-md-2"></div>
              </div>
            </div>

            <div className="list-group-item">
              <div className="row">
                <div className="col-md-4">{show.headliner}</div>
                <div className="col-md-2">{show.venue}</div>
                <div className="col-md-2">{show.date}</div>
                <div className="col-md-2">Saturday</div>
              </div>
            </div>
            <div className="list-group-item">
              <div className='row'>
                <div className="col-md-8 artist-info"></div>
                <div className="col-md-4 artist-image"></div>
              </div>
              <div className="row col-md-7 float-left">
                <span>Departure Location</span>
                <form class="was-validated">
                  <div class="form-group">
                    <select class="custom-select mt-2" onChange={props.selectRideId} required>
                      <option value="">Select a Departure Location...</option>
                      {props.pickupLocations ?
                        props.pickupLocations.map(location => {
                          return (
                            <option key={location.id} id={location.id} value={location.id}>{location.locationName}</option>
                          )
                        })
                        : ''}
                    </select>
                  </div>
                </form>
              </div>
              <div className="row col-md-5 float-right">
                {props.displayQuantity ?
                  <React.Fragment>
                    <span>Ticket Quantity</span>
                    <form class="was-validated">
                      <div class="form-group">
                        <select class="custom-select mt-2" onChange={props.selectTicketQuantity} required>
                          <option value="">Select Quantity</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
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
            {props.displaySuccess ?
              <div className="list-group-item alert-item">
                <div className='row'>
                  <div className="alert alert-success" role="alert"> Added {show.headliner} - {show.date} to cart!</div>
                </div>
              </div> : ''}
          </div>

        </React.Fragment> : ''}

    </div>
  )
}




export default ShowDetailView;
