import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

export default class Checkout extends React.Component {
  onToken = (token) => {
    fetch('https://something-innocuous.herokuapp.com/orders/charge', {
    // fetch('https://something-innocuous.herokuapp.com/orders/charge', {
      method: 'POST',
      body: JSON.stringify({
        stripeEmail: token.email,
        stripeToken: token,
        amount: this.props.totalCost * 100,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async response => {
      const json = await response.json()
      if (json.status == "succeeded") {
        this.props.purchase()
      } else {
        alert("Credit Card Declined")
      }
    })
  }


  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_J0CdRMCGmBlrlOiGKnGgUEwT"
        name='Bus To Show'
        amount={this.props.totalCost * 100}
        currency='USD'>

        <button
          onClick={()=>this.props.makePurchase()}
          className={`btn ${this.props.validated ? 'btn-outline-success' : 'btn-secondary'}`}
          disabled={this.props.validated ? '' : 'disabled'}>
          Purchase</button>
      </StripeCheckout>
    )
  }
}
