import React from "react";
import { Router, Link } from "@reach/router";

import "./style.css";

const Write = () => {
  return (
    <div>
      <Link to="/">Back to home/login page</Link>
        <h1>write an email template: </h1>
        <p>when you write your email, write [name] instead of your actual name and [senator] instead of your senator's name</p>
        <center><form> <input type="text" size = "50" style="width: 1000px; height: 200px;"/> </form></center>
        <align-right>
            <button style="float: right">
                <a href="addedTemplate.html"/ > submit
            </button>
        </align-right>
    </div>
  );
}

export default Write;
