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
    <div class="google">
      {userId ? (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          buttonText="logout"
          onLogoutSuccess={handleLogout}
          onFailure={(err) => console.log(err)}
        />
      ) : (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="login with google"
          onSuccess={handleLogin}
          onFailure={(err) => console.log(err)}
        />
      )}

    </div>

      {/* <!-- <Link to="about">About</Link> --> */} 
      <body>
      <Link to="about">About</Link>
      <Link to="write">Write</Link>
      <Link to="choose">Choose</Link>
      <Link to="emailTemplate">Email Template</Link>
        <div class="home-page-content">
            <div class="landing-page-content">
            
            <div class="headl">
            {/* <!-- info button, replace with info button: --> */}
            <h1 class ="head">campaign.org</h1>
            <button type="button"> <Link to="about"> <img src="https://raw.githubusercontent.com/aneetat1/MITBlueprint2022/main/image.png" height ="30" width="30" />  </Link> </button>
            </div>

            {/* <!-- replaced getRandomImage() with something that brings you back to the home page --> */}
            <div class="button-container">
            </div>

              <div class="bckgrnd">

                {/* <!-- background image: --> */}
                <div class="image" id="backgroundImage">
                    <img src = "https://i.ibb.co/984zbFh/output-onlinepngtools.png" height = "100%" width = "100%"/>
                    
                </div>
                
                <h1 class="text">
                    {/* <!-- title: --> */}
                    <h1 class="title">campaign.</h1>

                    {/* <!-- subtitle: --> */}
                     <h3 class="subtitle">quickly email your local representatives about current issues.</h3>
                </h1>
                
                </div>
    
            </div>
            <div class="outreach-content">

                <h1 class="title">outreach</h1>
 
                <h3 class="subtitle-1"> email your local representatives an issue.</h3>
               
                chooseAnIssue.js<button type="button">see the list of issues</button>




            </div>
        </div>
        
    </body>
    </>
  );
};

export default Skeleton;