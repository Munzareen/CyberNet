import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
const Home = () => {
  return (
    <div className="flex">
      <Navbar></Navbar>
      <div className="r-assessments-initial bg-[#14143E] pt-4 w-full">
        <div className="bg-white rounded-tl-xl p-8 h-full">
          <div className="text-slate-700 font-medium ">dashboard homepage</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
