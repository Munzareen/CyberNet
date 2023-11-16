import React from "react";
import stars from "../../../assets/icons/stars.svg";
import "./signup-layout.css";
import { useTranslation } from "react-i18next";

const SignupLayout = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="signup_layout">
      <section>
        <img src={stars} alt="stars" />
        <h1>{t("startcompliance")}</h1>
        <p className="signup_layout_para">{t("createfreeaccount")}</p>
        <div className="signup_layout_content">
          <img
            src={require("../../../assets/images/brands.png")}
            alt="trusted brands"
          />
          <p>{t("companieswhotrust")}</p>
        </div>
      </section>
    </div>
  );
};

export default SignupLayout;
