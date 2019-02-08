import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class FacebookButton extends React.Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email:'',
        picture:'',
    }

    responseFacebook = async (response) => {
        this.setState({
            isLoggedIn: true,
            userID: response.id,
            name: response.name,
            email:response.email,
            picture:response.picture.data.url,
        })
        this.props.toggleLoggedIn(true)
        // const usersInfo = await fetch('https://something-innocuous.herokuapp.com/users', {
        const usersInfo = await fetch('https://something-innocuous.herokuapp.com/users', {  
                method: 'POST',
                body: JSON.stringify({
                    firstName: response.name.split(" ")[0],
                    lastName: response.name.split(" ")[1],
                    email: response.email,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
        })
        const json = await usersInfo.json()
        this.props.getReservations(json.id)
    
    }

    componentClicked = () => {
    }



  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <React.Fragment>
        <button type="button" className="btn mr-4 btn-outline-light sort-btn" onClick={()=> {this.props.toggleLoggedIn(false); this.setState({isLoggedIn: false})}}>
          <strong>Log Out</strong>
        </button>
        <div className="row inline-block" style={{ height: '50px', width: '200px' }}>
          <h6 className="mt-3 mr-3">Welcome <strong>{this.state.name.split(" ")[0]}!</strong></h6>
          <img className="round-img" src={this.state.picture} alt={this.state.name} />
        </div>
        </React.Fragment>
      )
    } else {
      fbContent = (
        <FacebookLogin
          appId="244004823142378"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fab fa-facebook-square"
           />
      )
    }
    return (
      <React.Fragment>{fbContent}</React.Fragment>
    )
  }
}
