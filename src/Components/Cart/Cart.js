import React from 'react'
import '../../App.css';
import CartItem from './CartItem'

const Cart = (props) => {

  return (
    <div className='Cart'>
      <h2>Shopping Cart</h2>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-6">Event</div>
            <div className="col-md-4">Location</div>
            <div className="col-md-2">Date</div>
          </div>
        </div>
        <ul className="list-group">

          <CartItem events={props.events}/>
        </ul>

      </div>
    </div>
  )
}

export default Cart;