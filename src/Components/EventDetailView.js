import React from 'react'
import '../App.css';
import logo from '../Images/Logos/bts-logo-orange.png'

const Events = (props) => {
  console.log(props)
  const event = props.event

  return (
    <div className='Events container'>
      <h2>{event.event} - {event.date}
        <button type="button" onClick={props.returnToEvents} className="btn btn-outline-primary return-btn ml-2">Return to Events</button>
      </h2>
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
      </div>
    </div>
  )
}

export default Events;
