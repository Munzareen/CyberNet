import React from "react";
import "./assessments.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Drawer from "../../components/drawer/Drawer";
import { useState } from "react";
const Assessments = ({ isOpen, setIsOpen }) => {
  return (
    <div className="r-assessments-initial bg-[#14143E] pt-4 w-full">
      <div className="bg-white rounded-tl-3xl py-4 h-full flex flex-col">
        {/* <div className="text-slate-700 font-medium ">Assessments page</div> */}
        <div className="my-5 flex flex-row gap-4 px-8">
          <Link to="/dashboard/assessments">
            <div className="py-2 px-3 bg-[#E5E8FD] rounded-2xl">
              <p className="text-[#3855F2] text-base font-semibold font-inter">
                New Assessments
              </p>
            </div>
          </Link>
          <Link to="/dashboard/assessments/ongoing">
            <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
              <p className="text-base font-semibold font-inter">
                Ongoing Assessments
              </p>
            </div>
          </Link>
          <Link to="/dashboard/assessments/completed">
            <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
              <p className="text-base font-semibold font-inter">
                Completed Assessments
              </p>
            </div>
          </Link>
        </div>
        <div className="bg-[#F9F9F9] flex flex-col p-8 gap-3">
          <div className="text-[#101828] text-3xl font-bold font-inter">
            Assessments
          </div>
        </div>
        <div className="flex flex-col p-8 gap-5">
          <div className="flex flex-wrap gap-2">
            <div className="flex flex-col justify-start items-start bg-white rounded-lg shadow-lg border border-gray-200 p-5 w-4/5 gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full">
                  <div className="inline-block">
                    <p className="text-xl font-bold font-inter text-left text-[#101828]">
                      Threat, Vulnerable Management (TVM)
                    </p>{" "}
                  </div>
                  <div className="flex justify-center items-center ml-4 p-2 h-min w-min rounded-full bg-[#ECF1FD]">
                    <p className="text-xs text-[#3855F2] whitespace-nowrap">
                      712 Questions
                    </p>
                  </div>{" "}
                </div>
                <p className="text-[#475467] font-inter font-medium text-base text-left">
                  Educational assessment or educational evaluation is the
                  systematic process of documenting and using empirical data on
                  the knowledge, skill, attitudes, aptitude and beliefs to
                  refine programs and improve student learning.
                </p>
              </div>
              <Link to="/dashboard/assessments/ongoing">
                <button className="py-3 px-6 rounded-2xl bg-[#3855F2] hover:bg-[#536aed] text-white text-base font-medium font-inter">
                  Start Assessment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessments;
