import React from "react";

import { Router, Link } from "@reach/router";

import "./style.css";

const writeOrSign = () => {
  return (
    <div>
        <center><button><a href="write.js"/>write</button>
        <button><a href="emailTemplates.js"/>sign</button>
        </center>
    </div>
  );
};

export default writeOrSign;
