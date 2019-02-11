import React from 'react'
import '../App.css';
import ShowDetailView from './Shows/ShowDetailView'
import Cart from './Cart/Cart'
import MediaQuery from 'react-responsive';
import ShowList from '../Components/Shows/ShowList'
import logo from '../Images/Logos/bts-logo-gray.png'

const DetailCartView = (props) => {
  // console.log('DCV', props)
  // const time = props.timeLeftInCart

  // //For Tiny Timer
  // const millisToMinutesAndSeconds = (mili) => {
  //   var minutes = Math.floor(mili / 60000)
  //   var seconds = ((mili % 60000) / 1000).toFixed(0)
  //   return seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds
  // }
  // const displayTime = millisToMinutesAndSeconds(time)


  return (
    <div className='DetailCartView container'>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            onClick={props.tabClicked}
            className={`nav-link ${props.displayCart ? '' : 'active'} ${props.displayCart && props.inCart.length > 0 ? 'disabled' : ''}`}
            id="showDetails-tab"
            data-toggle="tab"
            href="#showDetails"
            role="tab"
            aria-controls="showDetails"
            aria-selected="true">Show Details</a>
        </li>
        <li className="nav-item">
          <a onClick={props.tabClicked} className={`nav-link ${props.displayCart ? 'active' : ''}`} id='cart-tab' data-toggle="tab" href="#cart" role="tab" aria-controls="cart" aria-selected="false">My Cart</a>
        </li>
        <MediaQuery maxWidth={768}>
          <li className="nav-item">
            <a onClick={props.tabClicked} className="nav-link" id="showList-tab" data-toggle="tab" href="#showlist" role="tab" aria-controls="showlist" aria-selected="false">Shows</a>
          </li>
          {/* <li>
          For Tiny Timer
          {props.inCart.length > 0 ?
          <button type="button" disabled='disabled' className="btn btn-dark">{displayTime}</button> : ''}
        </li> */}
        </MediaQuery>
      </ul>


      <div className="tab-content" id="myTabContent">
        <MediaQuery maxWidth={768}>
          <div className="tab-pane fade" id="showlist" data-toggle="tab" role="tabpanel" aria-labelledby="cart-tab">
            {props.displayCart ? '' :
              <ShowList
                addBorder={props.addBorder}
                displayShow={props.displayShow}
                filterString={props.filterString}
                inCart={props.inCart}
                shows={props.shows}
                showsExpandClick={props.showsExpandClick}
                ticketsAvailable={props.ticketsAvailable} />}
          </div>
        </MediaQuery>
        {props.displayCart ?
          <Cart
            afterDiscountObj={props.afterDiscountObj}
            checked={props.checked}
            confirmedRemove={props.confirmedRemove}
            closeAlert={props.closeAlert}
            displayConfirmRemove={props.displayConfirmRemove}
            displayWarning={props.displayWarning}
            findDiscountCode={props.findDiscountCode}
            firstBusLoad={props.firstBusLoad}
            getPickupParty={props.getPickupParty}
            handleCheck={props.handleCheck}
            handleSubmit={props.handleSubmit}
            inCart={props.inCart}
            lastDepartureTime={props.lastDepartureTime}
            makePurchase={props.makePurchase}
            pickupLocationId={props.pickupLocationId}
            pickupLocations={props.pickupLocations}
            pickupParties={props.pickupParties}
            purchase={props.purchase}
            purchaseClick={props.purchaseClick}
            purchasePending={props.purchasePending}
            purchaseSuccessful={props.purchaseSuccessful}
            quantityChange={props.quantityChange}
            removeFromCart={props.removeFromCart}
            returnToShows={props.returnToShows}
            shows={props.shows}
            showsInCart={props.inCart}
            ticketQuantity={props.ticketQuantity}
            totalCost={props.totalCost}
            updateDiscountCode={props.updateDiscountCode}
            updatePurchaseField={props.updatePurchaseField}
            validated={props.validated}
            validatedElements={props.validatedElements}
          /> :
          <ShowDetailView
            addToCart={props.addToCart}
            displayAddBtn={props.displayAddBtn}
            displayBorder={props.displayBorder}
            displayCart={props.displayCart}
            displayQuantity={props.displayQuantity}
            displayShow={props.displayShow}
            displaySuccess={props.displaySuccess}
            displayViewCartBtn={props.displayViewCartBtn}
            displayWarning={props.displayWarning}
            findDiscountCode={props.findDiscountCode}
            inCart={props.inCart}
            pickupLocations={props.pickupLocations}
            pickupLocationId={props.pickupLocationId}
            returnToShows={props.returnToShows}
            selectPickupLocationId={props.selectPickupLocationId}
            selectTicketQuantity={props.selectTicketQuantity}
            showsExpandClick={props.showsExpandClick}
            ticketsAvailable={props.ticketsAvailable}
            ticketQuantity={props.ticketQuantity}
            updateDiscountCode={props.updateDiscountCode}
            totalCost={props.totalCost}
            viewCart={props.viewCart} />}

      </div>
    </div>
  )
}

export default DetailCartView;
