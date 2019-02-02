import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

export default class Checkout extends React.Component {
  onToken = (token) => {
    fetch('http://localhost:3000/orders/charge', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        console.log(`We are in business, ${data}`);
      });
    });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_J0CdRMCGmBlrlOiGKnGgUEwT"
        name='Bus To Show'
        description={this.props.showsInCart}
        amount={this.props.totalCost * 100}
        currency='USD'>
        <div className="col-md-6">
          <button 
            className={`btn ${this.props.displayPurchase ? 'btn-outline-success' : 'btn-secondary'}` }
            disabled={this.props.displayPurchase ? '' : 'disabled'}>Purchase</button>
        </div>
      </StripeCheckout>
    )
  }
}