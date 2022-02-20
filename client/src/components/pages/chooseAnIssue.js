import React from "react";

import { Router, Link } from "@reach/router";

import "./style.css";

const ChooseAnIssue = () => {
  return (
    <div>
        <h1>
            choose an issue
        </h1>

        <button>
            <a href="emailTemplates.html"/>
            climate change
        </button>

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