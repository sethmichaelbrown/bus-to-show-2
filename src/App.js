// Packages
import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Validator from 'validator'

// Styling
import './App.css';

// Components
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
    pickupLocationId: null,
    ticketQuantity: null,
    displayAddBtn: false,
    displayQuantity: false,
    validated: false,
    ticketsAvailable: [],
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
      willCallFirstName: '',
      willCallLastName: '',
      ticketQuantity: 0,
      totalCost: 0,
      discountCode: ''
    }
  }


  async componentDidMount() {
    const response = await fetch('https://something-innocuous.herokuapp.com/events')
    const shows = await response.json()
    this.setState({ shows })

    const pickups = await fetch('https://something-innocuous.herokuapp.com/pickup_locations')
    const pickupLocations = await pickups.json()
    this.setState({ pickupLocations })
    // console.log('State', this.state)
  }

  selectPickupLocationId = async (event) => {
    const newState = { ...this.state }
    newState.pickupLocationId = event.target.value
    if (event.target.value) {
      newState.displayQuantity = true
    }
    else {
      newState.displayQuantity = false
    }
    this.setState(newState)

    const response = await fetch('http://localhost:3000/pickup_locations')
    const locations = await response.json()
    const statePickupId = parseInt(this.state.pickupLocationId)
    const stateEventId = parseInt(this.state.displayShow.id)

    const matchedLocation = locations.find(location => (parseInt(location.pickupLocationId) === statePickupId) && (parseInt(location.eventId) === stateEventId))

    let numArray = []
    if(matchedLocation){
      const capacityLessInCart = parseInt(matchedLocation.capacity) - parseInt(matchedLocation.inCart)
      numArray = [...Array(capacityLessInCart).keys()].map(i => i+1)
      newState.ticketsAvailable = numArray
    }
    else{
      console.log('Error!!')
    }

    this.setState({ticketsAvailable : newState.ticketsAvailable})
    console.log(this.state)
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
  loginClick = () => {
    const newState = { ...this.state }
    newState.loginView = true
    this.setState(newState)
  }

  returnHome = () => {
    const newState = { ...this.state }
    newState.loginView = false
    this.setState(newState)
  }

  searchShows = (event) => {
    const newState = { ...this.state }
    newState.filterString = event.target.value
    this.setState({ filterString: newState.filterString })
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
  showsExpandClick = async (event) => {
    const newState = { ...this.state }
    const clickedShow = newState.shows.find(show => (parseInt(show.id) === parseInt(event.target.id)))
    newState.displayDetailCartView = true
    newState.displaySuccess = false
    newState.displayShow = clickedShow

    this.setState(newState)
  }

  returnToShows = () => {
    const newState = { ...this.state }
    newState.displayShow = null
    newState.displaySuccess = false
    this.setState(newState)
  }

  addToCart = async () => {
    const newState = { ...this.state }

    const pickupLocation = newState.pickupLocations.filter(location => parseInt(location.id) === parseInt(this.state.pickupLocationId))[0]
    const basePrice = Number(pickupLocation.basePrice)
    const ticketQuantity = parseInt(this.state.ticketQuantity)
    const processingFee = Number((basePrice * ticketQuantity) * (0.1))
    const cost = ((basePrice * ticketQuantity) + processingFee)

    newState.totalCost = cost.toFixed(2)

    if (newState.inCart.length === 0) {
      newState.inCart.push(newState.displayShow)
      newState.displaySuccess = true
    }
    else {
      console.log('One event at a time.') // Display alert? One show at a time?
    }

    const cartObj = {
      pickupLocationId: this.state.pickupLocationId,
      eventId: this.state.inCart[0].id,
      ticketQuantity: this.state.ticketQuantity,
    }
    this.setState(newState)

    fetch('http://localhost:3000/pickup_parties', {
      method: 'PATCH',
      body: JSON.stringify({
        pickupLocationId: this.state.pickupLocationId,
        eventId: this.state.inCart[0].id,
        ticketQuantity: parseInt(this.state.ticketQuantity),
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    setTimeout(fetch('http://localhost:3000/pickup_parties', {
      method: 'PATCH',
      body: JSON.stringify({
        pickupLocationId: this.state.pickupLocationId,
        eventId: this.state.inCart[0].id,
        ticketQuantity: parseInt(this.state.ticketQuantity) * -1,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }), 4000)

  }

  // Cart Functions
  handleCheck = () => {
    const newState = { ...this.state }
    newState.checked = true
    this.setState(newState)
  }

  purchase = async () => {
    const cartObj = this.state.cartToSend
    fetch('http://localhost:3000/orders', {
      method: 'POST',
      body: JSON.stringify(cartObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  updatePurchaseField = (event) => {
    const newState = { ...this.state }
    const updateField = event.target.id
    const value = event.target.value
    const vE = newState.validatedElements
    let discountCode = ''

    // Checks fields via npm package validator
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
    else if (updateField === 'discountCode') {
      discountCode = value
    }
    else {
      return 'Please input valid items'
    }

    this.setState({ validatedElement: newState.validatedElements })

    // Populates cartToSend
    if (this.state.validatedElements.fName
      && this.state.validatedElements.lName
      && this.state.validatedElements.email) {

      const cTS = newState.cartToSend
      newState.validated = true

      cTS.firstName = this.state.validatedElements.fName
      cTS.lastName = this.state.validatedElements.lName
      cTS.email = this.state.validatedElements.email
      cTS.eventId = this.state.inCart[0].id
      cTS.ticketQuantity = parseInt(this.state.ticketQuantity)
      cTS.pickupLocationId = parseInt(this.state.pickupLocationId)
      cTS.totalCost = Number(this.state.totalCost)
      cTS.discountCode = discountCode

      if (this.state.validatedElements.wCFName) {
        cTS.willCallFirstName = this.state.validatedElements.wCFName
      }
      else {
        cTS.willCallFirstName = this.state.validatedElements.fName
      }

      if (this.state.validatedElements.wCLName) {
        cTS.willCallLastName = this.state.validatedElements.wCLName
      }
      else {
        cTS.willCallLastName = this.state.validatedElements.lName
      }

      this.setState({ cartToSend: newState.cartToSend })
      this.setState({ validated: newState.validated })
    }
    else {
      console.log('ERROR!')
    }
  }

  removeFromCart = () => {
    const newState = { ...this.state }
    newState.inCart = []
    newState.displaySuccess = false
    this.setState(newState)
  }

  quantityChange = (event) => {
    const newState = { ...this.state }
    newState.ticketQuantity = event.target.value

    const pickupLocation = this.state.pickupLocations.filter(location => location.id == this.state.pickupLocationId)[0]
    const basePrice = Number(pickupLocation.basePrice)
    const ticketQuantity = parseInt(newState.ticketQuantity)
    const processingFee = Number((basePrice * ticketQuantity) * (0.1))
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
                  loginClick={this.loginClick}
                  searchShows={this.searchShows}/>
                <div className='content-section'>
                  {this.state.displayStripe ? <StripeView /> : ''}
                  <div className='col-md-6 float-left'>
                    <ShowList
                      addBorder={this.addBorder}
                      displayShow={this.state.displayShow}
                      filterString={this.state.filterString}
                      shows={this.state.shows}
                      showsExpandClick={this.showsExpandClick}
                      ticketsAvailable={this.state.ticketsAvailable} />
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
                      displayQuantity={this.state.displayQuantity}
                      displayShow={this.state.displayShow}
                      displaySuccess={this.state.displaySuccess}
                      handleCheck={this.handleCheck}
                      handleSubmit={this.handleSubmit}
                      inCart={this.state.inCart}
                      pickupLocations={this.state.pickupLocations}
                      purchase={this.purchase}
                      purchaseClick={this.purchaseClick}
                      quantityChange={this.quantityChange}
                      removeFromCart={this.removeFromCart}
                      returnToShows={this.returnToShows}
                      pickupLocationId={this.state.pickupLocationId}
                      selectPickupLocationId={this.selectPickupLocationId}
                      selectTicketQuantity={this.selectTicketQuantity}
                      showsExpandClick={this.showsExpandClick}
                      showsInCart={this.state.inCart}
                      tabClicked={this.tabClicked}
                      ticketsAvailable={this.state.ticketsAvailable}
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