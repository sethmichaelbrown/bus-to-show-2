import React from 'react'
import '../../App.css';

const CartItem = (props) => {
  const eventsInCart = props.events.filter(event => event.inCart)

  return (
    <div className='CartItem'>

      {eventsInCart.map(event =>
        <li className="list-group-item highlightOnHover" onClick={props.eventExpandClick} key={event.id} id={event.id}>
          <div className="row" id={event.id}>
            <div className="col-md-4" id={event.id}>{event.event}</div>
            <div className="col-md-4" id={event.id} value={event.location}></div>
            <div className="col-md-2" id={event.id} value={event.date}></div>
            <div class="form-group col-md-2">
              <form>
                <input type="number" className="form-control" defaultValue='1'/>
              </form>
            </div>
          </div>

        </li>)}
    </div>
  )
}

export default CartItem;