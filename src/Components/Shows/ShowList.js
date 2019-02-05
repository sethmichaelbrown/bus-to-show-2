import React from 'react'
import '../../App.css';
import Show from './Show'

const Shows = (props) => {

  return (
    <div className='Shows'>
      <div className='container'>
        <div className="list-group">
          <div className="list-group-item show-header">
            <div className="row">
              <div className="col-md-3" onClick={props.sortByDate}>
                <button type="button" className="btn btn-outline-light sort-btn">Date</button>
              </div>
              <div className="col-md-3" onClick={props.sortByArtist}>
                <button type="button" className="btn btn-outline-light sort-btn">Event</button>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
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
