import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import CompanyDetails from "./pages/companyDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/company-details" element={<CompanyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
