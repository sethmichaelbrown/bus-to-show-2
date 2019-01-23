import React from 'react'
import '../../App.css';

const CartItem = (props) => {
  const eventsInCart = props.events.filter(event => event.inCart)

  return (
    <div className='CartItem'>

      {eventsInCart.map(event =>
        <li className="list-group-item highlightOnHover" onClick={props.eventExpandClick} key={event.id} id={event.id}>
          <div className="row" id={event.id}>
              <div className="col-md-6" id={event.id}>{event.event}</div>
              <div className="col-md-4" id={event.id}>{event.location}</div>
              <div className="col-md-2" id={event.id}>{event.date}</div>
            </div>

        </li>)}
    </div>
  )
}

export default CartItem;