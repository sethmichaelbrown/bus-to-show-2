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
          {props.showsInCart ?
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-12">
                  <form>
                    <div class="form-row">
                      <div class="col-md-4 mb-3">
                        <label for="validationServer01">First name</label>
                        <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required />
                        <div class="valid-feedback">
                          Looks good!
                          </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <label for="validationServer02">Last name</label>
                        <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required />
                        <div class="valid-feedback">
                          Looks good!
                          </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <label for="validationServerUsername">Username</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend3">@</span>
                          </div>
                          <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
                          <div class="invalid-feedback">
                            Please choose a username.
                         </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-6 mb-3">
                        <label for="validationServer03">City</label>
                        <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required />
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="validationServer04">State</label>
                        <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required />
                        <div class="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="validationServer05">Zip</label>
                        <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required />
                        <div class="invalid-feedback">
                          Please provide a valid zip.
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
                        <label class="form-check-label" for="invalidCheck3">
                          Agree to terms and conditions
                        </label>
                        <div class="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Submit form</button>
                  </form>
                </div>
              </div>
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