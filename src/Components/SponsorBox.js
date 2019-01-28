import React from 'react'
import '../App.css';
import logo from '../Images/Logos/bts-logo-orange.png'

const SponsorBox = (props) => {


  return (
    <div className='SponsorBox container mt-2'>
      <div className="row">
        <div className="col-md-6 col-centered offset-md-3">
          <img className='' src={logo} alt="bts-logo" width="303" height="130" />
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <p>
              The concept for Bus to Show was conceived by our founder several years in the future, and then planted in the mind of his younger self (2007) through inter-temporal-telepathy. Bus to Show is, at its core, designed to save the lives of a few future political and spiritual leaders, who would otherwise have been killed in their youth by impaired drivers on their way home from concerts. At the same time, Bus to Show works to reduce the amount of fuel consumption that results from events, which, in turn, will delay the destruction of the Earth long enough for the saved leaders to come of-age and implement their plans for reaching a sustained equilibrium between industry and environment.
              <br/>
              <br/>
              Bus to Show is a Colorado Nonprofit Corporation with the ability to accept 501(c)(3) tax-exempt donations through its fiscal sponsor partnership with The Nowak Society.
          </p>
          </div>

        </div>
      </div>
    </div>

  )
}

export default SponsorBox;
