import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function AssessmentsCard({
  assesmentId,
  assesmentName,
  assesmentShortName,
  assesmentDetails,
  totalQuestions,
}) {
  const { t } = useTranslation();

  return (
    <div
      key={assesmentId}
      className="flex flex-col justify-start items-start bg-white rounded-lg shadow-lg border border-gray-200 p-5 w-4/5 gap-6"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between w-full">
          <div className="inline-block">
            <p className="text-lg font-bold font-inter text-left text-[#101828]">
              {assesmentName} {`(${assesmentShortName})`}
            </p>{" "}
          </div>
          <div className="flex justify-center items-center ml-4 p-2 h-min w-min rounded-full bg-[#ECF1FD]">
            <p className="text-xs text-[#3855F2] whitespace-nowrap">
              {totalQuestions} {t("questions")}
            </p>
          </div>{" "}
        </div>
        <p className="text-[#475467] font-inter font-medium text-sm text-left">
          {assesmentDetails}
          {/* {t("educationalassessment")} */}
        </p>
      </div>
      <Link to={`/dashboard/assessments/ongoing/example/${assesmentId}`}>
        <button className="py-3 px-6 rounded-2xl bg-[#3855F2] hover:bg-[#536aed] text-white text-sm font-medium font-inter">
          {t("startassessment")}
        </button>
      </Link>
    </div>
  );
}
