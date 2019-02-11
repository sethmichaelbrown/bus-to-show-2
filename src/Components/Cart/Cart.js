import React from 'react'
import '../../App.css'
import CartItem from './CartItem'
import Checkout from './Stripe_Checkout'
import MediaQuery from 'react-responsive'
import logo from '../../Images/Logos/bts-logo-gray.png'

const Cart = (props) => {
  // console.log('Cart', props)

  let savings = Number(props.afterDiscountObj.totalSavings)
  let totalSavings = savings.toFixed(2)
  let cost = Number(props.totalCost - savings)
  let totalCost = cost.toFixed(2)

  return (
    <div className='Cart'>
      <React.Fragment>
        {props.inCart.length === 0 ?
          <div className="nothing-in-cart">
            <div className="row container nothing-in-cart-text">
              <div className="col-md-12 mt-3">
                {props.purchaseSuccessful ?
                  <div>
                    <h1>Thank you for your purchase!</h1>
                    <h3>You should receive a confirmation email shortly</h3>
                  </div>
                  : <h1>Nothing in Cart!</h1>}
              </div>
              <div className="col-md-12 mt-3">
                <img
                  className='nothing-in-cart-image'
                  src={logo}
                  alt="bts-logo"
                  width="233"
                  height="100" />
              </div>
            </div>
          </div>
          :
          <div className="list-group">
            <MediaQuery minWidth={768}>
              {props.displayWarning || props.purchasePending || props.purchaseSuccessful || props.displayConfirmRemove ?
                <div className="row">
                  <div className="col-md-12">
                    {props.displayWarning ? <div className="alert alert-warning mb-2" role="alert">
                      <h6 className="warning-text">
                        We are  currently only able to process orders  for  one  event  at  a time.  Please either complete your reservation for this event, or click  “cancel order”  to change qty or start over  with a different event.
                      </h6>
                      <div className="warning-btns">
                        <button onClick={props.removeFromCart} type="button" className="btn btn-sm btn-danger mr-2">Cancel & Start Over</button>
                        <button onClick={props.closeAlert} type="button" className="btn btn-sm btn-success">Continue With Order</button>
                      </div>
                    </div> : ''}
                    {props.purchasePending ? <div className="alert alert-primary" role="alert"> Purchase Pending... </div> : ''}
                    {props.displayConfirmRemove ? <div className="alert alert-danger" role="alert">
                      Are you sure you want to remove item from cart?
                    <button onClick={props.confirmedRemove} type="button" className="btn btn-danger ml-1">Remove</button>
                      <button onClick={props.closeAlert} type="button" className="btn btn-outline-secondary ml-1">Cancel</button>
                    </div> : ''}
                  </div>
                </div>
                :
                <div className="list-group-item lgi-header">
                  <div className="row">
                    <div className="col-md-4">Show</div>
                    <div className="col-md-4">Departure Location</div>
                    <div className="col-md-2">Date</div>
                    <div className="col-md-1">Qty</div>
                  </div>
                </div>}
            </MediaQuery>
            
            <MediaQuery maxWidth={768}>
              {props.displayWarning || props.purchasePending || props.purchaseSuccessful || props.displayConfirmRemove ?
                <div className="row">
                  <div className="col-md-12">
                    {props.displayWarning ? <div className="alert alert-warning mb-2" role="alert">
                      <h6 className="warning-text">
                        We are  currently only able to process orders  for  one  event  at  a time.  Please either complete your reservation for this event, or click  “cancel order”  to change qty or start over  with a different event.
                      </h6>
                      <div className="warning-btns">
                        <button onClick={props.removeFromCart} type="button" className="btn btn-sm btn-danger mr-2">Cancel & Start Over</button>
                        <button onClick={props.closeAlert} type="button" className="btn btn-sm btn-success">Continue With Order</button>
                      </div>
                    </div> : ''}
                    {props.purchasePending ? <div className="alert alert-primary" role="alert"> Purchase Pending... </div> : ''}
                    {props.displayConfirmRemove ? <div className="alert alert-danger" role="alert">
                      Are you sure you want to remove item from cart?
                      <button onClick={props.confirmedRemove} type="button" className="btn btn-danger ml-1">Remove</button>
                      <button onClick={props.closeAlert} type="button" className="btn btn-outline-secondary ml-1">Cancel</button>
                    </div> : ''}
                  </div>
                </div>
                : '' }
            </MediaQuery>
            
            <ul className="list-group">
              <CartItem
                afterDiscountObj={props.afterDiscountObj}
                closeAlert={props.closeAlert}
                confirmedRemove={props.confirmedRemove}
                confirmRemove={props.confirmRemove}
                displayConfirmRemove={props.displayConfirmRemove}
                firstBusLoad={props.firstBusLoad}
                getPickupParty={props.getPickupParty}
                lastDepartureTime={props.lastDepartureTime}
                pickupLocationId={props.pickupLocationId}
                pickupLocations={props.pickupLocations}
                pickupParties={props.pickupParties}
                quantityChange={props.quantityChange}
                removeFromCart={props.removeFromCart}
                shows={props.shows}
                showsInCart={props.showsInCart}
                ticketPrice={props.ticketPrice}
                ticketQuantity={props.ticketQuantity}
                totalCost={Number(props.totalCost).toFixed(2)} />
            </ul>
            {props.showsInCart ?
              <div className="list-group-item" >
                <div className="row">
                  <div className="col-md-12">

                    <form className="needs-validation" onSubmit={props.handleSubmit}>
                      <div className="form-row">
                        <div className="col-md-4 mb-3">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            onChange={props.updatePurchaseField}
                            type="text"
                            className={`form-control ${props.validatedElements.fName ? 'is-valid' : ''}`}
                            id="firstName"
                            placeholder="First Name"
                            required />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            onChange={props.updatePurchaseField}
                            type="text"
                            className={`form-control ${props.validatedElements.lName ? 'is-valid' : ''}`}
                            id="lastName"
                            placeholder="Last Name"
                            required />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-md-8 mb-3">
                          <label htmlFor="email">Email</label>
                          <input
                            onChange={props.updatePurchaseField}
                            type="email"
                            className={`form-control ${props.validatedElements.email ? 'is-valid' : ''}`}
                            id="email"
                            placeholder="Email address"
                            required />
                          <div className="invalid-feedback">
                            Please provide a valid email.
                        </div>
                        </div>
                      </div>

                      {/* Terinary to display will call name fields or button to show fields */}
                      {props.checked ?
                        <div className="form-row">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="willCallFirstName">Will Call First Name</label>
                            <input
                              onChange={props.updatePurchaseField}
                              type="text"
                              className='form-control'
                              id="willCallFirstName"
                              placeholder="First Name" />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="willCallLastName">Will Call Last Name</label>
                            <input
                              onChange={props.updatePurchaseField}
                              type="text"
                              className='form-control'
                              id="willCallLastName"
                              placeholder="Last Name" />
                          </div>
                        </div>
                        :
                        <div className="form-row">
                          <div className="col-md-4 mb-3">
                            <button
                              onClick={props.handleCheck}
                              type="button"
                              className="btn btn-outline-primary">Click if tickets are for someone else!</button>
                          </div>
                        </div>}
                      <div className="form-row">
                        <div className="col-md-4 mb-3">
                          <input
                            onChange={props.updateDiscountCode}
                            type="text"
                            className='form-control'
                            id="discountCode"
                            placeholder="Discount Code" />
                        </div>
                        <div className="col-md-4 mb-3">
                          <button type="button" onClick={props.findDiscountCode} className="btn btn-outline-secondary">Apply</button>
                        </div>
                      </div>

                      <div className='row display-flex'>
                        {savings ?
                          <div className="col-4">
                            <h5>Total savings:
                          <span className="badge badge-secondary ml-1">{`$${savings.toFixed(2)}`}</span>
                            </h5>
                          </div>
                          : ""
                        }
                      </div>


                      <div className='form-row cart-flex'>

                      </div>

                      <div className='form-row cart-flex'>
                        <MediaQuery maxWidth={767}>
                          <div className='row justify-content-center mb-1'>
                            <h4>Total savings:
                        <span className="badge badge-secondary">{savings}</span>
                            </h4>
                            <h4>Cart Total:
                          <span className="badge badge-secondary">{`$${totalCost}`}</span>
                            </h4>
                          </div>
                          <div>
                            <button onClick={props.removeFromCart} type="button" className="btn btn-outline-danger mr-1">Cancel</button>
                            <Checkout
                              makePurchase={props.makePurchase}
                              purchasePending={props.purchasePending}
                              validated={props.validated}
                              purchase={props.purchase}
                              afterDiscountObj={props.afterDiscountObj}
                              totalCost={totalCost}
                              showsInCart={props.showsInCart}>
                            </Checkout>
                          </div>
                        </MediaQuery>
                      </div>
                    </form>
                  </div>
                </div>
              </div> : ''}
          </div>}
      </React.Fragment>
    </div>

  )
}

export default Cart;
