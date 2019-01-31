import React from 'react'
import '../../App.css';
import Show from './Show'

const Shows = (props) => {

  return (
    <div className='Shows'>
      <div className='container'>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-3">Date</div>
              <div className="col-md-7">Event</div>
              <div className="col-md-2"></div>
            </div>
          </div>
          <ul className="list-group">

            {props.shows ?
              <Show
                addBorder={props.addBorder}
                displayShow={props.displayShow}
                filterString={props.filterString}
                shows={props.shows}
                showsExpandClick={props.showsExpandClick} /> : ''}
          </ul>

        </div>
      </div>
    </div>


  )
}

export default Shows;
