import React from 'react'
import '../../App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import dustin from '../../Images/dustin.jpeg'
import seth from '../../Images/seth.jpeg'
import kevin from '../../Images/kevin.jpeg'
import jake from '../../Images/jake.jpeg'
import phil from '../../Images/phil.png'
import linkedin from '../../Images/linkedin.jpg'
import Footer from '../../Components/Footer.js'

const Aboutus = (props) => {



  return (
<div>

<div className="container">
<br/>


              <div className="row justify-content-center">
                  <h1 className="list-group-heading">About the Developers</h1>
              </div>
<br/>

    <div className="row">
                  <div className="col-12 mb-5">
                    <div className="row justify-content-center align-text-center">
                    <button className="btn-lg detail-btn btn-outline-light" onClick={props.hideAboutus}>Return to HomePage</button>
                    </div>
                  </div>
                  <div className="col-12 list-group-item aboutUsPage">
                            <p className="memberParagraph" > We are a team of web development students at Galvanize in Boulder Colorado. Over the past several months we have learned dozens of technologies about how to properly build and maintain web applications and websites.
                            We started with the fundamentals of the modern front end web languages, including HTML, CSS, and JavaScript, after which we transitioned into learning how to build and run servers with Express and NodeJs. We then learned about
                            database creation and manipulation with SQL, PostGreSQL and knex, and then finally transitioned into moden front end frameworks, most importantly React, which was instrumental in this project.
                            </p>
                            <p className="memberParagraph" >We all have a wide variety of backgrounds and work experiences, including Retail Sales, Restaurant Management, Video Production and Editing, Solar Industry Management, and general Entrepreneurship.
                            </p>
                            <p className="memberParagraph" >Throughout the past several months in general, and the past two weeks with this project in particular, we have had the opportunity to work together in a large team environment. Doing so allowed us to work independently on our own areas of strength, but also
                            to collaborate with our team members, during which time we could all complement each other's weaknesses with our own personal strengths.
                            </p>
                            <p className="memberParagraph" >If you wish to read more about us, please feel free to visit our linkedin.com pages and checkout our biographies and recent projects.
                            </p>
                  </div>



    </div>


<br/>
        <div className='row justify-content-center'>
          <h1 className="list-group-heading">Linked in Profiles</h1>
        </div>
</div>
<br/>
<div className="container-fluid">
  <div className="row justify-content-center">
              <div className="col-2 list-group-item aboutUsPage person">
              <img className="linkedInLogo" src={linkedin} alt="linkedIn"/>
              <a href="https://www.linkedin.com/in/kevinziechmann/" target="blank"><span className="teamMemberName">Kevin Z. </span> </a>
              <img className="biophoto" src={kevin} alt="kevin"/>

              </div>

              <div className="col-2 list-group-item aboutUsPage person">
              <img className="linkedInLogo" src={linkedin} alt="linkedIn"/>
              <a href="https://www.linkedin.com/in/seth-brown1/" target="blank"><span className="teamMemberName">Seth B. </span></a>
              <img className="biophoto" src={seth} alt="seth"/>
              </div>

              <div className="col-2 list-group-item aboutUsPage person">
              <img className="linkedInLogo" src={linkedin} alt="linkedIn"/>
              <a href="https://www.linkedin.com/in/dustinhuth/" target="blank"><span className="teamMemberName">Dustin H.</span> </a>
              <img className="biophoto" src={dustin} alt="dustin"/>
              </div>


              <div className="col-2 list-group-item aboutUsPage person">
              <img className="linkedInLogo" src={linkedin} alt="linkedIn"/>
                <a href="https://www.linkedin.com/in/the-real-jake-mosher/" target="blank"><span className="teamMemberName">Jake M.</span> </a>
                <img className="biophoto" src={jake} alt="jake"/>
              </div>

              <div className="col-2 list-group-item aboutUsPage person">
              <img className="linkedInLogo" src={linkedin} alt="linkedIn"/>
                <a href="https://www.linkedin.com/in/phillipborgenicht/" target="blank"><span className="teamMemberName">Phillip B.</span> </a>
                <img className="biophoto" src={phil} alt="phil"/>
              </div>

  </div>
</div>





  </div>





  )
}

export default Aboutus;
