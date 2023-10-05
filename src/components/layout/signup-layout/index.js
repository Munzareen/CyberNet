import React from "react";
import stars from "../../../assets/icons/stars.svg";
import "./signup-layout.css";

const SignupLayout = () => {
  return (
    <div className="signup_layout">
      <section>
        <img src={stars} alt="stars" />
        <h1>Start turning non compliance in to compliance into reality.</h1>
        <p className="signup_layout_para">
          Create a free account and get full access to all features for 30-days.
          No credit card needed. Get started in 2 minutes.
        </p>
        <div className="signup_layout_content">
          <img
            src={require("../../../assets/images/brands.png")}
            alt="trusted brands"
          />
          <p>1000+ companies who trust ILIR Cyberdefence</p>
        </div>
      </section>
    </div>
  );
};

export default SignupLayout;
