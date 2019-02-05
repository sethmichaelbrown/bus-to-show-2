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
              <div className="col-md-3" onClick={()=>props.sortByDate()}>Date<br/>click to sort</div>
              <div className="col-md-3" onClick={()=>props.sortByArtist()}>Event<br/>click to sort</div>
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={500}>
            <div className="row text-center">
              <div className="col-md-4 ">Date /</div>
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
