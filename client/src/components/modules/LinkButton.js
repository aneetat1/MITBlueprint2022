import React from "react";

import { Router, Link } from "@reach/router";

const LinkButton = (props) => {
  return (
    <div>
        <Link to="emailtemplates">{props.text}</Link>
    </div>
  );
};

export default LinkButton;