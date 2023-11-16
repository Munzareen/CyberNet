import React, { useState } from "react";

import "./company-details.css";

import logo from "../../assets/icons/logoDark.svg";
import arrow from "../../assets/icons/arrow.svg";

import SignupLayout from "../../components/layout/signup-layout";
import InputField from "../../components/form/inputField";
import Button from "../../components/form/button";
import Footer from "../../components/layout/footer";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CompanyDetails = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  const formInitialState = {
    name: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    address: "",
  };

  const [formControl, setFormControl] = useState(formInitialState);

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
          <h2>{t("addcompanydetails")}</h2>
          <form className="form">
            <InputField
              label={t("companyname")}
              required
              placeholder={t("enteryourcompanyname")}
              type="text"
              name="name"
              value={formControl.name}
              onChange={handleChange}
            />
            <InputField
              label={t("country")}
              required
              placeholder={t("enteryourcountry")}
              type="text"
              name="country"
              value={formControl.country}
              onChange={handleChange}
            />
            <InputField
              label={t("state")}
              required
              placeholder={t("enteryourstate")}
              type="text"
              name="state"
              value={formControl.state}
              onChange={handleChange}
            />
            <InputField
              label={t("city")}
              required
              placeholder={t("enteryourcity")}
              type="text"
              name="city"
              value={formControl.city}
              onChange={handleChange}
            />
            <InputField
              label={t("zipcode")}
              required
              placeholder={t("enteryourzipcode")}
              type="text"
              name="zipcode"
              value={formControl.zipcode}
              onChange={handleChange}
            />
            <InputField
              label={t("address")}
              required
              placeholder={t("enteryouraddress")}
              type="text"
              name="address"
              value={formControl.address}
              onChange={handleChange}
            />
            <Button value={t("continue")} onClick={handleSubmit} />
            <img
              src={arrow}
              alt="arrow-icon"
              className="button_arrow company_details_arrow"
            />
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default CompanyDetails;
