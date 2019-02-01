import React from 'react'
import '../../App.css';
import CartItem from './CartItem'

const Cart = (props) => {
  // console.log('Cart', props)
  const ticketCost = (parseInt(props.basePrice) * parseInt(props.ticketQuantity)).toFixed(2)


  return (
    <div className='Cart'>
      <React.Fragment>
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
              removeFromCart={props.removeFromCart}
              rideId={props.rideId}
              showsInCart={props.showsInCart} />
          </ul>

          {props.showsInCart ?
            <div className="list-group-item" >
              <div className="row">
                <div className="col-md-12">
                  <form className="needs-validation" onSubmit={props.handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="col-md-4 mb-3">
                        <label htmlFor="firstName">First Name</label>
                        <input onKeyUp={props.updatePurchaseField} type="text" className={`form-control ${props.validatedElements.fName ? 'is-valid' : 'is-invalid'}`} id="firstName" placeholder="First Name" required />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="lastName">Last Name</label>
                        <input onKeyUp={props.updatePurchaseField} type="text" className={`form-control ${props.validatedElements.lName ? 'is-valid' : 'is-invalid'}`} id="lastName" placeholder="Last Name" required />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email">Email</label>
                        <input onChange={props.updatePurchaseField} type="email" className={`form-control ${props.validatedElements.email ? 'is-valid' : 'is-invalid'}`} id="email" placeholder="Email address" required />
                        <div className="invalid-feedback">
                          Please provide a valid email.
                          </div>
                      </div>
                    </div>

                    {props.checked ?
                      <div className="form-row">
                        <div className="col-md-4 mb-3">
                          <label htmlFor="willCallFirstName">Will Call First Name</label>
                          <input onKeyUp={props.updatePurchaseField} type="text" className='form-control' id="willCallFirstName" placeholder="First Name" />     
                        </div>

                        <div className="col-md-4 mb-3">
                          <label htmlFor="willCallLastName">Will Call Last Name</label>
                          <input onKeyUp={props.updatePurchaseField} type="text" className='form-control' id="willCallLastName" placeholder="Last Name" />
                        </div>
                      </div>
                      :
                      <div className="form-row">
                        <div className="col-md-4 mb-3">
                          <button onClick={props.handleCheck} type="button" className="btn btn-outline-primary">Click if tickets are for someone else!</button>
                        </div>
                      </div>}

                    <div className='row'>
                      <div className="buttons-cont col-md-6">
                        <button type="button" onClick={props.returnToShows} className="btn btn-outline-danger return-btn ml-2">Cancel</button>
                        <button type="submit" className="btn btn-outline-success return-btn ml-2">Purchase</button>
                      </div>
                      <div className="total-cont offset-md-3 col-md-3">
                        <span className=''>{`Total: $${ticketCost}`}</span>
                      </div>

                    </div>
                  </form>

                </div>
              </div>
            </div> : ''}
        </div>
      </React.Fragment>

    </div>
  )
}

export default Cart;