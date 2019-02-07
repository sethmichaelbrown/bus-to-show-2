import React from 'react'
import '../../App.css';

const CartItem = (props) => {

  const pickupTime = props.getPickupParty(props.showsInCart[0].id, props.pickupLocationId)
  const pickupLocation = props.pickupLocations.find(location => parseInt(location.id) === parseInt(props.pickupLocationId))
  const stringStartTime=props.showsInCart[0].startTime.split(":").join("").slice(0,4)
  const showStartTime=Number.parseInt(props.showsInCart[0].startTime.split(":").join("").slice(0,4))-1200
  // const pickupTime=showStartTime+''
  // const pickupHour=pickupTime.length===4? pickupTime.slice(0,2) : pickupTime.slice(0,1)
  // const pickupMinute=pickupTime.length===3? pickupTime.slice(1): pickupTime.slice(2)
  // const pickupAddress=pickupLocation.locationName
  // let busstop
  // switch (pickupAddress) {
  //   case "Boulder - University Hill Cheba Hut":
  //     showStartTime%100===0? busstop=showStartTime-170: busstop=showStartTime-130;
  //     break;
  //   case "1744 E Evans Ave, Denver, CO":
  //     showStartTime%100===0? busstop=showStartTime-200: busstop=showStartTime-200;
  //     break;
  //   case "Denver - Colfax/Cap Hill Cheba Hut":
  //     showStartTime%100===0? busstop=showStartTime-170: busstop=showStartTime-130;
  //     break;
  //   case "Denver - Champa/Downtown Cheba Hut":
  //     showStartTime%100===0? busstop=showStartTime-170: busstop=showStartTime-130
  //     break;
  //   case "Denver - RiNo Epic Brewing":
  //     showStartTime%100===0? busstop=showStartTime-155: busstop=showStartTime-115
  //     break;
  //   case "Longmont - Main St. Cheba Hut":
  //     showStartTime%100===0? busstop=showStartTime-170: busstop=showStartTime-130
  //     break;
  //   case "Fort Collins - Old Town Illegal Pete's":
  //     showStartTime%100===0? busstop=showStartTime-370: busstop=showStartTime-330
  //     break;
  //   default:
  //     busstop="2 hours before showtime"
  //
  // }
  //
  // let busstopString=busstop+''
  // let busStopTime=busstopString.length===4? busstopString.slice(0,2)+ ":"+ busstopString.slice(2) : busstopString.slice(0,1) + ":" + busstopString.slice(1)

  return (
    <div className='CartItem'>

      {props.showsInCart.map(show =>
        <li className="list-group-item highlightOnHover" onClick={props.eventExpandClick} key={show.id} id={show.id}>
          <div className="row" id={show.id}>
            <div className="col-md-4 cart-item-font" id={show.id}>{show.headliner}</div>
            <div className="col-md-4 cart-item-font" id={show.id}>{pickupLocation.locationName} <br /> {pickupLocation.streetAddress}</div>
            <div className="col-md-2 cart-item-font" id={show.id}>{show.date}</div>
            <div className="form-group col-md-1 cart-item-font">{props.ticketQuantity}</div>
            <div className="col-md-1 cart-item-font"
              id={show.id}><button onClick={props.removeFromCart} type="button" className="btn btn-sm btn-danger"><strong> - </strong></button>
            </div>

            {/* <div className="col-md-6 cart-item-font">
              ${((Number(props.totalCost) * 10 / 11) / Number(props.ticketQuantity)).toFixed()}.00 per ticket + ${(((Number(props.totalCost) * 10 / 11) / Number(props.ticketQuantity)) / 10).toFixed(2)} 10% processing fee
              </div> */}

            <br />
            <br />
            <div className="col-md-12 list-item-font red-text">
              Please arrive at the bus no later than {pickupTime}
            </div>
          </div>


{console.log(props.showsInCart)}
        </li>)}
    </div>
  )
}

export default CartItem;
