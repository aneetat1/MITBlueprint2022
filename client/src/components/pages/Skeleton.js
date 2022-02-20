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
      <Link to="about">About</Link>
      <h1>Home Page</h1>
      <a href="http://weblab.to/get-started">example link (get started guide)</a>
    </>
  );
};

export default Skeleton;
