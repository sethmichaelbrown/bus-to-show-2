import React from 'react'
import '../../App.css';
import Show from './Show'
import MediaQuery from 'react-responsive';

const Shows = (props) => {
  // console.log(props)

  return (
    <div className='Shows'>
      <div className='container'>
        <div className="list-group">
          <div className="list-group-item show-header">

            <div className="row">
              <div style={{ textAlign: "center" }} className="col-md-3" onClick={props.sortByDate}>
                <button type="button" className="btn btn-outline-light sort-btn"><strong>Date  </strong>
                  <i className={props.sortedByDate ? "fa fa-sort-down" : ""}></i>
                </button>

              </div>
              <div style={{ textAlign: "center" }} className="col-md-3" onClick={props.sortByArtist}>
                <button type="button" className="btn btn-outline-light sort-btn"><strong>Event  </strong>
                  <i className={props.sortedByArtist ? "fa fa-sort-down" : ""}></i>
                </button>

              </div>
              <div className="col-md-5 mb-3 ml-1">
                <form className="form-inline ml-3 my-4 my-lg-0">
                  <input onKeyUp={props.searchShows} className="form-control search-bar mr-sm-2" type="search" placeholder="Search Events or Venues..." aria-label="Search"></input>
                </form>
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
    </div>


  )
}

export default Shows;
