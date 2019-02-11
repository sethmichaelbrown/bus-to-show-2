import React from 'react'
import '../../App.css';
import Show from './Show'
import MediaQuery from 'react-responsive';

const ShowList = (props) => {
  console.log('showlist', props)

  return (
    <div className='Shows'>
      <div className='container'>
        <div className="list-group">
          <div className="list-group-item show-header">

            <div className="row show-list-flex">

              <div className="col-3 mb-3" onClick={props.sortByDate}>
                <button type="button" className="btn btn-outline-light sort-btn">
                  <strong>Date  </strong>
                  <i className={props.sortedByDate ? "fa fa-sort-down" : ''}></i>
                </button>

              </div>

              <div className="col-3 mb-3" onClick={props.sortByArtist}>
                <button type="button" className="btn btn-outline-light sort-btn">
                  <strong>Event  </strong>
                  <i className={props.sortedByArtist ? "fa fa-sort-down" : ''}></i>
                </button>

              </div>

              <div className="col-6 mb-3" >
                <form className="form-inline float-right">
                  <input onKeyUp={props.searchShows} className="form-control search-bar" type="search" placeholder="Search..." aria-label="Search"></input>
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
                      handleWarning={props.handleWarning}
                      inCart={props.inCart}
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
                          handleWarning={props.handleWarning}
                          inCart={props.inCart}
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

export default ShowList;
