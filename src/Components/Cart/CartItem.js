import React from 'react'
import '../../App.css';

const CartItem = (props) => {

  return (
    <div className='CartItem'>

      {props.showsInCart.map(show =>
        <li className="list-group-item highlightOnHover" onClick={props.eventExpandClick} key={show.id} id={show.id}>
          <div className="row" id={show.id}>
            <div className="col-md-4 list-item-font" id={show.id}>{show.displayName}</div>
            <div className="col-md-2 list-item-font" id={show.id}>{show.venue.displayName}</div>
            <div className="col-md-2 list-item-font" id={show.id}>{show.start.date}</div>
            <div className="form-group col-md-2">
              <form>
                <input type="number" className="form-control" defaultValue='1'/>
              </form>
            </div>
            <div className="col-md-2 list-item-font" 
              id={show.id}><button type="button" className="btn btn-sm btn-outline-danger">Remove</button>
            </div>
          </div>

        </li>)}
    </div>
  )
}

export default CartItem;