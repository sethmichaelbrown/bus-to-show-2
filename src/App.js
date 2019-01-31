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
    displayBorder: false
  }


  async componentDidMount() {
    const response = await fetch('https://something-innocuous.herokuapp.com/events')
    const shows = await response.json()
    this.setState({ shows })

    const newState = { ...this.state }
    newState.shows.map(show => show.date = show.date.split('T')[0].split('-').splice(1, 3).concat(show.date.split('T')[0].split('-')[0]).join('/'))
    this.setState(newState)
    console.log(this.state.inCart)
    // console.log('newState', this.state)
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
    if (!newState.inCart.length) {
      newState.inCart.push(newState.displayShow)
      newState.displaySuccess = true
    }
    else {
      const cartIds = newState.inCart.map(show => show.id)
      const compareIds = cartIds.find(id => id == newState.displayShow.id)
      if (!compareIds) {
        newState.inCart.push(newState.displayShow)
      }
      else {
        console.log(event.target)
      }
    }
    // console.log(this.state)
    this.setState(newState)
  }

  // Cart Functions
  purchaseClick = (event) => {
    const newState = { ...this.state }
    newState.cart = newState.inCart
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
    }, 2000)
    
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
                      displayBorder={this.state.displayBorder}
                      displayCart={this.state.displayCart}
                      displayShow={this.state.displayShow}
                      displaySuccess={this.state.displaySuccess}
                      displayWarning={this.state.displayWarning}
                      inCart={this.state.inCart}
                      pickupLocations={this.pickupLocations}
                      purchaseClick={this.purchaseClick}
                      returnToShows={this.returnToShows}
                      showsExpandClick={this.showsExpandClick}
                      showsInCart={this.state.inCart}
                      tabClicked={this.tabClicked} />
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