import React, { Component } from 'react'
import '../App.css';
import ShowDetailView from './Shows/ShowDetailView'
import Cart from './Cart/Cart'

class DetailCartView extends Component {

  state = {
    artistInfo: null,
    selectedArtist: this.props.displayShow,
    // apiKey: process.ENV.API_KEY
  }


  async componentDidMount() {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=bb5f39887cc93aa41c362ba1b8bbaccd&format=json`)
    const json = await response.json()
    this.setState({ artistInfo: json.artist })
    console.log(this.state)
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
              artistInfo={this.state.artistInfo}
              returnToShows={this.props.returnToShows}
              displayShow={this.props.displayShow}
              addToCart={this.props.addToCart}
              showsExpandClick={this.props.showsExpandClick}
              displaySuccess={this.props.displaySuccess}
              displayWarning={this.props.displayWarning} />
          </div>
          <div className="tab-pane fade" id="cart" role="tabpanel" aria-labelledby="cart-tab">
            {this.props.inCart.length > 0 ?
              <Cart showsInCart={this.props.inCart}
                purchaseClick={this.props.purchaseClick} /> : <h1>Nothing in Cart!</h1>}
          </div>
        </div>
      </div>
    )
  }
}

export default DetailCartView;