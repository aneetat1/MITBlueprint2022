import React from "react";

import { Router, Link } from "@reach/router";

import "./style.css";

const emailTemplates = () => {
  return (
    <div>
        <h1>
            select an email template
        </h1>

        <center>
            <button>
                <div style="width:400px;height:500px;border:0px solid #000;">template 1</div>
            </button>

            <button>
                <div style="width:400px;height:500px;border:0px solid #000;">template 2</div>
            </button>
        </center>
    </div>
  );
};

export default emailTemplates;