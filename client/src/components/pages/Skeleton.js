import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Router, Link } from "@reach/router";

import "../../utilities.css";
import "./style.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "965618352125-pjlbq5vgi8j0s46dj5odgt4rbao4s0v4.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <>
      {userId ? (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={handleLogout}
          onFailure={(err) => console.log(err)}
        />
      ) : (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={(err) => console.log(err)}
        />
      )}
      
      <body>
      <Link to="about">About</Link>
      <Link to="write">Write</Link>
      <Link to="choose">Choose</Link>
      <Link to="emailTemplate">Email Template</Link>
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
    </>
  );
};

export default Skeleton;
