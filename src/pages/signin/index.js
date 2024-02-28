import React, { useState, useEffect, useRef } from "react";
import "./signin.css";
import logo from "../../assets/icons/logoDark.svg";
import InputField from "../../components/form/inputField";
import Button from "../../components/form/button";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/layout/footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSigninUserMutation } from "../../store/services/authService";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import Spinner from "./spinner";
const Signin = () => {
  const ref = useRef(null);
  const [signinUser, { data, error, isLoading, isSuccess, isError }] =
    useSigninUserMutation();

  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  const navigate = useNavigate();
  const formInitialState = {
    email: "",
    password: "",
  };

  const [formControl, setFormControl] = useState(formInitialState);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formControl);
    setFormControl((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("logedIn", true);
    console.log(formControl);
    signinUser({
      emailAddress: formControl.email,
      password: formControl.password,
    });

    // Cookies.set("access_token", "TEMPORARY TOKEN");
    // navigate("/dashboard");
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    if (isSuccess && data.isSuccess) {
      console.log("Did log in work i wonder.");
      console.log(data);
      Cookies.set("access_token", data.data);
      navigate("/dashboard");
    } else if (isSuccess) {
      console.log("did not work");
      toast.error(`${data.message}`);
    }
  }, [isSuccess]);

  return (
    <>
      <div className="absolute top-0 left-0 m-8 flex gap-2">
        {/* <h1 className="text-gray-950">{t("welcome")}</h1> */}
        <button
          className="z-20 text-sm font-medium"
          onClick={() => handleTrans("en")}
        >
          English
        </button>
        <button
          className="z-20 text-sm font-medium"
          onClick={() => handleTrans("fr")}
        >
          French
        </button>
      </div>
      <div className="signin_layout">
        <img src={require("../../assets/images/signin2.png")} alt="computer" />
      </div>
      <section className="page_section">
        <div className="container">
          <img src={logo} alt="brand logo" />
          <h2>{t("login")}</h2>
          <form className="form">
            <InputField
              label={"Email"}
              required
              placeholder={t("enteremail")}
              type="email"
              name="email"
              value={formControl.email}
              onChange={handleChange}
            />
            <InputField
              label={t("password")}
              required
              placeholder={t("enterpassword")}
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
                <label className="label">{t("remember")}</label>
              </div>
              <Link to="/forgot">
                <p>
                  <span>{t("forgot")}</span>
                </p>
              </Link>
            </div>
            {/* <Link to="/dashboard/"> */}
            <button ref={ref} className="button" onClick={handleSubmit}>
              {!isLoading && t("signin")} {isLoading && <Spinner />}
            </button>

            {/* </Link> */}
            <p className="signup_content">
              {t("donthaveanaccount")}
              <span onClick={() => navigate("/signup")}>{t("signup")}</span>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signin;
