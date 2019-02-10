import React from 'react'
import moment from 'moment'
import '../../App.css';

const CartItem = (props) => {
  console.log('CI', props)

  const pickupTime = props.lastDepartureTime
  const firstBusLoad = props.firstBusLoad
  const pickupLocation = props.pickupLocations.find(location => parseInt(location.id) === parseInt(props.pickupLocationId))

  let time1 = pickupTime.split(':')
  let time2 = time1[1].split(' PM')[0] - 15
  let time3 = time1[0].concat(time2)
  if (time2 < 0) {
    time2 = 45
    time3 = [(time3.split('-')[0] - 1)].concat(time2).join('')
  }

  const defaultFirstBus = moment(time3, 'hmm').format('h:mm')

  return (
    <div className='CartItem'>
      {props.displayConfirmRemove ? <div className="alert alert-danger" role="alert">
        Are you sure you want to remove item from cart?
        <button onClick={props.confirmedRemove} type="button" className="btn btn-danger ml-1">Remove</button>
        <button onClick={props.closeAlert} type="button" className="btn btn-outline-secondary ml-1">Cancel</button>
      </div> : ''}
      {props.showsInCart.map(show =>
        <li className="list-group-item highlightOnHover" onClick={props.eventExpandClick} key={show.id} id={show.id}>
          <div className="row" id={show.id}>
            <div className="col-md-4 cart-item-font" id={show.id}>{show.headliner} <br /> at {show.venue.split(' Amphitheatre')[0]} </div>
            <div className="col-md-4 cart-item-font" id={show.id}>{pickupLocation.locationName} <br /> {pickupLocation.streetAddress}</div>
            <div className="col-md-2 cart-item-font" id={show.id}>{show.date}</div>
            <div className="form-group col-md-1 cart-item-font">{props.ticketQuantity}</div>
            <div className="col-md-1 cart-item-font"
              id={show.id}><button onClick={props.removeFromCart} type="button" className="btn-sm btn-outline-danger remove-border"><strong> X </strong></button>
            </div>
            
            <br />
            <br />

            <div className="row mt-3">
              <div className="col-md-12 list-item-font">
                Bus arrives around {firstBusLoad ?
                  firstBusLoad : defaultFirstBus} PM
              </div>
              <div className="col-md-12 list-item-font red-text mt-2">
                Please arrive at the bus no later than {pickupTime}
              </div>
            </div>
          </div>
        </li>)}
    </div>
  )
}

export default CartItem;
