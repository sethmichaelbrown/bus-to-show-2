// Packages
import React, { Component } from 'react'
// import { BrowserRouter } from "react-router-dom"
import Validator from 'validator'
import MediaQuery from 'react-responsive'
import moment from 'moment'

// Styling
import './App.css';

// Components
import Aboutus from './Components/Aboutus/Aboutus.js'
import Header from './Components/Header'
import ShowList from './Components/Shows/ShowList'
import LoginView from './Components/LoginView/LoginView'
import Loading from './Components/Loading'
import ReservationsView from './Components/ReservationsView/ReservationsView'
// import Footer from './Components/Footer'
import SponsorBox from './Components/SponsorBox'
import DetailCartView from './Components/DetailCartView'
import BannerRotator from './Components/BannerRotator'

class App extends Component {
  // Please keep sorted alphabetically so we don't duplicate keys :) Thanks!
  state = {
    afterDiscountObj: {
      totalSavings: 0
    },
    artistDescription: null,
    artistIcon: false,
    basePrice: null,
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
      discountCode: null
    },
    checked: false,
    confirmRemove: false,
    dateIcon: true,
    displayAboutus: false,
    displayAddBtn: false,
    displayBios: false,
    displayBorder: false,
    displayBus: true,
    displayCart: false,
    displayConfirmRemove: false,
    displayDetailCartView: false,
    displayLoadingScreen: true,
    displayLoginView: false,
    displayShow: null,
    displayShowDetails: false,
    displayShowList: true,
    displayStripe: false,
    displaySuccess: false,
    displayViewCartBtn: false,
    displayWarning: false,
    displayQuantity: false,
    filterString: '',
    googleResponse: null,
    inCart: [],
    loggedIn: false,
    myReservationsView: false,
    pickupLocationId: null,
    purchasePending: false,
    purchaseSuccessful: false,
    showBios: false,
    spotifyResponse: null,
    ticketsAvailable: [],
    ticketQuantity: null,
    totalCost: 0,
    userReservations: [],
    userId: null,
    validated: false,
    validatedElements: {
      fName: null,
      lName: null,
      email: null,
      wCFName: null,
      wCLName: null
    }
  }


  async componentDidMount() {
    const response = await fetch('https://something-innocuous.herokuapp.com/events')
    const shows = await response.json()
    this.setState({ shows: shows })

    const newState = this.state.shows.sort((show1, show2) => {
      const a = new Date(show1.date)
      const b = new Date(show2.date)
      return a - b
    })

    this.setState({ shows: newState })

    const pickups = await fetch('https://something-innocuous.herokuapp.com/pickup_locations')
    const pickupLocations = await pickups.json()
    this.setState({ pickupLocations })

    const getPickupParties = await fetch('https://something-innocuous.herokuapp.com/pickup_parties')
    const pickupParties = await getPickupParties.json()
    this.setState({ pickupParties })
  }

  onLoad = () => {

    const newState = { ...this.state }
    newState.displayLoadingScreen = false
    this.setState({ displayLoadingScreen: newState.displayLoadingScreen })
  }

  handleBus = event => {

    if (event.target.id === 'bus1') {
      const newState = { ...this.state }
      newState.displayBus = !newState.displayBus
      this.setState({ displayBus: newState.displayBus })
    }
  }

  selectPickupLocationId = async event => {
    const newState = { ...this.state }
    if (parseInt(event.target.value)) {
      newState.pickupLocationId = event.target.value
      newState.displayQuantity = true
    }
    else {
      newState.displayQuantity = false
      newState.displayAddBtn = false
    }


    const statePickupId = parseInt(newState.pickupLocationId)
    const stateEventId = parseInt(newState.displayShow.id)

    const locations = newState.pickupParties
    const matchedLocation = await locations.find(location => (parseInt(location.pickupLocationId) === statePickupId) && (parseInt(location.eventId) === stateEventId))


    let numArray = []


    if (matchedLocation) {
      const capacityLessInCart = parseInt(matchedLocation.capacity) - parseInt(matchedLocation.inCart)
      numArray = [...Array(capacityLessInCart).keys()].map(i => i + 1)
      newState.ticketsAvailable = numArray
    }
    else {
      console.log('Error!!')
    }

    this.setState({
      ticketsAvailable: newState.ticketsAvailable,
      pickupLocationId: newState.pickupLocationId,
      displayQuantity: newState.displayQuantity,
      displayAddBtn: newState.displayAddBtn
    })
  }

  selectTicketQuantity = event => {

    const newState = { ...this.state }
    if (event.target.value) {
      newState.displayAddBtn = true
    }
    else {
      newState.displayAddBtn = false
    }
    newState.ticketQuantity = event.target.value
    const sPickupId = parseInt(this.state.pickupLocationId)
    const sEventId = parseInt(this.state.displayShow.id)
    const pickupParty = this.state.pickupParties.find(party => party.pickupLocationId === sPickupId && party.eventId === sEventId)
    const pickupLocation = newState.pickupLocations.filter(location => parseInt(location.id) === parseInt(this.state.pickupLocationId))[0]
    const subTotal = (Number(pickupLocation.basePrice) * Number(event.target.value))
    const total = ((Number(subTotal) * .1) + Number(subTotal)).toFixed(2)
    newState.totalCost = total

    this.setState({
      displayAddBtn: newState.displayAddBtn,
      ticketQuantity: newState.ticketQuantity,
      totalCost: newState.totalCost
    })
  }

  updateDiscountCode = event => {
    const newState = { ...this.State }
    newState.discountCode = event.target.value
    this.setState({ discountCode: newState.discountCode })
  }

  getReservations = async userId => {
    if (userId) {
      const reservations = await fetch(`https://something-innocuous.herokuapp.com/reservations/${userId}`)
      const userReservations = await reservations.json()
      const newState = { ...this.State }
      newState.userId = userId
      newState.userReservations = userReservations
      this.setState({ userId: newState.userId, userReservations: newState.userReservations })
    }
  }

  findDiscountCode = async () => {

    const ticketQuantity = this.state.ticketQuantity
    const eventId = this.state.inCart[0].id
    const response = await fetch(`http://localhost:3000/discount_codes/${this.state.discountCode}`)
    const json = await response.json()

    const result = json.filter((discountObj) => discountObj.eventsId === eventId)[0]
    const newState = { ...this.State }
    if (!result) {
      return "no match"
    }
    if (result.remainingUses <= 0) {
      return 'this code is all used up!'
    }
    const expiration = Date.parse(result.expiresOn.toLocaleString('en-US'))
    const today = Date.parse(new Date().toLocaleString('en-US', { timeZone: 'America/Denver' }))

    if (expiration < today) {

      return 'this code is expired'
    } else {

      let priceWithoutFeesPerTicket = this.state.totalCost * 10 / 11 / ticketQuantity
      let effectiveRate = (100 - result.percentage) / 100
      const afterDiscountObj = {}

      if (result.remainingUses >= ticketQuantity) {
        afterDiscountObj.timesUsed = ticketQuantity * 1
        afterDiscountObj.totalPriceAfterDiscount = priceWithoutFeesPerTicket * ticketQuantity * effectiveRate * 1.10
        afterDiscountObj.totalSavings = this.state.totalCost - priceWithoutFeesPerTicket * ticketQuantity * effectiveRate * 1.10
        afterDiscountObj.newRemainingUses = result.remainingUses - ticketQuantity

        newState.afterDiscountObj = afterDiscountObj
        newState.totalSavings = afterDiscountObj.totalSavings
        this.setState({ afterDiscountObj: newState.afterDiscountObj, totalSavings: newState.totalSavings })
      }
      if (result.remainingUses < ticketQuantity) {
        afterDiscountObj.timesUsed = result.remainingUses
        afterDiscountObj.totalSavings = this.state.totalCost - (priceWithoutFeesPerTicket * (ticketQuantity - result.remainingUses) + priceWithoutFeesPerTicket * effectiveRate * result.remainingUses) * 1.10
        afterDiscountObj.totalPriceAfterDiscount = (priceWithoutFeesPerTicket * (ticketQuantity - result.remainingUses) + priceWithoutFeesPerTicket * effectiveRate * result.remainingUses) * 1.10
        afterDiscountObj.newRemainingUses = 0

        newState.afterDiscountObj = afterDiscountObj
        this.setState({ afterDiscountObj: newState.afterDiscountObj })
      }
    }
  }

  // Header Functions
  userDashboard = () => {
    const newState = { ...this.state }
    newState.myReservationsView = !this.state.myReservationsView
    this.setState({ myReservationsView: newState.myReservationsView })
  }

  returnHome = () => {
    const newState = { ...this.state }
    newState.myReservationsView = false
    this.setState({ myReservationsView: newState.myReservationsView })
  }

  searchShows = event => {
    const newState = { ...this.state }
    newState.filterString = event.target.value
    this.setState({ filterString: newState.filterString })
  }

  loginClick = () => {
    const newState = { ...this.state }
    newState.displayLoginView = true
    this.setState({ displayLoginView: newState.displayLoginView })
  }

  responseGoogle = response => {
    const newState = { ...this.state }
    newState.googleResponse = response.profileObj
    newState.displayLoginView = false
    this.setState({ googleResponse: newState.googleResponse, displayLoginView: newState.displayLoginView })
  }

  responseSpotify = response => {
    console.log(response)
    const newState = { ...this.state }
    newState.spotifyResponse = response
    newState.displayLoginView = false
    this.setState({ googleResponse: newState.googleResponse, displayLoginView: newState.displayLoginView })
  }

  logout = () => {
    const newState = { ...this.state }
    newState.googleResponse = null
    newState.spotifyReponse = null
    this.setState({ googleResponse: newState.googleResponse, spotifyReponse: newState.spotifyReponse })
  }

  // Tab Functions
  tabClicked = event => {
    const newState = { ...this.state }
    if (event.target.id === 'cart-tab') {
      newState.displayCart = true

    }

    if (!newState.inCart.length > 0 && event.target.id === 'showDetails-tab') {
      newState.displayCart = false
    }

    if (newState.inCart.length > 0 && event.target.id === 'showDetails-tab') {
      newState.displayWarning = true
    }

    newState.displaySuccess = false
    this.setState({
      displaySuccess: newState.displaySuccess,
      displayCart: newState.displayCart,
      displayWarning: newState.displayWarning
    })
  }

  mobileTabClicked = event => {
    const id = event.target.id
    const newState = { ...this.state }

    if (id === 'cart-tab') {
      newState.displayCart = true
      newState.displayShowDetails = false
      newState.displayShowList = false
    }
    else if (id === 'showDetails-tab') {
      newState.displayCart = false
      newState.displayShowDetails = true
      newState.displayShowList = false
    }
    else {
      newState.displayCart = false
      newState.displayShowDetails = false
      newState.displayShowList = true
    }

    this.setState({
      displayCart: newState.displayCart,
      displayShowDetails: newState.displayShowDetails,
      displayShowList: newState.displayShowList
    })
  }

  // Show Functions
  showsExpandClick = event => {
    const newState = { ...this.state }
    const clickedShow = newState.shows.find(show => (parseInt(show.id) === parseInt(event.target.id)))

    newState.displayQuantity = false
    newState.displayDetailCartView = true
    newState.displaySuccess = false
    newState.displayShowDetails = true
    newState.displayShow = clickedShow
    this.setState({
      displayQuantity: newState.displayQuantity,
      displayDetailCartView: newState.displayDetailCartView,
      displaySuccess: newState.displaySuccess,
      displayShow: newState.displayShow
    })

    if (document.querySelector('#departureLocation')) {
      document.querySelector('#departureLocation').value = "Select a Departure Location..."
    }
  }


  returnToShows = () => {
    const newState = { ...this.state }

    newState.displayShow = null
    newState.displaySuccess = false
    this.setState({
      displayShow: newState.displayShow,
      displaySuccess: newState.displaySuccess
    })
  }

  handleWarning = () => {
    const newState = { ...this.state }
    newState.displayWarning = true
    this.setState({ displayWarning: newState.displayWarning })
  }

  addToCart = async () => {
    const newState = { ...this.state }
    const pickupLocation = newState.pickupLocations.filter(location => parseInt(location.id) === parseInt(this.state.pickupLocationId))[0]
    const basePrice = Number(pickupLocation.basePrice)
    const ticketQuantity = parseInt(this.state.ticketQuantity)
    const totalSavings = parseInt(this.state.afterDiscountObj.totalSavings)
    const processingFee = Number((basePrice * ticketQuantity) * (0.1))
    const cost = ((basePrice * ticketQuantity) - totalSavings + processingFee)
    newState.totalCost = cost.toFixed(2)


    const sPickupId = parseInt(this.state.pickupLocationId)
    const sEventId = parseInt(this.state.displayShow.id)
    const pickupParty = this.state.pickupParties.find(party => party.pickupLocationId === sPickupId && party.eventId === sEventId)
    const firstBusLoad = pickupParty.firstBusLoadTime
    const lastDepartureTime = moment(pickupParty.lastBusDepartureTime, 'hhmm').format('h:mm')

    this.setState({ lastDepartureTime, firstBusLoad })

    if (newState.inCart.length === 0) {
      newState.inCart.push(newState.displayShow)
      newState.displaySuccess = true
      newState.displayCart = true
    }
    else {
      newState.displayWarning = true
    }
    this.setState(newState)

    fetch('https://something-innocuous.herokuapp.com/pickup_parties', {
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

    setTimeout(fetch('https://something-innocuous.herokuapp.com/pickup_parties', {
      method: 'PATCH',
      body: JSON.stringify({
        pickupLocationId: this.state.pickupLocationId,
        eventId: this.state.inCart[0].id,
        ticketQuantity: parseInt(this.state.ticketQuantity) * -1,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }), 600000)
  }

  viewCart = () => {
    const newState = { ...this.state }
    newState.displayCart = true
    this.setState({ displayCart: newState.displayCart })
  }

  // Cart Functions
  handleCheck = () => {
    const newState = { ...this.state }
    newState.checked = true
    this.setState({ checked: newState.checked })
  }

  purchase = async () => {
    const cartObj = this.state.cartToSend
    const ordersResponse = await fetch('https://something-innocuous.herokuapp.com/orders', {
      method: 'POST',
      body: JSON.stringify(cartObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const orderJson = await ordersResponse.json()
    if (this.state.userId) {
      await fetch(`http://something-innocuous.herokuapp.com/reservations/users/${this.state.userId}`, {
        method: 'POST',
        body: JSON.stringify({ reservationId: orderJson.id }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      this.getReservations(this.state.userId)
    }

    this.setState({ purchaseSuccessful: true, purchasePending: false, inCart: [] })

  }

  updatePurchaseField = event => {
    const newState = { ...this.state }
    const updateField = event.target.id
    const value = event.target.value
    const vE = newState.validatedElements
    let discountCode = ''

    // Checks fields via npm package validator
    if (updateField === 'email' && Validator.isEmail(value) && !Validator.isEmpty(value)) {
      vE.email = value
    }
    else if (updateField === 'firstName' && Validator.isAlpha(value) && !Validator.isEmpty(value)) {
      vE.fName = value
    }
    else if (updateField === 'lastName' && Validator.isAlpha(value) && !Validator.isEmpty(value)) {
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

  toggleLoggedIn = (boolean) => {
    const newState = { ...this.state }
    newState.loggedIn = boolean
    if (boolean === false) {
      newState.myReservationsView = false
    }
    this.setState({ loggedIn: newState.loggedIn, myReservationsView: newState.myReservationsView })
  }

  removeFromCart = () => {
    const newState = { ...this.state }
    newState.purchaseSuccessful = false
    newState.displayWarning = false
    newState.displayConfirmRemove = true
    this.setState({
      displayConfirmRemove: newState.displayConfirmRemove,
      displayWarning: newState.displayWarning,
      purchaseSuccessful: newState.purchaseSuccessful
    })
  }

  confirmedRemove = () => {
    const newState = { ...this.state }
    newState.inCart = []
    newState.displaySuccess = false
    newState.displayConfirmRemove = false
    newState.displayWarning = false
    newState.displayQuantity = false
    newState.displayAddBtn = false

    this.setState({
      inCart: newState.inCart,
      displaySuccess: newState.displaySuccess,
      displayConfirmRemove: newState.displayConfirmRemove,
      displayWarning: newState.displayWarning,
      displayQuantity: newState.displayQuantity,
      displayAddBtn: newState.displayAddBtn,
    })
  }

  closeAlert = () => {
    const newState = { ...this.state }
    newState.displayConfirmRemove = false
    newState.displayWarning = false
    this.setState({ displayConfirmRemove: newState.displayConfirmRemove, displayWarning: newState.displayWarning })
  }

  quantityChange = event => {
    const newState = { ...this.state }
    newState.ticketQuantity = event.target.value

    const pickupLocation = this.state.pickupLocations.filter(location => parseInt(location.id) === parseInt(this.state.pickupLocationId))[0]
    const basePrice = Number(pickupLocation.basePrice)
    const ticketQuantity = parseInt(newState.ticketQuantity)
    const processingFee = Number((basePrice * ticketQuantity) * (0.1))
    const cost = ((basePrice * ticketQuantity) + processingFee)
    newState.totalCost = cost.toFixed(2)
    this.setState({ ticketQuantity: newState.ticketQuantity, totalCost: newState.totalCost })
  }

  // addBorder = () => {
  //   const newState = { ...this.state }
  //   newState.displayBorder = true
  //   this.setState(newState)

  //   setTimeout(() => {
  //     const newState = { ...this.state }
  //     newState.displayBorder = false
  //     this.setState(newState)
  //   }, 500)
  // }

  sortByArtist = () => {
    let newState = this.state.shows.sort((show1, show2) => {
      let a = show1.headliner.toLowerCase().split(" ").join("")
      let b = show2.headliner.toLowerCase().split(" ").join("")
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    })
    this.setState({ shows: newState, artistIcon: true, dateIcon: false })
  }

  sortByDate = () => {
    let newState = this.state.shows.sort((show1, show2) => {
      let a = new Date(show1.date)
      let b = new Date(show2.date)
      return a - b

    })
    this.setState({ shows: newState, artistIcon: false, dateIcon: true })
  }

  makePurchase = event => {
    const newState = { ...this.state }
    event.preventDefault()
    newState.displayQuantity = false
    newState.displayAddBtn = false
    newState.purchasePending = true

    this.setState({
      purchasePending: newState.purchasePending,
      displayQuantity: newState.displayQuantity,
      displayAddBtn: newState.displayAddBtn
    })
  }

  dismissBios = () => {
    this.setState({ showBios: false })
  }

  readBios = () => {
    this.setState({ displayBios: true })
  }

  hideAboutus = () => {
    this.setState({ displayAboutus: false })
  }

  showAboutus = () => {
    this.setState({ displayAboutus: true })
  }

  mobileShowsExpandClick = event => {
    const newState = { ...this.state }
    const clickedShow = newState.shows.find(show => (parseInt(show.id) === parseInt(event.target.id)))

    newState.displayShow = clickedShow
    // newState.displayQuantity = false
    // newState.displaySuccess = false
    newState.displayShowDetails = true
    newState.displayShowList = false
    // newState.displayCart = false

    this.setState({
      displayShow: newState.displayShow,
      displayQuantity: newState.displayQuantity,
      displayDetailCartView: newState.displayDetailCartView,
      displaySuccess: newState.displaySuccess,
      displayShowList: newState.displayShowList,
    })
  }

  render() {
    return (

      <React.Fragment>
        <div className="App">
          {/* Desktop View */}
          <MediaQuery minWidth={800}>
            {this.state.displayLoadingScreen ?
              <Loading
                onLoad={this.onLoad}
                handleBus={this.handleBus} /> : ""}

            <Header
              getReservations={this.getReservations}
              googleResponse={this.state.googleResponse}
              loggedIn={this.state.loggedIn}
              loginClick={this.loginClick}
              logout={this.logout}
              myReservationsView={this.state.myReservationsView}
              spotifyResponse={this.state.spotifyResponse}
              toggleLoggedIn={this.toggleLoggedIn}
              userDashboard={this.userDashboard} />

            {this.state.displayLoginView ?
              <LoginView
                responseGoogle={this.responseGoogle}
                responseSpotify={this.responseSpotify} />
              :
              this.state.myReservationsView ?
                <ReservationsView
                  returnHome={this.returnHome}
                  reservations={this.state.userReservations}
                  addBorder={this.addBorder}
                  displayShow={this.state.displayShow}
                  filterString={this.state.filterString}
                  showsExpandClick={this.showsExpandClick} />
                :

                this.state.displayAboutus ?
                  <Aboutus
                    dismissBios={this.dismissBios}
                    readBios={this.readBios}
                    displayBios={this.state.displayBios}
                    hideAboutus={this.hideAboutus} />
                  :
                  this.state.shows ?
                    <React.Fragment>

                      <div className='content-section pt-4'>
                        <div className='col-md-6 float-right' >
                          {this.state.displayShow ? '' :
                            <BannerRotator displayShow={this.state.displayShow} />}
                          {this.state.displayCart || this.state.displayShow ?
                            <DetailCartView
                              afterDiscountObj={this.state.afterDiscountObj}
                              closeAlert={this.closeAlert}
                              addToCart={this.addToCart}
                              checked={this.state.checked}
                              confirmedRemove={this.confirmedRemove}
                              displayAddBtn={this.state.displayAddBtn}
                              displayBorder={this.state.displayBorder}
                              displayCart={this.state.displayCart}
                              displayConfirmRemove={this.state.displayConfirmRemove}
                              displayQuantity={this.state.displayQuantity}
                              displayShow={this.state.displayShow}
                              displaySuccess={this.state.displaySuccess}
                              displayViewCartBtn={this.state.displayViewCartBtn}
                              displayWarning={this.state.displayWarning}
                              filterString={this.state.filterString}
                              findDiscountCode={this.findDiscountCode}
                              firstBusLoad={this.state.firstBusLoad}
                              getPickupParty={this.getPickupParty}
                              handleCheck={this.handleCheck}
                              handleSubmit={this.handleSubmit}
                              inCart={this.state.inCart}
                              lastDepartureTime={this.state.lastDepartureTime}
                              makePurchase={this.makePurchase}
                              pickupLocations={this.state.pickupLocations}
                              pickupLocationId={this.state.pickupLocationId}
                              pickupParties={this.state.pickupParties}
                              purchase={this.purchase}
                              purchaseClick={this.purchaseClick}
                              purchasePending={this.state.purchasePending}
                              purchaseSuccessful={this.state.purchaseSuccessful}
                              quantityChange={this.quantityChange}
                              removeFromCart={this.removeFromCart}
                              returnToShows={this.returnToShows}
                              selectPickupLocationId={this.selectPickupLocationId}
                              selectTicketQuantity={this.selectTicketQuantity}
                              shows={this.state.shows}
                              showsExpandClick={this.showsExpandClick}
                              showsInCart={this.state.inCart}
                              tabClicked={this.tabClicked}
                              ticketsAvailable={this.state.ticketsAvailable}
                              ticketQuantity={this.state.ticketQuantity}
                              timeLeftInCart={this.state.timeLeftInCart}
                              totalCost={this.state.totalCost}
                              updateDiscountCode={this.updateDiscountCode}
                              updatePurchaseField={this.updatePurchaseField}
                              validated={this.state.validated}
                              validatedElements={this.state.validatedElements} />
                            :
                            <SponsorBox
                              showAboutus={this.showAboutus}
                              displayAboutus={this.state.displayAboutus} />}
                        </div>

                        <div className='col-md-6 float-left'>
                          <ShowList
                            addBorder={this.addBorder}
                            displayShow={this.state.displayShow}
                            filterString={this.state.filterString}
                            handleWarning={this.handleWarning}
                            inCart={this.state.inCart}
                            searchShows={this.searchShows}
                            shows={this.state.shows}
                            showsExpandClick={this.showsExpandClick}
                            sortByArtist={this.sortByArtist}
                            sortByDate={this.sortByDate}
                            sortedByArtist={this.state.artistIcon}
                            sortedByDate={this.state.dateIcon}
                            ticketsAvailable={this.state.ticketsAvailable} />
                        </div>
                      </div>
                    </React.Fragment> : <Loading />
            }
          </MediaQuery>
          {/* End Desktop View */}

          {/* Mobile View */}
          <MediaQuery maxWidth={799}>
            <div className="mobile-view">
              {this.state.displayLoadingScreen ?
                <Loading
                  onLoad={this.onLoad}
                  handleBus={this.handleBus} /> :

                this.state.shows ?
                  <div className="mobile-content">
                    <Header
                      getReservations={this.getReservations}
                      googleResponse={this.state.googleResponse}
                      loggedIn={this.state.loggedIn}
                      loginClick={this.loginClick}
                      logout={this.logout}
                      myReservationsView={this.state.myReservationsView}
                      spotifyResponse={this.state.spotifyResponse}
                      toggleLoggedIn={this.toggleLoggedIn}
                      userDashboard={this.userDashboard} />

                    <div className="mobile row">
                      <div className="col-sm-12">
                        <DetailCartView
                          addBorder={this.addBorder}
                          addToCart={this.addToCart}
                          afterDiscountObj={this.state.afterDiscountObj}
                          checked={this.state.checked}
                          closeAlert={this.closeAlert}
                          confirmedRemove={this.confirmedRemove}
                          displayAddBtn={this.state.displayAddBtn}
                          displayBorder={this.state.displayBorder}
                          displayCart={this.state.displayCart}
                          displayConfirmRemove={this.state.displayConfirmRemove}
                          displayQuantity={this.state.displayQuantity}
                          displayShow={this.state.displayShow}
                          displayShowDetails={this.state.displayShowDetails}
                          displayShowList={this.state.displayShowList}
                          displaySuccess={this.state.displaySuccess}
                          displayViewCartBtn={this.state.displayViewCartBtn}
                          displayWarning={this.state.displayWarning}
                          filterString={this.state.filterString}
                          findDiscountCode={this.findDiscountCode}
                          firstBusLoad={this.state.firstBusLoad}
                          getPickupParty={this.getPickupParty}
                          handleCheck={this.handleCheck}
                          handleSubmit={this.handleSubmit}
                          handleWarning={this.handleWarning}
                          inCart={this.state.inCart}
                          lastDepartureTime={this.state.lastDepartureTime}
                          makePurchase={this.makePurchase}
                          mobileShowsExpandClick={this.mobileShowsExpandClick}
                          mobileTabClicked={this.mobileTabClicked}
                          pickupLocationId={this.state.pickupLocationId}
                          pickupLocations={this.state.pickupLocations}
                          pickupParties={this.state.pickupParties}
                          purchase={this.purchase}
                          purchaseClick={this.purchaseClick}
                          purchasePending={this.state.purchasePending}
                          purchaseSuccessful={this.state.purchaseSuccessful}
                          quantityChange={this.quantityChange}
                          removeFromCart={this.removeFromCart}
                          returnToShows={this.returnToShows}
                          searchShows={this.searchShows}
                          selectPickupLocationId={this.selectPickupLocationId}
                          selectTicketQuantity={this.selectTicketQuantity}
                          shows={this.state.shows}
                          showsInCart={this.state.inCart}
                          sortByArtist={this.sortByArtist}
                          sortByDate={this.sortByDate}
                          sortedByArtist={this.state.artistIcon}
                          sortedByDate={this.state.dateIcon}
                          ticketQuantity={this.state.ticketQuantity}
                          ticketsAvailable={this.state.ticketsAvailable}
                          timeLeftInCart={this.state.timeLeftInCart}
                          totalCost={this.state.totalCost}
                          updateDiscountCode={this.updateDiscountCode}
                          updatePurchaseField={this.updatePurchaseField}
                          validated={this.state.validated}
                          validatedElements={this.state.validatedElements} />
                      </div>
                    </div>
                  </div>
                  : <h1>Mobile View Error</h1>}
            </div>
          </MediaQuery>
          {/* End Mobile View */}

        </div>
      </React.Fragment>

    )
  }
}

export default App;
