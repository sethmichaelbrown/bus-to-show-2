import React from 'react'
import '../../App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import dustin from '../../Images/dustin.jpeg'
import seth from '../../Images/seth.jpeg'
import kevin from '../../Images/kevin.jpeg'
import jake from '../../Images/jake.jpeg'
import phil from '../../Images/phil.png'

const Aboutus = (props) => {



  return (






    <div className="container ">


          <div className="row justify-content-center">
              <h1>About the Developers</h1>
          </div>

    <div className="row">
            <div className="col-9">
                      <p> We are a team of web development students at Galvanize in Boulder Colorado. Over the past several months we have dozens of technologies about how to properly build and maintain web applications and websites.
                      We started with the fundamentals of the modern front end web languages, including HTML, CSS, and JavaScript, after which we transitioned into learning how to build and run servers with Express and NodeJs. We then learned about
                      database creation and manipulation with SQL, PostGreSQL and knex, and then finally transitioned into moden front end frameworks, most importantly React, which was instrumental in this project.
                      </p>
                      <p>We all have a wide variety of backgrounds and work experiences, including Retail Sales, Restaurant Management, Video Production and Editing, Solar Industry Management, and general Entrepreneurship.
                      </p>
                      <p>Throughout the past several months in general, and the past two weeks with this project in particular, we have had the opportunity to work together in a large team environment. Doing so allowed us to work independently on our own areas of strength, but also
                      to collborate with our team members where they could complement our own weaknesses with their areas of expertise.
                      </p>
                      <p>If you wish to read more about us, please feel free to visit our linkedin.com pages and checkout our biographies and recent projects.
                      </p>
            </div>

            <div className="col-3">
                    <button onClick={props.hideAboutUs}>Return to HomePage</button>
            </div>
    </div>



    <div className='row justify-content-center'>
      <h1>Linked in Profiles</h1>
    </div>

    <div className="row">

        <div className="col-2">
          <a href="https://www.linkedin.com/in/kevinziechmann/" target="blank">Kevin Z. </a>
          <img className="biophoto" src={kevin} alt="kevin"/>
        </div>


        <div className="col-2">
          <a href="https://www.linkedin.com/in/seth-brown1/" target="blank">Seth B. </a>
          <img className="biophoto" src={seth} alt="seth"/>
        </div>

        <div className="col-2">
          <a href="https://www.linkedin.com/in/the-real-jake-mosher/" target="blank">Jake M. </a>
          <img className="biophoto" src={jake} alt="jake"/>
        </div>

      <div className="col-2">
          <a href="https://www.linkedin.com/in/dustinhuth/" target="blank">Dustin H. </a>
          <img className="biophoto" src={dustin} alt="dustin"/>
      </div>


      <div className="col-l2">
          <a href="https://www.linkedin.com/in/phillipborgenicht/" target="blank">Phillip B. </a>
          <img className="biophoto" src={phil} alt="phil"/>
      </div>

    </div>

    </div>






  )
}

export default Aboutus;
