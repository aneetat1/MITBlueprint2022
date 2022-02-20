import React from "react";

import { Router, Link } from "@reach/router";

import "./style.css";

const NotFound = () => {
  return (
    <div>
        <center>
            <h1>
                select one senator
            </h1>

            <button>
                senator 1
            </button>
            <button>
                senator 2
            </button>
        </center>

        <br/>
            <center>
                <button>
                    get my filled-out template
                </button>
            </center>
        <br>

        <h1>
            email template:
        </h1>
        </br>

        <div
            style="width:500px;height:100px;border:1px solid #000;"> insert email here 
        </div>

        <button>
            <a href = "https://www.schumer.senate.gov/contact/email-chuck" target = "_blank"/>
            send your email!
        </button>
    </div>
  );
};

export default NotFound;