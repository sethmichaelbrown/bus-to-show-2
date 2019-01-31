import React from 'react'
import '../../App.css';
import CartItem from './CartItem'

const Cart = (props) => {
  // console.log('Cart', props.showsInCart)
  const ticketCost = (parseInt(props.basePrice) * parseInt(props.ticketQuantity)).toFixed(2)

  return (
    <div className='Cart'>
      <React.Fragment>
        <h2>My Cart</h2>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-2">Show</div>
              <div className="col-md-4">Departure Location</div>
              <div className="col-md-2">Date</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          <ul className="list-group">
            <CartItem
              ticketPrice={props.ticketPrice}
              ticketQuantity={props.ticketQuantity}
              pickupLocations={props.pickupLocations}
              rideId={props.rideId}
              showsInCart={props.showsInCart} />
          </ul>
          {props.showsInCart ? <div className="list-group-item">
            <div className='row'>
              <div className="buttons-cont col-md-6">
                <button type="button" onClick={props.returnToShows} className="btn btn-outline-danger return-btn ml-2">Cancel</button>
                <button type="button" onClick={props.purchaseClick} className="btn btn-outline-success return-btn ml-2">Purchase</button>
              </div>
              <div className="total-cont offset-md-3 col-md-3">
                <span className=''>{`Total: $${ticketCost}`}</span>
              </div>
            </div>
          </div> : ''}
        </div>
      </React.Fragment>

    </div>
  )
}

export default Cart;