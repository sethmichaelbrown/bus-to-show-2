import React from 'react'
import '../../App.css';
import logo from '../../Images/Logos/bts-logo-orange.png'

const LoginView = (props) => {


  return (
    <div className='LoginView mx-auto'>
      <div className="col-md-7 login-image-section float-left"></div>

      <div className='login-content'>
        <div className="col-md-12 float-right login-content-section">
          <div className='container'>
            
            <div className="login-logo">
              <img className="login-logo-img" src={logo} alt="bts-logo" width="250" height="100" />
            </div>

            <form className='justify-content-center'>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
              </div>
              <button type="submit" className="btn btn-primary">Go</button>
            </form>
          </div>
        </div>
      </div>
    </div>




  )
}

export default LoginView;
