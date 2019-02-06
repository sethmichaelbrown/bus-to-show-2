import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class oAuth extends React.Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email:'',
        picture:'',
    }
    
    responseFacebook = response => {
        console.log(response)
    }

    componentClicked = () => console.log('FB clicked')

    render() {
        let fbContent
        if(this.state.isLoggedIn){

        } else{
            fbContent = <FacebookLogin
            appId="244004823142378"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
        }
        return (
            <div></div>
        )
      }
    }