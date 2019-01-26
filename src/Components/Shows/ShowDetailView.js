import React from 'react'
import '../../App.css';

const ShowDetailView = (props) => {
  // console.log(props)
  const show = props.displayShow

  return (
    <div className='ShowDetailView container'>
      <h2>Shows - {show.displayName}</h2>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-6">Event</div>
            <div className="col-md-4">Location</div>
            <div className="col-md-2">Date</div>
          </div>
        </div>

        <div className="list-group-item" onClick={props.showsExpandClick}>
          <div className="row">
            <div className="col-md-6">{show.displayName}</div>
            <div className="col-md-4">{show.venue.displayName}</div>
            <div className="col-md-2">{show.start.date}</div>
          </div>
        </div>
        <div className="list-group-item">
          <div className='row'>
            <div className="col-md-8">{show.type}</div>
            <div className="col-md-4">Image</div>
          </div>
          <select className="form-control mt-2">
            <option>Select Pickup Time & Location</option>
            <option>Boulder - 5:00pm || The Hill</option>
            <option>Boulder - 5:30pm || Transit Center</option>
            <option>Denver - 6:00pm || RiNo</option>
            <option>Fort Collins - 3:00pm || CSU Campus</option>
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
              <div className="alert alert-success" role="alert"> Added {show.displayName} - {show.start.date} to cart!</div>
            </div>
          </div> : ''}
        {props.displayWarning ?
          <div className="list-group-item alert-item">
            <div className='row'>
              <div className="alert alert-info" role="alert"> {show.displayName} is already in cart - please select quantity in cart!</div>
            </div>
          </div> : ''}

      </div>
    </div>
  )
}




export default ShowDetailView;
