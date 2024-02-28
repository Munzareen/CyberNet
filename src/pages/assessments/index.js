import React from "react";
import "./assessments.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Drawer from "../../components/drawer/Drawer";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetAssessmentListQuery } from "../../store/services/assessmentsService";
import AssessmentsCard from "./AssessmentsCard";
const Assessments = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();
  const { data, error, isLoading, isSuccess } = useGetAssessmentListQuery();
  return (
    <div className="bg-[#14143E]  w-full h-screen overflow-y-hidden relative">
      <div className="bg-[#14143E] w-full h-4"></div>

      <div className="bg-white rounded-tl-3xl flex flex-col overflow-y-scroll absolute h-full w-full">
        {/* <div className="text-slate-700 font-medium ">Assessments page</div> */}
        <div className="bg-white fixed flex flex-row gap-4 py-8 rounded-tl-3xl px-8 w-full">
          <Link to="/dashboard/assessments">
            <div className="py-2 px-3 bg-[#E5E8FD] rounded-2xl">
              <p className="text-[#3855F2] text-sm font-semibold font-inter">
                {t("newassessments")}
              </p>
            </div>
          </Link>
          <Link to="/dashboard/assessments/ongoing">
            <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
              <p className="text-sm font-semibold font-inter">
                {t("ongoingassessments")}
              </p>
            </div>
          </Link>
          <Link to="/dashboard/assessments/completed">
            <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
              <p className="text-sm font-semibold font-inter">
                {t("completedassessments")}
              </p>
            </div>
          </Link>
        </div>
        <div className="bg-[#F9F9F9] flex flex-col p-8 gap-3 pt-24">
          <div className="text-[#101828] text-2xl font-bold font-inter">
            {isLoading ? "Loading..." : t("assessments")}
          </div>
        </div>
        <div className="flex flex-col p-8 gap-5">
          <div className="flex flex-wrap gap-2">
            {error ? (
              <p className="font-semibold">Oh no, there was an error</p>
            ) : isLoading ? (
              <p className="font-semibold"></p>
            ) : data ? (
              <>
                {data.data.map((assessment) => {
                  console.log("ASSESSMENT IS");
                  console.log(assessment);
                  return (
                    <AssessmentsCard
                      assesmentId={assessment.assestmentId}
                      assesmentName={assessment.assestmentName}
                      assesmentShortName={assessment.assestmentShortName}
                      assesmentDetails={assessment.assestmentDetails}
                      totalQuestions={assessment.totalQuestions}
                    />
                  );
                })}{" "}
              </>
            ) : null}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessments;
