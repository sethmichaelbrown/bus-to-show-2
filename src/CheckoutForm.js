import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {complete: false};
  }

  async submit(ev) {
    // User clicked submit
  }

  render() {
    return (
      <div className="row container">
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button type="button" class="btn btn-outline-dark" onClick={this.submit}>Send</button>
      </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);