import React from 'react'
import '../../App.css'
import moment from 'moment'
import MediaQuery from 'react-responsive'
import { GoogleLogin } from 'react-google-login'
import SpotifyLogin from 'react-spotify-login'
import { spotifyClientId, redirectUri, googleClientId } from './settings'

const LoginView = (props) => {



  return (
    <div className='row container login-flex'>
      <div className="col-md-8">
        <p>Image Section</p>
      </div>
      <div className="col-md-4">
        <div className="googleLoginBtn">
          <GoogleLogin
            clientId={googleClientId}
            redirectUri={redirectUri}
            buttonText="Login with Google"
            onSuccess={props.responseGoogle}
            onFailure={props.responseGoogle} />
        </div>
        <div className="spotifyLoginBtn">
          <SpotifyLogin
            clientId={spotifyClientId}
            redirectUri={redirectUri}
            onSuccess={props.responseSpotify}
            onFailure={props.responseSpotify} />
        </div>
      </div>
    </div>
  )

}

export default LoginView