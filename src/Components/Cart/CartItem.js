import React from 'react'
import '../../App.css';

const CartItem = (props) => {
  const showsInCart = props.shows.filter(show => show.inCart)

  return (
    <div className='CartItem'>

      {showsInCart.map(show =>
        <li className="list-group-item highlightOnHover" onClick={props.eventExpandClick} key={show.id} id={show.id}>
          <div className="row" id={show.id}>
            <div className="col-md-4" id={show.id}>{show.displayName}</div>
            <div className="col-md-4" id={show.id} value={show.venue.displayName}></div>
            <div className="col-md-2" id={show.id} value={show.start.date}></div>
            <div className="form-group col-md-2">
              <form>
                <input type="number" className="form-control" defaultValue='1'/>
              </form>
            </div>
          </div>

        </li>)}
    </div>
  )
}

export default CartItem;