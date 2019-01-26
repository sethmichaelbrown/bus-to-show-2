import React from 'react'
import '../../App.css';


const Events = (props) => {
  const filterString = props.filterString.toLowerCase()
  const filterEvents = props.events.filter(event => event.event.toLowerCase().includes(filterString))

  return (
    <div className='Events'>

      {filterEvents.length > 0 ? filterEvents.map(show =>
        <li className="list-group-item highlightOnHover" onClick={props.eventExpandClick} key={show.id} id={show.id}>
          <div className="row" id={show.id}>
              <div className="col-md-6" id={show.id}>{show.event}</div>
              <div className="col-md-4" id={show.id}>{show.location}</div>
              <div className="col-md-2" id={show.id}>{show.date}</div>

            </div>

        </li>) : 
        <li className="list-group-item highlightOnHover">
          <div className="row add-a-show">
              <div className="col-md-12 ">
                <h5>I find our lack of that show disturbing.</h5>
              </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                <button type="button" class="btn btn-outline-primary mt-2">Add that show</button>
              </div>
          </div>

        </li> }
    </div>
  )
}

export default Events;
