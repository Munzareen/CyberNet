import React from "react";
import { Link } from "react-router-dom";
import AssignDropdown from "../../components/dropdown/AssignDropdown";
import { useState } from "react";
import CrossIcon from "../../components/icons/CrossIcon";
import SpaceshipIcon from "../../components/icons/SpaceshipIcon";
import { useTranslation } from "react-i18next";

export default function AssessmentsCompleted() {
  const [upgradeAssessmentFlag, setUpgradeAssessmentFlag] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-[#14143E]  w-full h-screen overflow-y-hidden relative">
        <div className="bg-[#14143E] w-full h-4"></div>

        <div className="bg-white rounded-tl-3xl py-4 flex flex-col overflow-y-scroll absolute h-full w-full">
          {/* <div className="text-slate-700 font-medium ">Assessments page</div> */}
          <div className="my-5 flex flex-row gap-4 px-8">
            <Link to="/dashboard/assessments">
              <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
                <p className="text-sm font-semibold font-inter">
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
              <div className="py-2 px-3 bg-[#E5E8FD] rounded-2xl">
                <p className="text-[#3855F2] text-sm font-semibold font-inter">
                  {t("completedassessments")}
                </p>
              </div>
            </Link>
          </div>
          <div className="bg-[#F9F9F9] flex flex-col p-8 gap-3">
            <div className="text-[#101828] text-2xl font-bold font-inter">
              {t("completedassessments")}
            </div>
            <div className="flex gap-2 border border-[#F2F4F7] rounded-md p-1">
              <div className="bg-white shadow-sm shadow-[#979797] rounded-md flex justify-center items-center py-2 px-3">
                <p className="text-[#344054] text-xs font-semibold font-inter">
                  TVM
                </p>
              </div>
              <div className="rounded-md flex justify-center items-center py-2 px-3">
                <p className="text-[#667085] text-xs font-semibold font-inter">
                  LRC
                </p>
              </div>
              <div className="rounded-md flex justify-center items-center py-2 px-3">
                <p className="text-[#667085] text-xs font-semibold font-inter">
                  APT
                </p>
              </div>
              <div className="rounded-md flex justify-center items-center py-2 px-3">
                <p className="text-[#667085] text-xs font-semibold font-inter">
                  DHF
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-8 gap-5">
            <div className="flex w-full justify-between">
              <p className="text-[#101828] text-base text-left font-bold font-inter">
                {t("tvm")}
              </p>
              <AssignDropdown />
            </div>
            <div className="flex flex-col gap-6 ">
              <div className="rounded-xl flex flex-col p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-[49%]">
                <div className="bg-[#ECF1FD] rounded-full w-12 h-12 flex justify-center items-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 13.9998L8 10.9998M11 13.9998C12.3968 13.4685 13.7369 12.7985 15 11.9998M11 13.9998V18.9998C11 18.9998 14.03 18.4498 15 16.9998C16.08 15.3798 15 11.9998 15 11.9998M8 10.9998C8.53214 9.61919 9.2022 8.29582 10 7.04976C11.1652 5.18675 12.7876 3.65281 14.713 2.59385C16.6384 1.53489 18.8027 0.986131 21 0.99976C21 3.71976 20.22 8.49976 15 11.9998M8 10.9998H3C3 10.9998 3.55 7.96976 5 6.99976C6.62 5.91976 10 6.99976 10 6.99976M3.5 15.4998C2 16.7598 1.5 20.4998 1.5 20.4998C1.5 20.4998 5.24 19.9998 6.5 18.4998C7.21 17.6598 7.2 16.3698 6.41 15.5898C6.02131 15.2188 5.50929 15.0044 4.97223 14.9878C4.43516 14.9712 3.91088 15.1535 3.5 15.4998Z"
                      stroke="#3855F2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#101828] text-sm text-left font-semibold font-inter">
                    {t("newmodel")}{" "}
                  </p>
                  <p className="text-[#475467] text-xm text-left font-medium font-inter">
                    {t("educationalassessment")}{" "}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => setUpgradeAssessmentFlag(true)}
                    className="py-3 px-6 w-64 rounded-2xl bg-[#3855F2] hover:bg-[#536aed] text-white text-sm font-medium font-inter"
                  >
                    {t("upgradeassessment")}
                  </button>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="rounded-xl flex flex-col p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full">
                  <p className="text-[#101828] text-sm text-left font-semibold font-inter">
                    {t("assessmentprogress")}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-[#101828] text-3xl text-left font-bold font-inter">
                      100%
                    </p>
                    <div className="flex justify-center items-center px-2 py-1 gap-1 bg-[#ECFDF3] rounded-full">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 8.5V1.5M5 1.5L1.5 5M5 1.5L8.5 5"
                          stroke="#12B76A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-[#027A48] text-xs text-left font-medium font-inter">
                        5%
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full flex w-full h-2 bg-[#EAECF0]">
                    <div className="rounded-full flex w-full h-2 bg-[#3855F2]"></div>
                  </div>
                </div>
                <div className="rounded-xl flex flex-col p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full">
                  <p className="text-[#101828] text-sm text-left font-semibold font-inter">
                    {t("complianceprogress")}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-[#101828] text-3xl text-left font-bold font-inter">
                      100%
                    </p>
                    <div className="flex justify-center items-center px-2 py-1 gap-1 bg-[#ECFDF3] rounded-full">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 8.5V1.5M5 1.5L1.5 5M5 1.5L8.5 5"
                          stroke="#12B76A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-[#027A48] text-xs text-left font-medium font-inter">
                        8%
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full flex w-full h-2 bg-[#EAECF0]">
                    <div className="rounded-full flex w-full h-2 bg-[#3855F2]"></div>
                  </div>
                </div>
                <div className="rounded-xl flex flex-col p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full">
                  <p className="text-[#101828] text-sm text-left font-semibold font-inter">
                    {t("totalquestions")}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-[#101828] text-3xl text-left font-bold font-inter">
                      273
                    </p>
                    {/* <div className="flex justify-center items-center px-2 py-1 gap-1 bg-[#ECFDF3] rounded-full">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 8.5V1.5M5 1.5L1.5 5M5 1.5L8.5 5"
                      stroke="#12B76A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#027A48] text-xs text-left font-medium font-inter">
                    5%
                  </p>
                </div> */}
                  </div>
                  {/* <div className="rounded-full flex w-full h-2 bg-[#EAECF0]">
                <div className="rounded-full flex w-1/2 h-2 bg-[#3855F2]"></div>
              </div> */}
                </div>
                <div className="rounded-xl flex flex-col p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full">
                  <p className="text-[#101828] text-sm text-left font-semibold font-inter">
                    {t("completedactions")}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-[#101828] text-3xl text-left font-bold font-inter">
                      273
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl flex flex-row p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                    {t("model")}
                  </p>
                  <p className="text-[#344054] text-xs text-left font-bold font-inter whitespace-nowrap">
                    Dow_8372
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                    {t("starteddate")}
                  </p>
                  <p className="text-[#344054] text-xs text-left font-bold font-inter whitespace-nowrap">
                    21 May 2020
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                    {t("lastactivity")}
                  </p>
                  <p className="text-[#344054] text-xs text-left font-bold font-inter whitespace-nowrap">
                    26 May 2020
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                    {t("assignees")}
                  </p>
                  <div className="flex">
                    <div className="w-5 h-5 rounded-full border-[2px] border-white  bg-slate-400 flex justify-center items-center">
                      <p className="text-[10px] font-semibold font-inter text-[#475467] text-center">
                        A
                      </p>
                    </div>
                    <div className="w-5 h-5 rounded-full border-[2px] border-white bg-slate-100 flex justify-center items-center -ml-[6px]">
                      <p className="text-[10px] font-semibold font-inter text-[#475467] text-center">
                        A
                      </p>
                    </div>
                    <div className="w-5 h-5 rounded-full border-[2px] border-white bg-slate-200 flex justify-center items-center -ml-[6px]">
                      <p className="text-[10px] font-semibold font-inter text-[#475467] text-center">
                        A
                      </p>
                    </div>
                    <div className="w-5 h-5 rounded-full border-[2px] border-white bg-slate-300 flex justify-center items-center -ml-[6px]">
                      <p className="text-[10px] font-semibold font-inter text-[#475467] text-center">
                        A
                      </p>
                    </div>
                    <div className="w-5 h-5 rounded-full border-[2px] border-white bg-slate-400 flex justify-center items-center -ml-[6px]">
                      <p className="text-[10px] font-semibold font-inter text-[#475467] text-center">
                        5+
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                    {t("comments")}
                  </p>
                  <p className="text-[#3855F2] text-xs text-left font-bold font-inter underline whitespace-nowrap">
                    4
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                    {t("supportticket")}
                  </p>
                  <p className="text-[#3855F2] text-xs text-left font-bold font-inter underline whitespace-nowrap">
                    231
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                    {t("actionsassigned")}
                  </p>
                  <p className="text-[#3855F2] text-xs text-left font-bold font-inter underline whitespace-nowrap">
                    321
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                    {t("totalactions")}
                  </p>
                  <p className="text-[#3855F2] text-xs text-left font-bold font-inter underline whitespace-nowrap">
                    512
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {upgradeAssessmentFlag && (
        <div
          className="fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out flex justify-center items-center"
          onClick={() => setUpgradeAssessmentFlag(false)}
        >
          <div
            className="bg-white rounded-2xl flex flex-col p-8 gap-4 w-1/3"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-between">
              <div className="bg-[#ECF1FD] border-[8px] border-[#F9F5FF] flex justify-center items-center w-12 h-12">
                <SpaceshipIcon />
              </div>
              <button
                onClick={() => {
                  setUpgradeAssessmentFlag(false);
                }}
                className="w-12 h-12 flex justify-center items-center"
              >
                <CrossIcon />
              </button>
            </div>

            {/*         educationalassessment:
          "Educational assessment or educational evaluation is the systematic process of documenting and using empirical data on the knowledge, skill, attitudes, aptitude",
        whatsnew: "What's new",
        upgradequery: "Do you want to upgrade MODAL ARE-23w to DOW - 909?",
        upgradeexisting: "Upgrade on existing",
        duplicatenupgrade: "Duplicate the current and upgrade to new modal",
        cancel: "Cancel",
        upgradenow: "Upgrade now",
 */}
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold font-inter text-left text-[#101828]">
                {t("upgradetoassessment")}
              </p>
              <p className="text-xm font-medium font-inter text-left text-[#475467]">
                {t("educationalassessment")}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold font-inter text-left text-[#101828]">
                {t("whatsnew")}
              </p>
              <div className="flex gap-2">
                <div className="flex justify-center items-center px-2 py-[2px] h-min w-min rounded-full bg-[#ECF1FD]">
                  <p className="text-xs text-[#3855F2] whitespace-nowrap">
                    Are-253267
                  </p>
                </div>
                <div className="flex justify-center items-center px-2 py-[2px] h-min w-min rounded-full bg-[#ECF1FD]">
                  <p className="text-xs text-[#3855F2] whitespace-nowrap">
                    Dow_8267
                  </p>
                </div>
                <div className="flex justify-center items-center px-2 py-[2px] h-min w-min rounded-full bg-[#ECF1FD]">
                  <p className="text-xs text-[#3855F2] whitespace-nowrap">
                    2367hgjsah
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold font-inter text-left text-[#101828]">
                {t("upgradequery")}
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="radio1"
                    name="radioGroup"
                    value="radio1"
                    checked
                  />
                  <label htmlFor="radio1">
                    <p className="text-xm font-medium font-inter text-left text-[#344054]">
                      {t("upgradeexisting")}
                    </p>
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="radio2"
                    name="radioGroup"
                    value="radio2"
                  />
                  <label htmlFor="radio2">
                    <p className="text-xm font-medium font-inter text-left text-[#344054]">
                      {t("duplicatenupgrade")}
                    </p>
                  </label>
                </div>{" "}
              </div>
            </div>
            <div className="flex gap-7 w-full justify-center pt-5">
              <button
                onClick={() => {
                  setUpgradeAssessmentFlag(false);
                }}
                className="w-56 py-3 px-6 rounded-2xl bg-white hover:bg-[#f7faff] border border-[#344054] "
              >
                <p className="text-[#344054] text-sm font-medium font-inter">
                  {t("cancel")}
                </p>
              </button>
              <button className="w-56 py-3 px-2 rounded-2xl bg-[#3855F2] hover:bg-[#536aed] ">
                <p className="text-white text-sm font-medium font-inter">
                  {t("upgradenow")}
                </p>{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
