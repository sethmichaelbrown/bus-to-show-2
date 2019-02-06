import React from 'react'
import '../App.css';
import logo from '../Images/Logos/bts-logo-white.png'
import Zoom from 'react-reveal/Zoom';


const Loading = (props) => {


  return (
    <div className='Loading loading-image'>
      <div className="row">
        <div className="col-md-12 loading-header">
          <Zoom>
            <img className='render-opacity' src={logo} alt="bts-logo" height='156' width='350' />
          </Zoom>
        </div>
      </div>
    </div>

  )
}

export default Loading;
