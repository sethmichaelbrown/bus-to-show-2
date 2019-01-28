import React from 'react'
import '../../App.css';

const ShowDetailView = (props) => {
  const show = props.displayShow

  return (
    <div className='ShowDetailView'>
      {props.displayShow ?
        <React.Fragment>
          <h3>{show.headliner}</h3>
          <div className="list-group">
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-6">Event</div>
                <div className="col-md-3">Location</div>
                <div className="col-md-3">Date</div>
              </div>
            </div>

            <div className="list-group-item">
              <div className="row">
                <div className="col-md-6 list-item-font">{show.headliner}</div>
                <div className="col-md-3 list-item-font">{show.venue}</div>
                <div className="col-md-3 list-item-font">{show.date}</div>
              </div>
            </div>
            <div className="list-group-item">
              <div className='row'>
                <div className="col-md-8">"INFO GOES HERE"</div>
                <div className="col-md-4">Image</div>
              </div>
              <select onChange={props.selectRideId} className="form-control mt-2" required>
                {props.pickupLocations ?
                  props.pickupLocations.map(location => {
                    return (
                      <option key={location.id} id={location.id} value={location.id}>{location.locationName}</option>
                    )
                  })
                  : ''}
              </select>
            </div>
            <div className="list-group-item">
              <div className='row'>
                <button type="button" onClick={props.returnToShows} className="btn btn-outline-danger return-btn ml-2 float-right">Cancel</button>
                <button type="button" onClick={props.addToCart} className="btn btn-outline-primary return-btn ml-2 float-right">Add to Cart</button>
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
