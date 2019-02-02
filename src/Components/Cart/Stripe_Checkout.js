import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

export default class Checkout extends React.Component {
    onToken = (token) => {
        fetch('http://localhost:3000/orders/charge', {
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
        response.json().then(data =>data);
        });
      };
   
    // ...
   
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
