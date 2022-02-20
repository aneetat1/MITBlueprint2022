import React from "react";

import { Router, Link } from "@reach/router";

import "./style.css";

const addedTemplate = () => {
  return (
    <div>
        <center>
            <h1>
                your email template has been added!
                <br>
                    see it here:
                </br>
            </h1>

            <button>
                <a href="emailTemplates.html">
                view templates
            </button>
        </center>
    </div>
  );
};

export default NotFound;
