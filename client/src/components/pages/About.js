import React from "react";
import { Router, Link } from "@reach/router";

import "./style.css";

const about = () => {
  return (
    <body>
      <Link to="/">Back to home/login page</Link>
      <h1> <center> about </center></h1>

      <p><center>campaign.org works to ensure everyone has political efficacy, to ensure our elected leaders hear our voices by seeing our wants and needs across the board.
        <br><br>
          reach out to your senators now and tell them what changes you need to see being made. we won’t take anymore political standstill.
        </br> </br>
      </center></p>

      <button>
        <br></br>
        <h2>
          instructions
        </h2>

        <p>
          1. choose an issue or add your own issue <br></br>
          2. sign a pre-written email template or write your own template for anyone to use <br></br>
          3. personalize your email! add your name and find your senators <br></br>
          4. choose which senator you want to send your email to <br></br>
          5. and you’re done! we’ll redirect you to your senator’s email form
        </p>
      </button>
        
    </body>
  );
};

export default about;
