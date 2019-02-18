import React from 'react'
import '../App.css';
import ShowDetailView from './Shows/ShowDetailView'
import Cart from './Cart/Cart'
import MediaQuery from 'react-responsive';
import ShowList from '../Components/Shows/ShowList'
import logo from '../Images/Logos/bts-logo-gray.png'

const DetailCartView = (props) => {
  // console.log('DCV', props)
  console.log('top list/deets/cart', props.displayShowList, props.displayShowDetails, props.displayCart)

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
                  pickupPartyId={props.pickupPartyId}
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
                  assignedParties={props.assignedParties}
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
                  pickupPartyId={props.pickupPartyId}
                  lastDepartureTime={props.lastDepartureTime}
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
                className={`nav-link ${props.displayShowList ? 'active' : ''} ${props.inCart.length > 0 ? 'disabled' : ''}`}
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
                className={`nav-link ${props.displayShowDetails ? 'active' : ''} ${props.inCart.length > 0 ? 'disabled' : ''}`}
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
                className={`nav-link ${props.displayCart ? 'active' : ''}`}
                id="cart-tab"
                data-toggle="tab"
                href="#cart"
                role="tab"
                aria-controls="cart"
                aria-selected="false">My Cart</a>
            </li>
          </ul>
          <div className="tab-content" id="mobile-tab-content">

            {props.shows && props.displayShowList ?
              <ShowList
                addBorder={props.addBorder}
                displayShow={props.displayShow}
                displayCart={props.displayCart}
                filterString={props.filterString}
                handleWarning={props.handleWarning}
                inCart={props.inCart}
                searchShows={props.searchShows}
                shows={props.shows}
                mobileShowsExpandClick={props.mobileShowsExpandClick}
                sortByArtist={props.sortByArtist}
                sortByDate={props.sortByDate}
                sortedByArtist={props.artistIcon}
                sortedByDate={props.dateIcon}
                ticketsAvailable={props.ticketsAvailable} />
              :
              ''
            }
          </div>
          {(props.displayShow || props.displayShowDetails) && !props.displayCart ?
            <ShowDetailView
              addToCart={props.addToCart}
              assignedParties={props.assignedParties}
              displayAddBtn={props.displayAddBtn}
              displayBorder={props.displayBorder}
              displayCart={props.displayCart}
              displayQuantity={props.displayQuantity}
              displayShow={props.displayShow}
              displayShowDetails={props.displayShowDetails}
              displaySuccess={props.displaySuccess}
              displayViewCartBtn={props.displayViewCartBtn}
              displayWarning={props.displayWarning}
              findDiscountCode={props.findDiscountCode}
              inCart={props.inCart}
              lastDepartureTime={props.lastDepartureTime}
              mobileShowsExpandClick={props.mobileShowsExpandClick}
              pickupLocations={props.pickupLocations}
              pickupLocationId={props.pickupLocationId}
              pickupPartyId={props.pickupPartyId}
              returnToShows={props.returnToShows}
              selectPickupLocationId={props.selectPickupLocationId}
              selectTicketQuantity={props.selectTicketQuantity}
              showsExpandClick={props.showsExpandClick}
              ticketsAvailable={props.ticketsAvailable}
              ticketQuantity={props.ticketQuantity}
              updateDiscountCode={props.updateDiscountCode}
              totalCost={props.totalCost}
              viewCart={props.viewCart} />
            : ''}

        </div>
        {props.displayCart ?
          <div className="mobile-view">
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
              pickupPartyId={props.pickupPartyId}
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
          </div>
          :
          ''}
      </MediaQuery>
      {/* // End Mobile View */}
    </div>
  )
}

export default DetailCartView;
