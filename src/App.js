import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import CompanyDetails from "./pages/companyDetails";
import Assessments from "./pages/assessments";
import AuthRoutes from "./routes/AuthRoutes";
import AssessmentsOngoing from "./pages/assessmentsOngoing";
import React from "react";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Routes>
        {/* <Route element={<AuthRoutes />}> */}
        <Route path="/" element={<Home />} />
        <Route
          path="/assessments"
          element={<Assessments isOpen={isOpen} setIsOpen={setIsOpen} />}
        />
        <Route path="/assessments/ongoing" element={<AssessmentsOngoing />} />

        {/* </Route> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/company-details" element={<CompanyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
