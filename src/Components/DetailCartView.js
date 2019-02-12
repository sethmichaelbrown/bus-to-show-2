import React from 'react'
import '../App.css';
import ShowDetailView from './Shows/ShowDetailView'
import Cart from './Cart/Cart'
import MediaQuery from 'react-responsive';
import ShowList from '../Components/Shows/ShowList'
import logo from '../Images/Logos/bts-logo-gray.png'

const DetailCartView = (props) => {
  // console.log('DCV', props)


  return (
    <div className="DetailCartView">
      {/* // Desktop View */}
      <MediaQuery minWidth={800}>
        <React.Fragment>
          <div className='container'>
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
                <a
                  onClick={props.tabClicked}
                  className={`nav-link ${props.displayCart ? 'active' : ''}`}
                  id='cart-tab'
                  data-toggle="tab"
                  href="#cart"
                  role="tab"
                  aria-controls="cart"
                  aria-selected="false">My Cart</a>
              </li>
            </ul>

            <div className="tab-content" id="desktop-tab-content">
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
                  validatedElements={props.validatedElements} /> :
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
        </React.Fragment>
      </MediaQuery>
      {/* // End DesktopView */}

      {/* // Mobile View */}
      <MediaQuery maxWidth={799}>
        <div className="mobile-DetailViewCart mt-2">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                onClick={props.mobileTabClicked}
                className="nav-link active"
                id="showList-tab"
                data-toggle="tab"
                href="#showList"
                role="tab"
                aria-controls="showList"
                aria-selected="true">Show List</a>
            </li>
            <li className="nav-item">
              <a
                onClick={props.mobileTabClicked}
                className="nav-link"
                id="showDetails-tab"
                data-toggle="tab"
                href="#showDetails"
                role="tab"
                aria-controls="showDetails"
                aria-selected="false">Show Detail</a>
            </li>
            <li className="nav-item">
              <a
                onClick={props.mobileTabClicked}
                className="nav-link"
                id="cart-tab"
                data-toggle="tab"
                href="#cart"
                role="tab"
                aria-controls="cart"
                aria-selected="false">My Cart</a>
            </li>
          </ul>
          <div className="tab-content" id="mobile-tab-content">
            <div className="mobile-showList tab-pane fade show active" id="showList" role="tabpanel" aria-labelledby="showList-tab">
              {props.shows ?
                <ShowList
                  addBorder={props.addBorder}
                  displayShow={props.displayShow}
                  filterString={props.filterString}
                  handleWarning={props.handleWarning}
                  inCart={props.inCart}
                  searchShows={props.searchShows}
                  shows={props.shows}
                  showsExpandClick={props.showsExpandClick}
                  sortByArtist={props.sortByArtist}
                  sortByDate={props.sortByDate}
                  sortedByArtist={props.artistIcon}
                  sortedByDate={props.dateIcon}
                  ticketsAvailable={props.ticketsAvailable} />
                :
                <div className="noShowList">
                  <h1>Server Error - ShowList</h1>
                </div>
              }
            </div>
            <div className="mobile-showDetailView tab-pane fade" id="showDetails" role="tabpanel" aria-labelledby="showDetails-tab">
              {props.displayShow ?
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
                  viewCart={props.viewCart} />
                :
                <div className="noShowSelected">
                  <div className="row nothing-in-cart-text">
                    <div className="col-md-12 mt-3">
                      <h1>Nothing Selected!</h1>
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
              }
            </div>
            <div className="tab-pane fade" id="cart" role="tabpanel" aria-labelledby="cart-tab">
              {props.inCart.length > 0 ?
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
                  validatedElements={props.validatedElements} />
                :
                <div className="noShowSelected">
                  <div className="row nothing-in-cart-text">
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
              }
            </div>
          </div>
        </div>

      </MediaQuery>
      {/* // End Mobile View */}
    </div>
  )
}

export default DetailCartView;
