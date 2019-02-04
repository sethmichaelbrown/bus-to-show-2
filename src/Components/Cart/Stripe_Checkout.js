import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

export default class Checkout extends React.Component {
    onToken = (token) => {
        fetch('http://localhost:3030/orders/charge', {
        method: 'POST',
        body: JSON.stringify({
            stripeEmail: token.email,
            stripeToken: token,
            amount: this.props.totalCost*100,
        }),
        headers: {
            "Content-Type": "application/json",
        },
      }).then(response => {
          console.log(response)
        // this.props.purchase(response)
        });
      };

    render() {
      return (
        // ...
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_J0CdRMCGmBlrlOiGKnGgUEwT"
          name='Bus To Show'
          amount={this.props.totalCost*100}
          currency='USD'
        >
        <button className="btn btn-outline-success">
            Purchase
        </button>
        </StripeCheckout>
      )
    }
  }