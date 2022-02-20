import React from "react";
import { Router, Link } from "@reach/router";

import "./style.css";

const About = () => {
  return (
    <body>
      <Link to="/">Back to home/login page</Link>
        <div class="home-page-content">
            <div class="landing-page-content">
                {/* <!-- background image: --> */}
                <div class="image" id="backgroundImage">
                    <img src = "https://i.ibb.co/984zbFh/output-onlinepngtools.png" height = "100%" width = "100%"/>
                </div>
                
                {/* <!-- title: --> */}
                <h1 class="title">campaign.</h1>
    
                {/* <!-- subtitle: --> */}
                <h3 class="subtitle">quickly email your local representatives about current issues.</h3>

                {/* <!-- info button, replace with info button: --> */}
                <button type="button"> <img src="https://bit.ly/3BF9FD7" height ="80" width="100" /></button>
    
                {/* <!-- replaced getRandomImage() with something that brings you back to the home page --> */}
                <div class="button-container">
                    <button id="random" onClick="getRandomImage()">campaign.org</button>
                </div>
    
            </div>
            <div class="outreach-content">

            </div>
        </div>
        
    </body>
  );
};

export default About;
