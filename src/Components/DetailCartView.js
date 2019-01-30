import React, { Component } from 'react'
import '../App.css';
import ShowDetailView from './Shows/ShowDetailView'
import Cart from './Cart/Cart'

class DetailCartView extends Component {

  async componentDidMount() {
    const pickups = await fetch('https://something-innocuous.herokuapp.com/pickup_locations')
    const pickupLocations = await pickups.json()
    this.setState({ pickupLocations })
    console.log('DCV newState', this.state)
  }

  state = {
    rideId: null,
    ticketQuantity: null,
    displayAddBtn: false,
    displayQuantity: false,
  }



  selectRideId = (event) => {
    const newState = { ...this.state }
    newState.rideId = event.target.value
    if(event.target.value){
      newState.displayQuantity = true
    }
    else{
      newState.displayQuantity = false
    }
    this.setState(newState)
  }

  selectTicketQuantity = (event) => {
    const newState = { ...this.state }
    if(event.target.value){
      newState.displayAddBtn = true
    }
    else{
      newState.displayAddBtn = false
    }
    newState.ticketQuantity = event.target.value
    this.setState(newState)
  }
  



  render() {
    return (
      <div className='DetailCartView container'>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a onClick={this.props.tabClicked} className="nav-link active" id="showDetails-tab" data-toggle="tab" href="#showDetails" role="tab" aria-controls="showDetails" aria-selected="true">Show Details</a>
          </li>
          <li className="nav-item">
            <a onClick={this.props.tabClicked} className="nav-link" id="cart-tab" data-toggle="tab" href="#cart" role="tab" aria-controls="cart" aria-selected="false">My Cart</a>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="showDetails" role="tabpanel" aria-labelledby="showDetails-tab">
            <ShowDetailView
              displayQuantity={this.state.displayQuantity}
              displayAddBtn={this.state.displayAddBtn}
              selectTicketQuantity={this.selectTicketQuantity}
              selectRideId={this.selectRideId}
              pickupLocations={this.state.pickupLocations}
              returnToShows={this.props.returnToShows}
              displayShow={this.props.displayShow}
              addToCart={this.props.addToCart}
              showsExpandClick={this.props.showsExpandClick}
              displaySuccess={this.props.displaySuccess}
              displayWarning={this.props.displayWarning} />
          </div>
          <div className="tab-pane fade" id="cart" data-toggle="tab" role="tabpanel" aria-labelledby="cart-tab">
            {this.props.inCart.length > 0 ?
              <Cart
                ticketPrice={this.state.ticketPrice}
                ticketQuantity={this.state.ticketQuantity}
                pickupLocations={this.state.pickupLocations}
                showsInCart={this.props.inCart}
                rideId={this.state.rideId}
                purchaseClick={this.props.purchaseClick} /> : <h1>Nothing in Cart!</h1>}
          </div>
        </div>
      </div>
    )
  }
}

export default DetailCartView;