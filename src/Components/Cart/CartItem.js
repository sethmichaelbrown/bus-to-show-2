import React from 'react'
import '../../App.css';

const CartItem = (props) => {
  
  const pickupTime = props.getPickupParty(props.showsInCart[0].id, props.pickupLocationId)
  
  const ticketCost = (parseInt(props.ticketPrice) * parseInt(props.ticketQuantity)).toFixed(2)
  const pickupLocation = props.pickupLocations.find(location => parseInt(location.id) === parseInt(props.pickupLocationId))

  return (
    <div className='CartItem'>

      {props.showsInCart.map(show =>
        <li className="list-group-item highlightOnHover" onClick={props.eventExpandClick} key={show.id} id={show.id}>
          <div className="row" id={show.id}>
                <div className="col-md-2 list-item-font" id={show.id}>{show.headliner}</div>
                <div className="col-md-4 list-item-font" id={show.id}>{pickupLocation.locationName} <br/> {pickupLocation.streetAddress}</div>
                <div className="col-md-2 list-item-font" id={show.id}>{show.date}</div>
              <div className="form-group col-md-2">
                <form>
                  <input onChange={props.quantityChange}type="number" className="form-control" defaultValue={props.ticketQuantity}/>
                </form>
               {/* <span>{`$${ticketCost}`}</span> */}
              </div>
              <div className="col-md-2 list-item-font"
                id={show.id}><button onClick={props.removeFromCart} type="button" className="btn btn-sm btn-outline-danger">Remove</button>
              </div>

              <div className="col-md-6 list-item-font">
              ${((Number.parseInt(props.totalCost)*10/11)/Number.parseInt(props.ticketQuantity)).toFixed()}.00 per ticket + ${(((Number.parseInt(props.totalCost)*10/11)/Number.parseInt(props.ticketQuantity))/10).toFixed(2)} 10% processing fee
              </div>


              <div className="col-md-6 list-item-font">
              {console.log('!',pickupTime)}
              please arrive at the bus no later than {pickupTime}
              </div>
          </div>



        </li>)}
    </div>
  )
}

export default CartItem;
