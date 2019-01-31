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
                        <label htmlFor="validationCustom01">First Name</label>
                        <input type="text" className={`form-control ${props.validated ? 'is-valid' : 'is-invalid'}`} id="validationCustom01" placeholder="First Name" required />
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="validationCustom02">Last Name</label>
                        <input type="text" className={`form-control ${props.validated ? 'is-valid' : 'is-invalid'}`} id="validationCustom02" placeholder="Last Name" required />
                        <div className="valid-feedback">
                          Looks good!
                          </div>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom03">Email</label>
                        <input type="email" className={`form-control ${props.validated ? 'is-valid' : 'is-invalid'}`} id="validationCustom03" placeholder="Email address" required />
                        <div className="invalid-feedback">
                          Please provide a valid email.
                          </div>
                      </div>
                    </div>

                    {props.checked ?
                      <div className="form-row">
                        <div className="col-md-4 mb-3">
                          <label htmlFor="validationCustom01">Will Call First Name</label>
                          <input type="text" className='form-control' id="validationCustom01" placeholder="First name" />
                          <div className="valid-feedback">
                            Looks good!
                      </div>
                        </div>

                        <div className="col-md-4 mb-3">
                          <label htmlFor="validationCustom02">Will Call Last Name</label>
                          <input type="text" className='form-control' id="validationCustom02" placeholder="Last name" />
                          <div className="valid-feedback">
                            Looks good!
                          </div>
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