import React from 'react'
import '../../App.css';
import CartItem from './CartItem'

const Cart = (props) => {



  return (
    <div className='Cart'>
      <React.Fragment>
        <h2>My Cart</h2>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-4">Show</div>
              <div className="col-md-4">Location</div>
              <div className="col-md-2">Date</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          <ul className="list-group">
            <CartItem showsInCart={props.showsInCart} />
          </ul>
          {props.showsInCart ? <div className="list-group-item">
            <div className='row'>
              <button type="button" onClick={props.returnToShows} className="btn btn-outline-danger return-btn ml-2 float-right">Cancel</button>
              <button type="button" onClick={props.addToCart} className="btn btn-outline-success return-btn ml-2 float-right">Purchase</button>
            </div>
          </div> : ''}
        </div> 
        </React.Fragment>

    </div>
  )
}

export default Cart;