import React from "react";

import { Router, Link } from "@reach/router";

import "./style.css";

const EmailTemplates = () => {
  return (
    <div>
        <h1>
            select an email template
        </h1>

        <center>
            <button>    
                <div>
                <button>
                    <a href="http://localhost:5000/personalizetemplate">Template 1: prefilled</a>
                </button>
                </div>
            </button>

            <button>
                <div>template 2</div>
            </button>
        </center>
    </div>
  );
};

export default EmailTemplates;