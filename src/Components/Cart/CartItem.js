import React from 'react'
import MediaQuery from 'react-responsive'
import moment from 'moment'
import '../../App.css';

const CartItem = (props) => {
  // console.log('CI', props)

  // const pickupTime = props.lastDepartureTime
  // const firstBusLoad = props.firstBusLoad
  // const pickupLocation = props.pickupLocations.find(location => parseInt(location.id) === parseInt(props.pickupLocationId))
  // console.log('pickupTime', pickupTime)
  // console.log('momentstuff', moment(pickupTime, 'hhmm a').minute(30))
  // const defaultFirstBus = moment((moment(pickupTime, 'hhmm a').format('kkmm')-30), 'hhmm a').format('hh:mm a')

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
  console.log('showsINcart--------', props.showsInCart[0])
  const defaultFirstBus = moment(time3, 'hmm').format('h:mm')
  return (
    <div className='CartItem'>
      <MediaQuery minWidth={800}>
        {props.showsInCart.map(show =>
          <li className="list-group-item highlightOnHover" key={show.id} id={show.id}>
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
                  First bus loads around {firstBusLoad ?
                    firstBusLoad : defaultFirstBus}
                </div>
                <div className="col-md-12 list-item-font red-text mt-2">
                  Last bus departs at: {pickupTime}
                </div>
              </div>
            </div>
          </li>)}
      </MediaQuery>
      <MediaQuery maxWidth={799}>
      <div id="mobileCartTickets">
      {props.showsInCart.map(show =>
        <li className="list-group-item highlightOnHover" key={show.id} id={show.id}>
          <div className="row border-top border-left border-right border-secondary bg-light p-2" id={show.id}>
            <div className="col-sm-9 cart-item-font">{props.ticketQuantity} Roundtrip Bus Spot(s) on {moment(show.date, "MM-DD-YYYY").format("dddd")}, {show.date}
            </div>

          </div>
          <div className="row border-bottom border-left border-right border-secondary bg-light p-2">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-10 cart-item-font" id={show.id}>
                  <div className="row"> For: {show.headliner} at {show.venue.split(' Amphitheatre')[0]}
                  </div>
                  <div className="row" id={show.id}>Departing From: {pickupLocation.locationName} {pickupLocation.streetAddress}
                  </div>
                </div>
                <div className="col-sm-2 cart-item-font" id={show.id}>
                  <button onClick={props.removeFromCart} type="button" className="btn-sm btn-outline-danger"> Remove </button>
                </div>
              </div>
            </div>
          </div>
            <div className="row mt-3">
              <div className="col-md-12 list-item-font">
                First bus loads around {firstBusLoad ?
                  firstBusLoad : defaultFirstBus}
              </div>
              <div className="col-md-12 list-item-font red-text mt-2">
                Last bus departs at: {pickupTime}
              </div>
            </div>

        </li>)}
      </div>
      </MediaQuery>
    </div>
  )
}

export default CartItem;
