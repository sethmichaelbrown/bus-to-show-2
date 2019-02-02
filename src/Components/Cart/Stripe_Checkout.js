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
          if (response.ok){
            console.log('inside Checkout response')
            this.props.purchase()
            console.log('props',this.props)
          }
        // 
        });
      };
   
   
    render() {
      return (
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_J0CdRMCGmBlrlOiGKnGgUEwT"
          name='Bus To Show'
          amount={this.props.totalCost*100}
          currency='USD'
        >
        <button 
          className={`btn ${this.props.displayPurchaseBtn ? 'btn-outline-success' : 'btn-secondary'}`}
          disabled={this.props.displayPurchaseBtn ? '' : 'disabled'}>Purchase</button>
        </StripeCheckout>
      )
    }
  }
