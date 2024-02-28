import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import CompanyDetails from "./pages/companyDetails";
import Assessments from "./pages/assessments";
import AssessmentsOngoing from "./pages/assessmentsOngoing";
import AssessOngoingExample from "./pages/assessOngoingExample";
import Roadmaps from "./pages/roadmaps";
import React from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import AssessmentsCompleted from "./pages/assessmentsCompleted";
import ProtectedRoute from "./auth/ProtectedRoute";
import Forgot from "./pages/forgot";
import Reset from "./pages/reset";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="home">
          <Route path="new" element={<Dashboard />} />
        </Route>
        <Route path="assessments">
          <Route index element={<Assessments />} />
          <Route path="ongoing" element={<AssessmentsOngoing />} />
          <Route
            path="ongoing/example/:id"
            element={<AssessOngoingExample />}
          />
          <Route path="completed" element={<AssessmentsCompleted />} />
        </Route>
        <Route path="roadmaps" element={<Roadmaps />} />
        <Route
          path="*"
          element={<h1 className="text-black p-4">Error 404</h1>}
        />
      </Route>
      <Route path="" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot" element={<Forgot />} />
      <Route path="reset" element={<Reset />} />
      <Route path="company-details" element={<CompanyDetails />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
