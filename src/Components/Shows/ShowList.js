import React from 'react'
import '../../App.css';
import Show from './Show'
import MediaQuery from 'react-responsive';

const Shows = (props) => {

  return (
    <div className='Shows'>
      <div className='container'>
        <div className="list-group">
          <div className="list-group-item show-header">
            <MediaQuery minWidth={500}>

              <div className="row">
              <div style={{textAlign:"center"}} className="col-md-3" onClick={props.sortByDate}>
              <button type="button" className="btn btn-outline-light sort-btn"><strong>Date  </strong>
              <i className={ props.sortedByDate? "fa fa-sort-down": ""}></i>
              </button>

              </div>
              <div style={{textAlign:"center"}} className="col-md-3" onClick={props.sortByArtist}>
              <button type="button" className="btn btn-outline-light sort-btn"><strong>Event  </strong>
              <i className={props.sortedByArtist? "fa fa-sort-down": ""}></i>
              </button>

              </div>
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
              </div>





            </MediaQuery>
            <MediaQuery maxWidth={500}>
            <div className="row text-center">
              <div className="col-md-4 ">Date </div>

              <div className="col-md-8">Event</div>

              </div>
            </MediaQuery>
          </div>

          <ul className="list-group">

            {props.shows ?
              <div>
              <MediaQuery minWidth={768}>
              <Show
                addBorder={props.addBorder}
                displayShow={props.displayShow}
                filterString={props.filterString}
                shows={props.shows}
                showsExpandClick={props.showsExpandClick} />
              </MediaQuery>
              <MediaQuery maxWidth={768}>
              <div className="row text-center">
                <div className="col-md-12">
                <Show
                  addBorder={props.addBorder}
                  displayShow={props.displayShow}
                  filterString={props.filterString}
                  shows={props.shows}
                  showsExpandClick={props.showsExpandClick} />
                </div>
              </div>
              </MediaQuery>
              </div>
                : ''}
          </ul>

        </div>
      </div>
    </div>


  )
}

export default Shows;
