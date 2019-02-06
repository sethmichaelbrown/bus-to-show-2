import React from 'react';
import '../../App.css';
import CartItem from './CartItem';
import Checkout from './Stripe_Checkout';
import MediaQuery from 'react-responsive';

const Cart = (props) => {
  // console.log('Cart', props)

  let cost = Number(props.totalCost)
  let totalCost = cost.toFixed(2)

  return (
    <div className='Cart'>
      <React.Fragment>
        <div className="list-group">
          <MediaQuery minWidth={768}>
            <div className="row">
              <div className="col-md-12">
                {props.purchasePending ? <div className="alert alert-primary" role="alert"> Purchase Pending... </div> : ''}
                {props.purchaseSuccessful ? <div className="alert alert-success" role="alert"> Purchase Successful... </div> : ''}
              </div>
            </div>
            <div className="list-group-item lgi-header">
              <div className="row">
                <div className="col-md-2">Show</div>
                <div className="col-md-4">Departure Location</div>
                <div className="col-md-2">Date</div>
                <div className="col-md-2">Quantity</div>
              </div>
            </div>
          </MediaQuery>
          <ul className="list-group">
            <CartItem
              pickupLocations={props.pickupLocations}
              quantityChange={props.quantityChange}
              removeFromCart={props.removeFromCart}
              pickupLocationId={props.pickupLocationId}
              showsInCart={props.showsInCart}
              ticketPrice={props.ticketPrice}
              ticketQuantity={props.ticketQuantity} />
          </ul>
          {props.showsInCart ?
            <div className="list-group-item" >
              <div className="row">
                <div className="col-md-12">

                  <form className="needs-validation" onSubmit={props.handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="col-md-4 mb-3">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          onChange={props.updatePurchaseField}
                          type="text"
                          className={`form-control ${props.validatedElements.fName ? 'is-valid' : 'is-invalid'}`}
                          id="firstName"
                          placeholder="First Name"
                          required />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          onChange={props.updatePurchaseField}
                          type="text"
                          className={`form-control ${props.validatedElements.lName ? 'is-valid' : 'is-invalid'}`}
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
                          className={`form-control ${props.validatedElements.email ? 'is-valid' : 'is-invalid'}`}
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


                    <div className='form-row '>
                      <MediaQuery minWidth={768}>
                        <Checkout
                          makePurchase={props.makePurchase}
                          purchasePending={props.purchasePending}
                          validated={props.validated}
                          purchase={props.purchase}
                          totalCost={totalCost}
                          showsInCart={props.showsInCart}>
                        </Checkout>

                        <h4>Cart Total:
                            <span className="badge badge-secondary">{`$${totalCost}`}</span>
                        </h4>

                      </MediaQuery>
                    </div>

                    <MediaQuery maxWidth={767}>
                      <div className='row justify-content-center mb-1'>
                        <h4>Cart Total:
                          <span className="badge badge-secondary">{`$${totalCost}`}</span>
                        </h4>
                      </div>
                      <div className='row justify-content-center '>
                        <Checkout
                          validated={props.validated}
                          purchase={props.purchase}
                          totalCost={totalCost}
                          showsInCart={props.showsInCart}>
                        </Checkout>
                      </div>

                    </MediaQuery>

                  </form>



                </div>
              </div>
            </div> : ''}
        </div>
      </React.Fragment>
      <div className="container">
      <div className="row justify-content-center">

    {props.purchasePending? <div className="alert alert-primary" role="alert"> Purchase Pending... </div> : ''}

    {props.purchaseSuccessful? <div className="alert alert-success" role="alert"> Purchase Successful!!! </div> : ''}
      </div>
      </div>
    </div>

  )
}

export default Cart;
