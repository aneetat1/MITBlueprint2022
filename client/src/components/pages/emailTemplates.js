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
                <div>template 1</div>
            </button>

            <button>
                <div>template 2</div>
            </button>
        </center>
    </div>
  );
};

export default EmailTemplates;