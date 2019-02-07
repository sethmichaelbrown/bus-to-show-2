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
    
    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.id,
            name: response.name,
            email:response.email,
            picture:response.picture.data.url,
        })
        fetch('http://localhost:3000/users', {
                method: 'POST',
                body: JSON.stringify({
                    firstName: response.name.split(" ")[0],
                    lastName: response.name.split(" ")[1],
                    email: response.email,
                    isWaiverSigned: false,
                    userType: 'standard',
                    preferredLocation: "",
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    }

    componentClicked = () => {
    }
    

    render() {
        let fbContent;

        if(this.state.isLoggedIn){
            fbContent = (
                    <div className="row inline-block" style={{height:'50px', width:'200px'}}>
                        <h5 className="mt-3 mr-3">Welcome {this.state.name.split(" ")[0]}</h5>
                        <img className="round-img" src={this.state.picture} alt={this.state.name}/>
                    </div>
            )
        } else{
            fbContent = (
                <FacebookLogin
                style={{height: '50px'}}
                appId="244004823142378"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            )
        }
        return (
            <React.Fragment>{fbContent}</React.Fragment>
        )
      }
    }