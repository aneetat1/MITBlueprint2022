import React from "react";

import { Router, Link } from "@reach/router";
import LinkButton from "/client/src/components/modules/LinkButton.js";

import "./style.css";

const ChooseAnIssue = () => {
  return (
    <div>
        <h1>
            choose an issue
        </h1>
        <button>
            <a href="http://localhost:5000/emailtemplates">Climate Change</a>
        </button>


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