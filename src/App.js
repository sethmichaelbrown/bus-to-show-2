import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'
import EventList from './Components/Events/EventList'
import EventDetailView from './Components/Events/EventDetailView'
import Loading from './Components/Loading'
import Cart from './Components/Cart/Cart'
import LoginView from './Components/LoginView/LoginView'
import Footer from './Components/Footer'
import SponsorBox from './Components/SponsorBox'



class App extends Component {

  state = {
    shows: [],
    events: [{
      id: 1,
      event: 'That Content',
      location: 'Red Rocks',
      date: '01/22/19',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet libero venenatis libero pharetra maximus. Duis quam libero, hendrerit vel nunc nec, rutrum tempus tellus. Nunc ac ex fringilla, rutrum nulla at, luctus odio. Duis sagittis elementum pretium. Mauris aliquet augue risus, in ullamcorper enim pharetra nec. Nullam dignissim pharetra diam nec vulputate. Suspendisse ultrices sed ligula id placerat. Suspendisse pellentesque ex tortor, ac tincidunt urna pharetra ut. Aenean sed arcu sapien.',
      inCart: false
    },
    {
      id: 2,
      event: 'Fake Band Name',
      location: 'The Filmore',
      date: '01/22/19',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet libero venenatis libero pharetra maximus. Duis quam libero, hendrerit vel nunc nec, rutrum tempus tellus. Nunc ac ex fringilla, rutrum nulla at, luctus odio. Duis sagittis elementum pretium. Mauris aliquet augue risus, in ullamcorper enim pharetra nec. Nullam dignissim pharetra diam nec vulputate. Suspendisse ultrices sed ligula id placerat. Suspendisse pellentesque ex tortor, ac tincidunt urna pharetra ut. Aenean sed arcu sapien.',
      inCart: false
    }, {
      id: 3,
      event: 'Clever Name',
      location: 'Ogden',
      date: '01/22/19',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet libero venenatis libero pharetra maximus. Duis quam libero, hendrerit vel nunc nec, rutrum tempus tellus. Nunc ac ex fringilla, rutrum nulla at, luctus odio. Duis sagittis elementum pretium. Mauris aliquet augue risus, in ullamcorper enim pharetra nec. Nullam dignissim pharetra diam nec vulputate. Suspendisse ultrices sed ligula id placerat. Suspendisse pellentesque ex tortor, ac tincidunt urna pharetra ut. Aenean sed arcu sapien.',
      inCart: false
    }, {
      id: 4,
      event: 'Witty Title',
      location: 'Red Rocks',
      date: '01/22/19',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet libero venenatis libero pharetra maximus. Duis quam libero, hendrerit vel nunc nec, rutrum tempus tellus. Nunc ac ex fringilla, rutrum nulla at, luctus odio. Duis sagittis elementum pretium. Mauris aliquet augue risus, in ullamcorper enim pharetra nec. Nullam dignissim pharetra diam nec vulputate. Suspendisse ultrices sed ligula id placerat. Suspendisse pellentesque ex tortor, ac tincidunt urna pharetra ut. Aenean sed arcu sapien.',
      inCart: false
    },
    {
      id: 5,
      event: 'Some Shit',
      location: '1st Bank Center',
      date: '01/22/19',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet libero venenatis libero pharetra maximus. Duis quam libero, hendrerit vel nunc nec, rutrum tempus tellus. Nunc ac ex fringilla, rutrum nulla at, luctus odio. Duis sagittis elementum pretium. Mauris aliquet augue risus, in ullamcorper enim pharetra nec. Nullam dignissim pharetra diam nec vulputate. Suspendisse ultrices sed ligula id placerat. Suspendisse pellentesque ex tortor, ac tincidunt urna pharetra ut. Aenean sed arcu sapien.',
      inCart: false
    }],
    pickupLocations: [{

    }],
    displayEvent: null,
    displaySuccess: false,
    displayWarning: false,
    loginView: false,
    displayCart: false,
    filterString: ''
  }

  // componentDidMount = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   const json = await response.json()
  //   this.setState({ events: json })
  //   console.log(this.state)
  // }

  async componentDidMount() {
  const response = await fetch('https://api.songkick.com/api/3.0/venues/591/calendar.json?per_page=100&apikey=8ViJ6NJZPEwjp3Cp')
  const json = await response.json()
  console.log('response from FETCH GET:::', json)
  this.setState({shows: json.resultsPage.results.event})
  console.log('newState', this.state)
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

  searchEvents = (event) => {
    const newState = {...this.state}
    newState.filterString = event.target.value
    this.setState(newState)

  }

  // Event Functions
  eventExpandClick = (event) => {
    const newState = { ...this.state }
    const clickedEvent = newState.events.find(show => (parseInt(show.id) === parseInt(event.target.id)))
    if (!newState.displayEvent) {
      newState.displayEvent = clickedEvent
    }
    else {
      newState.displayEvent = null
    }
    this.setState(newState)
  }

  returnToEvents = (event) => {
    const newState = { ...this.state }
    newState.displayEvent = null
    newState.displaySuccess = false
    this.setState(newState)
  }

  addToCart = (event) => {
    const newState = { ...this.state }
    const eventToCart = newState.events.find(show => (parseInt(show.id) === parseInt(newState.displayEvent.id)))
    if (eventToCart.inCart) {
      newState.displayWarning = true
    }
    else {
      eventToCart.inCart = true
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
          this.state.events ?
            <React.Fragment>
              <Header
                searchEvents={this.searchEvents}
                loginClick={this.loginClick} />
              {!this.state.displayEvent ?
                <div className='content-section'>
                  <div className='col-md-6 float-left'>
                    <EventList
                      filterString={this.state.filterString}
                      events={this.state.events}
                      eventExpandClick={this.eventExpandClick} />
                    {/* <SponsorBox /> */}
                  </div>
                </div> :
                <div className='col-md-6 float-left'>
                  <EventDetailView
                    returnToEvents={this.returnToEvents}
                    event={this.state.displayEvent}
                    addToCart={this.addToCart}
                    eventExpandClick={this.eventExpandClick}
                    displaySuccess={this.state.displaySuccess}
                    displayWarning={this.state.displayWarning} />

                </div>}
              {this.state.displayCart ?
                <div className='col-md-6 float-right'>
                  <Cart events={this.state.events} />
                </div> : <SponsorBox />}

              {/* <Footer /> */}
            </React.Fragment> : <Loading />
        }

      </div>
    );
  }
}

export default App;
