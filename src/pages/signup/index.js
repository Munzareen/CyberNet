import React, { useState, useEffect } from "react";

import "./signup.css";

import logo from "../../assets/icons/logoDark.svg";
import arrow from "../../assets/icons/arrow.svg";

import InputField from "../../components/form/inputField";
import Button from "../../components/form/button";
import Footer from "../../components/layout/footer";
import SignupLayout from "../../components/layout/signup-layout";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

import { useSignUpUserMutation } from "../../store/services/signupService";
import { useSigninUserMutation } from "../../store/services/authService";
import Cookies from "js-cookie";
import Spinner from "../signin/spinner";
const Signup = () => {
  const [signupUser, { data, error, isError, isLoading, isSuccess }] =
    useSignUpUserMutation();
  const [
    signinUser,
    {
      data: signData,
      error: signError,
      isLoading: signLoading,
      isSuccess: signIsSuccess,
      isError: signIsError,
    },
  ] = useSigninUserMutation();

  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

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
    if (formControl.password == formControl.confirmPassword) {
      signupUser({
        fullName: formControl.name,
        emailAddress: formControl.email,
        password: formControl.password,
      });
      // navigate("/company-details");

      console.log({
        fullName: formControl.name,
        emailAddress: formControl.email,
        password: formControl.password,
      });
    }
  };
  useEffect(() => {
    if (isSuccess && data.isSuccess) {
      console.log(data);
      // toast.success(`Account made successfully`);
      signinUser({
        emailAddress: formControl.email,
        password: formControl.password,
      });

      // navigate("/");
    } else if (isSuccess) {
      console.log(data);
      toast.error(`${data.message}`);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (signIsSuccess && signData.isSuccess) {
      console.log(signData);
      Cookies.set("access_token", signData.data);
      toast.success(`Account made successfully`);

      navigate("/company-details");
    } else if (signIsSuccess) {
      console.log(signData);
      toast.error(`${signData.message}`);
    }
  }, [signIsSuccess]);
  useEffect(() => {
    if (isError) {
      console.log(error);
      // navigate("/company-details");
    }
  }, [isError]);
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

      <section className="page_section">
        <SignupLayout />
        <div className="container">
          <img src={logo} alt="brand logo" />
          <h2>{t("signup")}</h2>
          <form className="form">
            <InputField
              label={t("fullname")}
              required
              placeholder={t("enteryourname")}
              type="text"
              name="name"
              value={formControl.name}
              onChange={handleChange}
            />
            <InputField
              label={"Email"}
              required
              placeholder={t("enteryouremail")}
              type="email"
              name="email"
              value={formControl.email}
              onChange={handleChange}
            />
            <InputField
              label={t("password")}
              required
              placeholder={t("createpassword")}
              type="password"
              name="password"
              value={formControl.password}
              onChange={handleChange}
              note={t("atleast8characters")}
            />
            <InputField
              label={t("confirmpassword")}
              required
              placeholder={t("confirmpasswordinput")}
              type="password"
              name="confirmPassword"
              value={formControl.confirmPassword}
              onChange={handleChange}
            />
            <Button
              value={isLoading || signLoading ? <Spinner /> : t("signup")}
              onClick={handleSubmit}
            />
            <img src={arrow} alt="arrow-icon" className="button_arrow" />
            <p className="signup_content">
              {t("alreadyhaveaccount")}
              <span onClick={() => navigate("/")}>{t("login")}</span>
            </p>
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Signup;
