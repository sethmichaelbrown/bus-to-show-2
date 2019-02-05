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
              <div className="col-md-3"><button type="button" className="btn btn-outline-light sort-btn" onClick={props.sortByDate}>Date</button></div>
              <div className="col-md-3"><button type="button" className="btn btn-outline-light sort-btn" onClick={props.sortByArtist}>Event</button></div>
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
