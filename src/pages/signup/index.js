import React, { useState } from "react";
import "./signup.css";
import logo from "../../assets/icons/logoDark.svg";
import InputField from "../../components/form/inputField";
import Button from "../../components/form/button";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/layout/footer";
import SigninLayout from "../../components/main/signup/layout";
import arrow from '../../assets/icons/arrow.svg'

const Signup = () => {
  const navigate = useNavigate();
  const formInitialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formControl, setFormControl] = useState(formInitialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormControl((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formControl);
  };

  return (
    <>
      <section>
        <SigninLayout />
        <div className="container">
          <img src={logo} alt="brand logo" />
          <h2>Sign up</h2>
          <form className="form">
            <InputField
              label={"Full Name"}
              required
              placeholder="Enter your name"
              type="text"
              name="name"
              value={formControl.name}
              onChange={handleChange}
            />
            <InputField
              label={"Email"}
              required
              placeholder="Enter your email"
              type="email"
              name="email"
              value={formControl.email}
              onChange={handleChange}
            />
            <InputField
              label={"Password"}
              required
              placeholder="Create password"
              type="password"
              name="password"
              value={formControl.password}
              onChange={handleChange}
              note="Must be at least 8 characters."
            />
            <InputField
              label={"Confirm Password"}
              required
              placeholder="Confirm password"
              type="password"
              name="confirmPassword"
              value={formControl.confirmPassword}
              onChange={handleChange}
            />
            <Button value="Get Started" onClick={handleSubmit} />
            <img src={arrow} alt="arrow-icon" className="button_arrow" />
            <p className="signup_content">
              Already have an account?
              <span onClick={() => navigate("/signin")}> Login</span>
            </p>
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Signup;
