import React from 'react'
import '../App.css';
import ShowDetailView from './Shows/ShowDetailView'
import Cart from './Cart/Cart'

const DetailCartView = (props) => {

  return (
    <div className='DetailCartView container'>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a onClick={props.tabClicked} className="nav-link active" id="showDetails-tab" data-toggle="tab" href="#showDetails" role="tab" aria-controls="showDetails" aria-selected="true">Show Details</a>
        </li>
        <li className="nav-item">
          <a onClick={props.tabClicked} className="nav-link" id="cart-tab" data-toggle="tab" href="#cart" role="tab" aria-controls="cart" aria-selected="false">My Cart</a>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="showDetails" role="tabpanel" aria-labelledby="showDetails-tab">
          <ShowDetailView
            returnToShows={props.returnToShows}
            displayShow={props.displayShow}
            addToCart={props.addToCart}
            showsExpandClick={props.showsExpandClick}
            displaySuccess={props.displaySuccess}
            displayWarning={props.displayWarning} />
        </div>
        <div className="tab-pane fade" id="cart" role="tabpanel" aria-labelledby="cart-tab">
          {props.inCart.length > 0 ? <Cart showsInCart={props.inCart} /> : <h1>Nothing in Cart!</h1>}
        </div>
      </div>
    </div>
  )
}

export default DetailCartView;