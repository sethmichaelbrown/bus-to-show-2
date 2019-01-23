import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'
import EventList from './Components/EventList'
import EventDetailView from './Components/EventDetailView'
import Loading from './Components/Loading'
import Footer from './Components/Footer'
import SponsorBox from './Components/SponsorBox'




class App extends Component {

  state = {
    events: [{
      id: 1,
      event: 'That Content',
      location: 'Red Rocks',
      date: '01/22/19'
    },
    {
      id: 2,
      event: 'Fake Band Name',
      location: 'The Filmore',
      date: '01/22/19'
    }, {
      id: 3,
      event: 'Clever Name',
      location: 'Ogden',
      date: '01/22/19'
    }, {
      id: 4,
      event: 'Witty Title',
      location: 'Red Rocks',
      date: '01/22/19'
    },
    {
      id: 5,
      event: 'Some Shit',
      location: '1st Bank Center',
      date: '01/22/19'
    }],
    pickupLocations: [{

    }],
    displayEvent: null
  }

  // componentDidMount = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   const json = await response.json()
  //   this.setState({ events: json })
  //   console.log(this.state)
  // }

  eventExpandClick = (event) => {
    const newState = { ...this.state }
    const clickedEvent = newState.events.find(show => (parseInt(show.id) === parseInt(event.target.id)))
    newState.displayEvent = clickedEvent
    this.setState(newState)
  }

  returnToEvents = (event) => {
    const newState = { ...this.state }
    newState.displayEvent = null
    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        {this.state.events ?
          <React.Fragment>
            <Header />
            {!this.state.displayEvent ?
            <React.Fragment>
              <EventList
                events={this.state.events}
                eventExpandClick={this.eventExpandClick}/> 
                <SponsorBox />
                </React.Fragment> :
              <EventDetailView
                returnToEvents={this.returnToEvents}
                event={this.state.displayEvent} />}
            {/* <Footer /> */}
          </React.Fragment> : <Loading />}
      </div>
    );
  }
}

export default App;
