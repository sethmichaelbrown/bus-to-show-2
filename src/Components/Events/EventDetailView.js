import React from 'react'
import '../../App.css';

const Events = (props) => {
  console.log(props)
  const event = props.event

  return (
    <div className='Events container'>
      <h2>{event.event} - {event.date}</h2>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-6">Event</div>
            <div className="col-md-4">Location</div>
            <div className="col-md-2">Date</div>
          </div>
        </div>

        <div className="list-group-item">
          <div className="row">
            <div className="col-md-6">{event.event}</div>
            <div className="col-md-4">{event.location}</div>
            <div className="col-md-2">{event.date}</div>
          </div>
        </div>
        <div className="list-group-item">
          <div className='row'>
            <div className="col-md-8">{event.description}</div>
            <div className="col-md-4">Image</div>
          </div>
        </div>
        <div className="list-group-item">
          <div className='row'>
            <button type="button" onClick={props.returnToEvents} className="btn btn-outline-danger return-btn ml-2 float-right">Cancel</button>
            <button type="button" onClick={props.addToCart} className="btn btn-outline-primary return-btn ml-2 float-right">Purchase Seat</button>
          </div>
        </div>
        {props.displaySuccess ?
          <div className="list-group-item alert-item">
            <div className='row'>
              <div className="alert alert-success" role="alert"> Added {event.event} - {event.date} to cart!</div>
            </div>
          </div> : ''}
        {props.displayWarning ?
          <div className="list-group-item alert-item">
            <div className='row'>
              <div className="alert alert-info" role="alert"> {event.event} is already in cart - please select quantity in cart!</div>
            </div>
          </div> : ''}

      </div>
    </div>
  )
}




export default Events;
