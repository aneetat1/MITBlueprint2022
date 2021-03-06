import React, { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";

import About from "./pages/About.js";
import Write from "./pages/write.js";
import ChooseAnIssue from "./pages/chooseAnIssue.js";
import EmailTemplates from "./pages/emailTemplates.js";
import PersonalizeTemplate from "./pages/personalizeTemplate.js";
import GetEmail from "./pages/getEmail.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <Router>
        <Skeleton path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        <NotFound default />
        <About path="about" />
        <Write path="write" />
        <ChooseAnIssue path="choose" />
        <EmailTemplates path="emailtemplates" />
        <PersonalizeTemplate path="personalizetemplate" />
        <GetEmail path="getemail" />
      </Router>
    </>
  );
};

export default App;
