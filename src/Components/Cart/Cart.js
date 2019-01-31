import React from 'react'
import '../../App.css';
import CartItem from './CartItem'

const Cart = (props) => {
  console.log('Cart', props)
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
          {props.showsInCart ?
            <div className="list-group-item" >
              <div className="row">
                <div className="col-md-12">
                  <form className="needs-validation" noValidate>
                    <div className="form-row">
                      <div className="col-md-4 mb-3">
                        <label htmlFor="validationCustom01">First name</label>
                        <input type="text" className={`form-control ${props.validated ? 'is-valid' : 'is-invalid'}`} id="validationCustom01" placeholder="First name" required />
                        <div className="valid-feedback">
                          Looks good!
                      </div>
                      </div>
                      
                      <div className="col-md-4 mb-3">
                        <label htmlFor="validationCustom02">Last name</label>
                        <input type="text" className={`form-control ${props.validated ? 'is-valid' : 'is-invalid'}`} id="validationCustom02" placeholder="Last name" required />
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                      </div>
                      
                    </div>
                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom03">Email</label>
                        <input type="email" className={`form-control ${props.validated ? 'is-valid' : 'is-invalid'}`} id="validationCustom03" placeholder="City" required />
                        <div className="invalid-feedback">
                          Please provide a valid email.
      </div>
                      </div>
                      </div>
                  
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                          Agree to terms and conditions
      </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
      </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className="buttons-cont col-md-6">
                        <button type="button" onClick={props.returnToShows} className="btn btn-outline-danger return-btn ml-2">Cancel</button>
                        <button type="button" onClick={props.handleSubmit} className="btn btn-outline-success return-btn ml-2">Purchase</button>
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