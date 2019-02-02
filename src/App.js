import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Validator from 'validator'
import './App.css';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Header from './Components/Header'
import ShowList from './Components/Shows/ShowList'
import Loading from './Components/Loading'
import StripeView from './Components/StripeView'
import LoginView from './Components/LoginView/LoginView'
// import Footer from './Components/Footer'
import SponsorBox from './Components/SponsorBox'
import DetailCartView from './Components/DetailCartView'



class App extends Component {

  state = {
    displayShow: null,
    displaySuccess: false,
    loginView: false,
    displayCart: false,
    displayStripe: false,
    filterString: '',
    inCart: [],
    displayDetailCartView: false,
    artistDescription: null,
    displayBorder: false,
    rideId: null,
    ticketQuantity: null,
    displayAddBtn: false,
    displayQuantity: false,
    validated: false,
    validatedElements: {
      fName: null,
      lName: null,
      email: null,
      wCFName: null,
      wCLName: null
    },
    checked: false,
    totalCost: 0,

    cartToSend: {
      eventId: null,
      pickupLocationId: null,
      firstName: '',
      lastName: '',
      email: '',
      willCallFirstName: null,
      willCallLastName: null,
      ticketQuantity: 0,
      totalCost: 0,
      discountCode: ''
    }
  }


  async componentDidMount() {
    const response = await fetch('https://something-innocuous.herokuapp.com/events')
    const shows = await response.json()
    this.setState({ shows })
    const newState = { ...this.state }
    newState.shows.map(show => show.date = show.dateTime.split('T')[0].split('-').splice(1, 3).concat(show.dateTime.split('T')[0].split('-')[0]).join('/'))
    this.setState(newState)

    const pickups = await fetch('https://something-innocuous.herokuapp.com/pickup_locations')
    const pickupLocations = await pickups.json()
    this.setState({ pickupLocations })
    // console.log('State', this.state)
  }

  selectRideId = (event) => {
    const newState = { ...this.state }
    newState.rideId = event.target.value
    if (event.target.value) {
      newState.displayQuantity = true
    }
    else {
      newState.displayQuantity = false
    }
    this.setState(newState)
  }

  selectTicketQuantity = (event) => {
    const newState = { ...this.state }
    if (event.target.value) {
      newState.displayAddBtn = true
    }
    else {
      newState.displayAddBtn = false
    }
    newState.ticketQuantity = event.target.value
    this.setState(newState)
  }

  // Header Functions
  loginClick = (event) => {
    const newState = { ...this.state }
    newState.loginView = true
    this.setState(newState)
  }

  returnHome = (event) => {
    const newState = { ...this.state }
    newState.loginView = false
    this.setState(newState)
  }

  searchShows = (event) => {
    const newState = { ...this.state }
    newState.filterString = event.target.value
    this.setState(newState)
  }

  purchase = async () => {
    const cartObj = this.state.cartToSend
    const inCartResponse = await fetch('https://something-innocuous.herokuapp.com/pickup_parties', {
      method: 'PATCH',
      body: JSON.stringify(cartObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let timeoutCartObj = { ...cartObj }
    timeoutCartObj.ticketQuantity = timeoutCartObj.ticketQuantity * (-1)
    setTimeout(fetch('https://something-innocuous.herokuapp.com/pickup_parties', {
      method: 'PATCH',
      body: JSON.stringify(cartObj),
      headers: {
        'Content-Type': 'application/json'
      }
    }), 600000)
    const stripeResponse = await fetch('https://api.stripe.com', {
      method: 'PATCH',
      body: JSON.stringify(cartObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (stripeResponse.paid) {
      fetch('https://something-innocuous.herokuapp.com/orders', {
        method: 'POST',
        body: JSON.stringify(cartObj),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } else {
      console.log('REJECTED!!!!!!!!!!!!!!!!!')
    }
  }

  // Tab Functions
  tabClicked = (event) => {
    const newState = { ...this.state }
    if (event.target.id === 'cart-tab') {
      newState.displayCart = true
    }
    else {
      newState.displayCart = false
    }

    this.setState(newState)
  }

  // Show Functions
  showsExpandClick = (event) => {
    const newState = { ...this.state }
    const clickedShow = newState.shows.find(show => (parseInt(show.id) === parseInt(event.target.id)))
    newState.displayDetailCartView = true
    newState.displaySuccess = false
    newState.displayShow = clickedShow

    this.setState(newState)
  }

  returnToShows = (event) => {
    const newState = { ...this.state }
    newState.displayShow = null
    newState.displaySuccess = false
    this.setState(newState)
  }

  addToCart = (event) => {
    const newState = { ...this.state }
    const pickupLocation = this.state.pickupLocations.filter(location => location.id == this.state.rideId)[0]
    const basePrice = parseInt(pickupLocation.basePrice)
    const ticketQuantity = parseInt(this.state.ticketQuantity)
    const processingFee = parseInt((basePrice * ticketQuantity) * (0.1))
    const cost = ((basePrice * ticketQuantity) + processingFee)
    newState.totalCost = cost.toFixed(2)

    if (newState.inCart.length === 0) {
      newState.inCart.push(newState.displayShow)
      newState.displaySuccess = true
    }
    else {
      // // Turn on if multiple shows in cart desired

      // const cartIds = newState.inCart.map(show => show.id)
      // const compareIds = cartIds.find(id => id == newState.displayShow.id)
      // if (!compareIds) {
      //   newState.inCart.push(newState.displayShow)
      // }
      // else {
      //   console.log(event.target)
      // }

      console.log('One event at a time.')
    }
    this.setState(newState)
    console.log(newState)
  }


  // Cart Functions
  handleCheck = (event) => {
    const newState = { ...this.state }
    newState.checked = true
    this.setState(newState)
  }

  updatePurchaseField = (event) => {
    const newState = { ...this.state }
    const updateField = event.target.id
    const value = event.target.value
    const vE = newState.validatedElements
    let discountCode = ''

    // Checks fields via npm package validator
    if (!newState.validated) {
      if (updateField === 'email' && Validator.isEmail(value)) {
        vE.email = value
      }
      else if (updateField === 'firstName' && Validator.isAlpha(value)) {
        vE.fName = value
      }
      else if (updateField === 'lastName' && Validator.isAlpha(value)) {
        vE.lName = value
      }
      else if (updateField === 'willCallFirstName' && Validator.isAlpha(value)) {
        vE.wCFName = value
      }
      else if (updateField === 'willCallLastName' && Validator.isAlpha(value)) {
        vE.wCLName = value
      }
      else if (updateField === 'discountCode'){
        discountCode = value
      }
      else {
        return 'Please input valid items'
      }
    }

    this.setState({ validatedElement: newState.validatedElements })

    // Populates cartToSend
    if (this.state.validatedElements.fName && this.state.validatedElements.lName && this.state.validatedElements.email) {
      const cTS = newState.cartToSend

      cTS.firstName = this.state.validatedElements.fName
      cTS.lastName = this.state.validatedElements.lName
      cTS.email = this.state.validatedElements.email
      cTS.eventId = this.state.inCart[0].id
      cTS.ticketQuantity = this.state.ticketQuantity
      cTS.pickupLocationId = this.state.rideId
      cTS.willCallFirstName = this.state.validatedElements.wCFName
      cTS.willCallLastName = this.state.validatedElements.wCLName
      cTS.totalCost = this.state.totalCost
      cTS.discountCode = discountCode

      this.setState({ cartToSend: newState.cartToSend })
    }
    else {
      return 'ERROR!'
    }
  }

  removeFromCart = (event) => {
    const newState = { ...this.state }
    newState.inCart = []
    newState.displaySuccess = false
    this.setState(newState)
  }

  quantityChange = (event) => {
    const newState = { ...this.state }
    newState.ticketQuantity = event.target.value
    const pickupLocation = this.state.pickupLocations.filter(location => location.id == this.state.rideId)[0]
    const basePrice = parseInt(pickupLocation.basePrice)
    const ticketQuantity = parseInt(newState.ticketQuantity)
    const processingFee = parseInt((basePrice * ticketQuantity) * (0.1))
    const cost = ((basePrice * ticketQuantity) + processingFee)
    newState.totalCost = cost.toFixed(2)
    this.setState(newState)
  }

  addBorder = () => {
    const newState = { ...this.state }
    newState.displayBorder = true
    this.setState(newState)

    setTimeout(() => {
      const newState = { ...this.state }
      newState.displayBorder = false
      this.setState(newState)
    }, 1500)
  }

  purchaseClick = (event) => {
    const newState = { ...this.state }
    newState.displayStripe = true
    this.setState({displayStripe: newState.displayStripe})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.state.loginView ?
            <LoginView
              returnHome={this.returnHome} /> :
            this.state.shows ?
              <React.Fragment>
                <Header
                  searchShows={this.searchShows}
                  loginClick={this.loginClick} />
                <div className='content-section'>
                {this.state.displayStripe ? <StripeView /> : ''}
                  <div className='col-md-6 float-left'>
                    <ShowList
                      addBorder={this.addBorder}
                      filterString={this.state.filterString}
                      shows={this.state.shows}
                      displayShow={this.state.displayShow}
                      showsExpandClick={this.showsExpandClick} />
                  </div>
                </div>

                <div className='col-md-6 float-left'>
                  {this.state.displayCart || this.state.displayShow ?
                    <DetailCartView
                      addToCart={this.addToCart}
                      checked={this.state.checked}
                      displayAddBtn={this.state.displayAddBtn}
                      displayBorder={this.state.displayBorder}
                      displayCart={this.state.displayCart}
                      displayShow={this.state.displayShow}
                      displaySuccess={this.state.displaySuccess}
                      displayQuantity={this.state.displayQuantity}
                      handleSubmit={this.handleSubmit}
                      handleCheck={this.handleCheck}
                      inCart={this.state.inCart}
                      pickupLocations={this.state.pickupLocations}
                      purchaseClick={this.purchaseClick}
                      quantityChange={this.quantityChange}
                      removeFromCart={this.removeFromCart}
                      returnToShows={this.returnToShows}
                      rideId={this.state.rideId}
                      selectRideId={this.selectRideId}
                      selectTicketQuantity={this.selectTicketQuantity}
                      showsExpandClick={this.showsExpandClick}
                      showsInCart={this.state.inCart}
                      tabClicked={this.tabClicked}
                      ticketQuantity={this.state.ticketQuantity}
                      totalCost={this.state.totalCost}
                      updatePurchaseField={this.updatePurchaseField}
                      validated={this.state.validated}
                      validatedElements={this.state.validatedElements} />
                    :
                    <SponsorBox />}
                </div>
              </React.Fragment> : <Loading />
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;