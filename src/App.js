import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'
import ShowList from './Components/Shows/ShowList'
import ShowDetailView from './Components/Shows/ShowDetailView'
import Loading from './Components/Loading'
import Cart from './Components/Cart/Cart'
import LoginView from './Components/LoginView/LoginView'
import Footer from './Components/Footer'
import SponsorBox from './Components/SponsorBox'
import DetailCartView from './Components/DetailCartView'



class App extends Component {

  state = {
    pickupLocations: [{

    }],
    displayShow: null,
    displaySuccess: false,
    displayWarning: false,
    loginView: false,
    displayCart: false,
    filterString: '',
    inCart: [],
    displayDetailCartView: false,
    artistDescription: null
  }


  async componentDidMount() {
    const response = await fetch('https://api.songkick.com/api/3.0/venues/591/calendar.json?per_page=100&apikey=8ViJ6NJZPEwjp3Cp')
    const json = await response.json()
    // console.log(json.resultsPage.results.event)
    this.setState({ shows: json.resultsPage.results.event })
    const newState = { ...this.state }
    const splitBandNames = newState.shows.map(show => show.displayName = show.displayName.split(' at Red Rocks')[0])
    const splitVenueName = newState.shows.map(show => show.venue.displayName = show.venue.displayName.split(' Amphitheatre')[0])
    this.setState(newState)
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
    const newState = {...this.state}
    if(event.target.id === 'cart-tab'){
      newState.displayCart = true
    }
    else{
      newState.displayCart = false
    }

    this.setState(newState)
  }

  // Show Functions
  showsExpandClick = (event) => {
    const newState = { ...this.state }
    const clickedShow = newState.shows.find(show => (parseInt(show.id) === parseInt(event.target.id)))
    newState.displayDetailCartView = true
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
    const showToCart = newState.shows.find(show => (parseInt(show.id) === parseInt(newState.displayShow.id)))
    if (showToCart.inCart) {
      newState.displayWarning = true
    }
    else {
      newState.inCart.push(showToCart)
      newState.displaySuccess = true
      newState.displayCart = true
    }
    this.setState(newState)
  }



  render() {
    return (
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
                    filterString={this.state.filterString}
                    shows={this.state.shows}
                    displayShow={this.state.displayShow}
                    showsExpandClick={this.showsExpandClick} />

                </div>
              </div>
              <div className='col-md-6 float-left'>
                {this.state.displayCart || this.state.displayShow ?
                  <DetailCartView
                    inCart={this.state.inCart}
                    tabClicked={this.tabClicked}
                    returnToShows={this.returnToShows}
                    displayShow={this.state.displayShow}
                    addToCart={this.addToCart}
                    showsExpandClick={this.showsExpandClick}
                    displaySuccess={this.state.displaySuccess}
                    displayWarning={this.state.displayWarning}
                    displayCart={this.state.displayCart}
                    showsInCart={this.state.inCart} />
                  :
                  <SponsorBox />}
                {/* {this.state.displayDetailCartView ?
                  <div className='col-md-12 float-left'>
                    {this.state.displayCart ?
                      <Cart showsInCart={this.state.inCart} />
                      :
                      <ShowDetailView
                        returnToShows={this.returnToShows}
                        displayShow={this.state.displayShow}
                        addToCart={this.addToCart}
                        showsExpandClick={this.showsExpandClick}
                        displaySuccess={this.state.displaySuccess}
                        displayWarning={this.state.displayWarning} />
                    }
                  </div>
                  : ''} */}
              </div>
            </React.Fragment> : <Loading />
        }

      </div>
    );
  }
}

export default App;