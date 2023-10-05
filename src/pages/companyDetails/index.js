import React, { useState } from 'react'

import './company-details.css'

import logo from "../../assets/icons/logoDark.svg";
import arrow from "../../assets/icons/arrow.svg";

import SignupLayout from '../../components/layout/signup-layout';
import InputField from '../../components/form/inputField';
import Button from '../../components/form/button';
import Footer from '../../components/layout/footer';

const CompanyDetails = () => {
    const formInitialState = {
      name: "",
      country: "",
      state: "",
      city: "",
      zipcode: "",
      address: ""
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
      <section className="page_section">
        <SignupLayout />
        <div className="container">
          <img src={logo} alt="brand logo" />
          <h2>Add Company Details</h2>
          <form className="form">
            <InputField
              label={"Company name"}
              required
              placeholder="Enter your company name"
              type="text"
              name="name"
              value={formControl.name}
              onChange={handleChange}
            />
            <InputField
              label={"Country"}
              required
              placeholder="Enter your country"
              type="text"
              name="country"
              value={formControl.country}
              onChange={handleChange}
            />
            <InputField
              label={"State"}
              required
              placeholder="Enter your state"
              type="text"
              name="state"
              value={formControl.state}
              onChange={handleChange}
            />
            <InputField
              label={"City"}
              required
              placeholder="Enter your city"
              type="text"
              name="city"
              value={formControl.city}
              onChange={handleChange}
            />
            <InputField
              label={"Zip Code"}
              required
              placeholder="Enter your zip code"
              type="text"
              name="zipcode"
              value={formControl.zipcode}
              onChange={handleChange}
            />
            <InputField
              label={"Address"}
              required
              placeholder="Enter your address"
              type="text"
              name="address"
              value={formControl.address}
              onChange={handleChange}
            />
            <Button value="Continue" onClick={handleSubmit} />
            <img src={arrow} alt="arrow-icon" className="button_arrow company_details_arrow" />
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default CompanyDetails