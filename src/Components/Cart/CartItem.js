import React from 'react'
import '../../App.css';

const CartItem = (props) => {
  // console.log('CI', props)
  
  // const ticketCost = (parseInt(props.ticketPrice) * parseInt(props.ticketQuantity)).toFixed(2)
  const pickupLocation = props.pickupLocations.find(location => parseInt(location.id) === parseInt(props.rideId))

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
                <input type="number" className="form-control" defaultValue={props.ticketQuantity}/>
              </form>
               {/* <span>{`$${ticketCost}`}</span> */}
            </div>
            <div className="col-md-1 list-item-font" 
              id={show.id}><button type="button" className="btn btn-sm btn-outline-danger">Remove</button>
            </div>
          </div>

        </li>)}
    </div>
  )
}

export default CartItem;