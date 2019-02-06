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

              <div className="row">
              <div style={{textAlign:"center"}} className="col-md-3" onClick={props.sortByDate}>
              <button type="button" className="btn btn-outline-light sort-btn"><strong>Date</strong></button>
              <i className={props.sortedByDate? "fa fa-spinner fa-spin": ''}></i>
              </div>
              <div style={{textAlign:"center"}} className="col-md-3" onClick={props.sortByArtist}>
              <button type="button" className="btn btn-outline-light sort-btn"><strong>Event</strong></button>
              <i className={props.sortedByArtist? "fa fa-spinner fa-spin": ''}></i>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
              </div>
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
