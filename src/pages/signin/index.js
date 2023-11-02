import React, { useState } from "react";
import "./signin.css";
import logo from "../../assets/icons/logoDark.svg";
import InputField from "../../components/form/inputField";
import Button from "../../components/form/button";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/layout/footer";
import { Link } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const formInitialState = {
    email: "",
    password: "",
  };

  const [formControl, setFormControl] = useState(formInitialState);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormControl((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("logedIn", true);

    navigate("/");
    console.log(formControl);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="signin_layout">
        <img src={require("../../assets/images/signin.png")} alt="computer" />
      </div>
      <section className="page_section">
        <div className="container">
          <img src={logo} alt="brand logo" />
          <h2>Login</h2>
          <form className="form">
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
            />
            <div className="signin_content">
              <div>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label className="label">Remember for 30 days</label>
              </div>
              <p>
                <span>Forgot Password</span>
              </p>
            </div>
            <Link to="/dashboard/home">
              {/* <Button value="Sign in" onClick={handleSubmit} /> */}
              <Button value="Sign in"></Button>
            </Link>
            <p className="signup_content">
              Don't have an account?
              <span onClick={() => navigate("/signup")}> Sign up</span>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signin;
