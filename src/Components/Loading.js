import React from 'react'
import '../App.css';
import spacebus from '../Images/bus-to-show-space-bus-forward.png'
import Zoom from 'react-reveal/Zoom'
import MediaQuery from 'react-responsive'


const Loading = (props) => {
let bus2 = true
let bus3 = true

  return (
    <div className=''>
      {/* // Mobile View */}
      <MediaQuery maxWidth={767}>
        <div className='Loading loading-image-mobile'>
          <div className="row">
            <div className="col-md-12 loading-header">
              <Zoom right opposite when={props.displayBus}>
                <img className='render-opacity' id="bus1" src={spacebus} alt="bts-logo" width='124' height='100' onClick={props.handleBus}/>
              </Zoom>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
            </div>
              <div className='col-4'>
                <button type="button" className="btn-sm btn-outline-light loading-btn px-auto mx-auto my-4" onClick={props.onLoad}>Ride with Us
                </button>
              </div>
            <div className="col-4">
            </div>
          </div>

        </div>
      </MediaQuery>
      {/* // End Mobile View */}
      {/* // Desktop View */}
      <MediaQuery minWidth={768}>
        <div className='Loading loading-image'>
          <div className="row">
            <div className="col-md-12 loading-header">
              <Zoom right opposite when={props.displayBus}>
                <img className='render-opacity' id="bus1" src={spacebus} alt="bts-logo" width='372' height='300' onClick={props.handleBus}/>
              </Zoom>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
            {bus2
              ?
              <Zoom right opposite when={props.displayBus}>
                <img className='pl-4 ml-4' id="bus2" src={spacebus} alt="bts-logo" width='186' height='150' onClick={props.handleBus}/>
              </Zoom>
              : ""
            }
            </div>
            <div className='col-2 px-auto mx-auto py-4 my-4'>
              <button type="button" className="btn-lg btn-outline-light loading-btn" onClick={props.onLoad}>Ride with Us
              </button>
            </div>
            <div className='col-3'>
            {bus3
              ?
              <Zoom right opposite when={props.displayBus}>
                <img className='pl-4 mr-4' id="bus3" src={spacebus} alt="bts-logo" width='186' height='150' onClick={props.handleBus}/>
              </Zoom>
              : ""
            }
            </div>
          </div>
        </div>
      </MediaQuery>
      {/* // End Desktop View */}
    </div>
  )
}

export default Loading;
