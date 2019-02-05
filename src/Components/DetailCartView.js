import React from 'react'
import '../App.css';
import ShowDetailView from './Shows/ShowDetailView'
import Cart from './Cart/Cart'
import logo from '../Images/Logos/bts-logo-gray.png'

const DetailCartView = (props) => {
  // console.log('DCV', props)
  const time = props.timeLeftInCart

  const millisToMinutesAndSeconds = (mili) => {
    var minutes = Math.floor(mili / 60000)
    var seconds = ((mili % 60000) / 1000).toFixed(0)
    return seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds
  }

  console.log(millisToMinutesAndSeconds(time))


  return (
    <div className='DetailCartView container'>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a onClick={props.tabClicked} className="nav-link active" id="showDetails-tab" data-toggle="tab" href="#showDetails" role="tab" aria-controls="showDetails" aria-selected="true">Show Details</a>
        </li>
        <li className="nav-item">
          <a onClick={props.tabClicked} className="nav-link" id="cart-tab" data-toggle="tab" href="#cart" role="tab" aria-controls="cart" aria-selected="false">My Cart</a>
        </li>
        <li>
          {/* {props.inCart.length > 0 ?
            <button type="button" disabled='disabled' className="btn btn-dark">{this.timeLeft}</button> : ''} */}
        </li>
      </ul>


      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="showDetails" role="tabpanel" aria-labelledby="showDetails-tab">
          <ShowDetailView
            addToCart={props.addToCart}
            displayAddBtn={props.displayAddBtn}
            displayBorder={props.displayBorder}
            displayQuantity={props.displayQuantity}
            displayShow={props.displayShow}
            displaySuccess={props.displaySuccess}
            displayWarning={props.displayWarning}
            pickupLocations={props.pickupLocations}
            returnToShows={props.returnToShows}
            selectPickupLocationId={props.selectPickupLocationId}
            selectTicketQuantity={props.selectTicketQuantity}
            showsExpandClick={props.showsExpandClick}
            ticketsAvailable={props.ticketsAvailable}
            ticketQuantity={props.ticketQuantity}
            totalCost={props.totalCost} />
        </div>
        <div className="tab-pane fade" id="cart" data-toggle="tab" role="tabpanel" aria-labelledby="cart-tab">
          {props.inCart.length > 0 ?
            <Cart
              checked={props.checked}
              handleCheck={props.handleCheck}
              handleSubmit={props.handleSubmit}
              pickupLocations={props.pickupLocations}
              purchaseClick={props.purchaseClick}
              quantityChange={props.quantityChange}
              removeFromCart={props.removeFromCart}
              returnToShows={props.returnToShows}
              pickupLocationId={props.pickupLocationId}
              showsInCart={props.inCart}
              totalCost={props.totalCost}
              ticketQuantity={props.ticketQuantity}
              updatePurchaseField={props.updatePurchaseField}
              validatedElements={props.validatedElements}
              validated={props.validated}
              purchase={props.purchase}
            /> :
            <div className="nothing-in-cart">
              <div className="list-group">
                <div className="list-group-item lgi-header">
                  <div className="row">
                    <div className="col-md-2">Show</div>
                    <div className="col-md-4">Departure Location</div>
                    <div className="col-md-2">Date</div>
                    <div className="col-md-2">Quantity</div>
                  </div>
                </div>
                <div className="row container nothing-in-cart-text">
                  <div className="col-md-12 mt-3">
                    <h1>Nothing in Cart!</h1>
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
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default DetailCartView;