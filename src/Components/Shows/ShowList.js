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
              <div className="col-md-3" onClick={()=>props.sortByDate()}>Date<br/>click to sort</div>
              <div className="col-md-3" onClick={()=>props.sortByArtist()}>Event<br/>click to sort</div>
              {props.sortedByDate?<div>Sorted by Show Date</div>:''}
              {props.sortedByArtist?<div>Sorted by Artist Name (weird al first)</div>: ''}
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
