import React from 'react'
import '../../App.css';

const CartItem = (props) => {
  // console.log('CI', props)

  // const ticketCost = (parseInt(props.ticketPrice) * parseInt(props.ticketQuantity)).toFixed(2)
  const pickupLocation = props.pickupLocations.find(location => parseInt(location.id) === parseInt(props.pickupLocationId))
  const stringStartTime=props.showsInCart[0].startTime.split(":").join("").slice(0,4)
  const showStartTime=Number.parseInt(props.showsInCart[0].startTime.split(":").join("").slice(0,4))-1200
  const pickupTime=showStartTime+''
  const pickupHour=pickupTime.length===4? pickupTime.slice(0,2) : pickupTime.slice(0,1)
  const pickupMinute=pickupTime.length===3? pickupTime.slice(1): pickupTime.slice(2)
  const pickupAddress=pickupLocation.locationName
  let busstop
  switch (pickupAddress) {
    case "UNIV. HILL CHEBA HUT":
      showStartTime%100===0? busstop=showStartTime-170: busstop=showStartTime-130;
      break;
    case "DU ILLEGAL PETE’S":
      showStartTime%100===0? busstop=showStartTime-200: busstop=showStartTime-200;
      break;
    case "COLFAX CAP HILL CHEBA HUT":
      showStartTime%100===0? busstop=showStartTime-170: busstop=showStartTime-130;
      break;
    case "CHAMPA DOWNTOWN CHEBA HUT":
      showStartTime%100===0? busstop=showStartTime-170: busstop=showStartTime-130
      break;
    case "RiNo EPIC BREWING":
      showStartTime%100===0? busstop=showStartTime-155: busstop=showStartTime-115
      break;
    case "MAIN ST. CHEBA HUT":
      showStartTime%100===0? busstop=showStartTime-170: busstop=showStartTime-130
      break;
    case "OLD TOWN ILLEGAL PETE’S":
      showStartTime%100===0? busstop=showStartTime-370: busstop=showStartTime-330
      break;
    default:
      busstop="2 hours before showtime"

  }

  let busstopString=busstop+''
  let busStopTime=busstopString.length===4? busstopString.slice(0,2)+ ":"+ busstopString.slice(2) : busstopString.slice(0,1) + ":" + busstopString.slice(1)

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
              {console.log(busstop)}
              please arrive at the bus no later than {busStopTime}
              </div>
          </div>



        </li>)}
    </div>
  )
}

export default CartItem;
