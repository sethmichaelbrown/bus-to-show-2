import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import './App.css';

import Header from './Components/Header'
import ShowList from './Components/Shows/ShowList'
import Loading from './Components/Loading'
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
    checked: false,

    cartToSend: {
      eventId: null,
      pickupLocationId: null,
      firstName: null,
      lastName: null,
      email: null,
      willCallFirstName: null,
      willCallLastName: null,
      ticketQuantity: null,
      totalPrice: null
    }
  }


  async componentDidMount() {
    const response = await fetch('https://something-innocuous.herokuapp.com/events')
    const shows = await response.json()
    this.setState({ shows })
    const newState = { ...this.state }
    newState.shows.map(show => show.date = show.date.split('T')[0].split('-').splice(1, 3).concat(show.date.split('T')[0].split('-')[0]).join('/'))
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
    if (newState.inCart.length === 0) {
      newState.inCart.push(newState.displayShow)
      newState.displaySuccess = true
    }
    else {
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
    // console.log(this.state)
    this.setState(newState)
    // console.log('STATE from BTN', this.state)
  }

  // Cart Functions
  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  handleCheck = (event) => {
    const newState = {...this.state}
    newState.checked = true
    this.setState(newState)  
  }

  purchaseClick = (event) => {
    const newState = { ...this.state }
    // con                              sole.log(event.target)

    newState.cartToSend.email = null
    newState.cartToSend.eventId = newState.inCart[0].id
    newState.cartToSend.firstName = null
    newState.cartToSend.lastName = null
    newState.cartToSend.pickupLocationId = newState.rideId
    newState.cartToSend.ticketQuantity = newState.ticketQuantity
    newState.cartToSend.totalPrice = null
    newState.cartToSend.willCallFirstName = null
    newState.cartToSend.willCallLastName = null
    // console.log('STATE', newState)
    // console.log('CART', newState.cartToSend)


  }

  removeFromCart = (event) => {
    // console.log(event.target.id)
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
                  searchShows={this.searchShows}
                  loginClick={this.loginClick} />
                <div className='content-section'>
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
                      returnToShows={this.returnToShows}
                      rideId={this.state.rideId}
                      selectRideId={this.selectRideId}
                      selectTicketQuantity={this.selectTicketQuantity}
                      showsExpandClick={this.showsExpandClick}
                      showsInCart={this.state.inCart}
                      tabClicked={this.tabClicked}
                      ticketQuantity={this.state.ticketQuantity}
                      validated={this.state.validated} />
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