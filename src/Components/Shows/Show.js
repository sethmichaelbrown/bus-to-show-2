import React from 'react'
import '../../App.css';


const Shows = (props) => {
  const filterString = props.filterString.toLowerCase()
  const filterShows = props.shows.filter(show => show.headliner.toLowerCase().includes(filterString))


  return (
    <div className='Shows'>
      {filterShows.length > 0 ? filterShows.map(show =>
        <li className={"list-group-item highlightOnHover"} key={show.id} id={show.id}>
          <div className="row" id={show.id}>
            <div className="col-md-3 list-item-font" id={show.id}>{show.date} <br /> Saturday</div>
            <div className="col-md-7 list-item-font" id={show.id}>{show.headliner} <br />{show.venue}</div>
            <button id={show.id} onClick={props.addBorder} onMouseOver={props.showsExpandClick} type="button" className="btn btn-outline-dark col-md-2">Details</button>

          </div>

        </li>) :
        <li className="list-group-item highlightOnHover">
          <div className="row add-a-show">
            <div className="col-md-12 ">
              <h5>I find our lack of that show disturbing.</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button type="button" className="btn btn-outline-primary mt-2">Add that show</button>
            </div>
          </div>

        </li>}
    </div>
  )
}

export default Shows;
