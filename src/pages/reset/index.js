import React, { useState, useEffect } from "react";
import "./reset.css";
import logo from "../../assets/icons/logoDark.svg";
import InputField from "../../components/form/inputField";
import Button from "../../components/form/button";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/layout/footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useResetPasswordMutation } from "../../store/services/resetPasswordService";
const Forgot = () => {
  const [resetPassword, { data, error, isLoading, isSuccess }] =
    useResetPasswordMutation();
  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  const navigate = useNavigate();
  const formInitialState = {
    email: "",
    oldPassword: "",
    newPassword: "",
  };

  const [formControl, setFormControl] = useState(formInitialState);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormControl((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword({
      emailAddress: formControl.email,
      oldPassword: formControl.oldPassword,
      newPassword: formControl.newPassword,
    });
    navigate("/");
    console.log(formControl);
  };
  useEffect(() => {
    if (isSuccess && data.isSuccess) {
      console.log("BINGO");
      console.log(data);
      navigate("/");
    }
  }, [isSuccess]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

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
      <div className="forgot_layout">
        <img src={require("../../assets/images/signin2.png")} alt="computer" />
      </div>
      <section className="page_section">
        <div className="container">
          <img src={logo} alt="brand logo" />
          <h2>{t("resetpassword")}</h2>
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
              label={t("oldpassword")}
              required
              placeholder={t("oldpassword")}
              type="password"
              name="oldPassword"
              value={formControl.oldPassword}
              onChange={handleChange}
            />
            <InputField
              label={t("newpassword")}
              required
              placeholder={t("newpassword")}
              type="password"
              name="newPassword"
              value={formControl.newPassword}
              onChange={handleChange}
            />
            <Button value={t("resetpassword")} onClick={handleSubmit} />
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

export default Forgot;
