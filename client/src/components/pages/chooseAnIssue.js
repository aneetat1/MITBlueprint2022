import React from "react";

import { Router, Link } from "@reach/router";
// import LinkButton from "./modules/LinkButton.js";

import "./style.css";

const ChooseAnIssue = () => {
  return (
    <div>
        <h1>
            choose an issue
        </h1>
        {/* <LinkButton link={"emailtemplates"} text={"Climate Change"}/> */}



        {/* <button type="button">
            <Link to="emailtemplates">Climate Change</Link>
        </button> */}

        <button>
            artificial intelligence ethics
            <a href="emailTemplates.html"/>
        </button>

        <button>
            add your own issue!
        </button>
    </div>
  );
};

export default ChooseAnIssue;