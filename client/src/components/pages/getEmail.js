import React from "react";

import { Router, Link } from "@reach/router";

import "./style.css";

const GetEmail = () => {
  return (
    <div>
        <h1>
            email template:
        </h1>
        <p>
        My name is Chloe and I am a resident of New York.
        </p>
        <p>
        I am writing to you today on behalf of the planet, as I am greatly concerned that not enough action is being taken to combat the current climate crisis. I use the word crisis because that is what we are facing.
        </p>
        <p>
        Carbon emissions are rising and the 100 companies are responsible for 71% of these emissions are not being held responsible.
        </p>
        <p>
        The 2021 IPCC report on climate change states that we are in a code red for humanity. By 2040 we will reach 1.5 degrees of warming and we will need to cut emissions in HALF by 2030 and reach net zero to avoid a complete climate catastrophe.
        </p>
        <p>
        We are not equipped to handle a climate catastrophe. It will leave us vulnerable, exposed and with a global food supply shortage.
        </p>
        <p>
        We have yet to see our representatives take drastic enough action (if any) to help prevent this. Instead, we expand pipelines putting money into the government’s pocket and subsidize oil and gas companies.
        </p>
        <p>
        We are creating a mess for the youth that cannot yet vote but will surely be left in the devastating aftermath of our choices today.
        </p>
        <p>
        It is way past time to act. I am reaching out on not only her behalf but on behalf of the youth, marginalized people groups and our country as a whole. Renewable energy is more affordable than ever, and supporting a green economy not only saves our future but ensures jobs and security while we do so.
                I am calling on you to act.
        </p>
        <p>
        Hoping for a future,
        </p>
        <p>
            Chloe
        </p>
        <button>
            <a href = "https://www.schumer.senate.gov/contact/email-chuck" target = "_blank">
            send your email! </a>
        </button>

        
    </div>
  );
};

export default GetEmail;