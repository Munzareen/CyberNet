import React from "react";
import "./AssessmentsOngoing.css";
import Navbar from "../../components/Navbar/Navbar";
import Drawer from "../../components/drawer/Drawer";
import { Link } from "react-router-dom";
import AssignDropdown from "../../components/dropdown/AssignDropdown";
import { useTranslation } from "react-i18next";

const AssessmentsOngoing = () => {
  const { t } = useTranslation();

  return (
    <div className="r-assessments-initial bg-[#14143E] pt-4 w-full">
      <div className="bg-white rounded-tl-3xl py-4 h-full flex flex-col">
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
            <div className="py-2 px-3 bg-[#E5E8FD] rounded-2xl">
              <p className="text-[#3855F2] text-sm font-semibold font-inter">
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
        <div className="bg-[#F9F9F9] flex flex-col p-8 gap-3">
          <div className="text-[#101828] text-2xl font-bold font-inter">
            {t("ongoingassessments")}
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
            <div className="flex gap-6">
              <div className="rounded-xl flex flex-col p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full">
                <p className="text-[#101828] text-sm text-left font-semibold font-inter">
                  {t("assessmentprogress")}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-[#101828] text-3xl text-left font-bold font-inter">
                    60%
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
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-[#027A48] text-xs text-left font-medium font-inter">
                      5%
                    </p>
                  </div>
                </div>
                <div className="rounded-full flex w-full h-2 bg-[#EAECF0]">
                  <div className="rounded-full flex w-1/2 h-2 bg-[#3855F2]"></div>
                </div>
              </div>
              <div className="rounded-xl flex flex-col p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full">
                <p className="text-[#101828] text-sm text-left font-semibold font-inter">
                  {t("complianceprogress")}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-[#101828] text-3xl text-left font-bold font-inter">
                    25%
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
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-[#027A48] text-xs text-left font-medium font-inter">
                      8%
                    </p>
                  </div>
                </div>
                <div className="rounded-full flex w-full h-2 bg-[#EAECF0]">
                  <div className="rounded-full flex w-1/4 h-2 bg-[#3855F2]"></div>
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
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                    481
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
          <div className="">
            <Link to="/dashboard/assessments/ongoing/example">
              <button className="py-3 px-6 rounded-2xl bg-[#3855F2] hover:bg-[#536aed] text-white text-sm font-medium font-inter">
                {t("continueassessment")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentsOngoing;
