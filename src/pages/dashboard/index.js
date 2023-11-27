import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Drawer from "../../components/drawer/Drawer";
import DonutChart from "./components/DonutChart";
import LineChart from "./components/LineChart";
import HalfDonutChart from "./components/HalfDonutChart";
import StackedBarChart from "./components/StackedBarChart";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-[#14143E]  w-full h-screen overflow-y-hidden relative">
      <div className="bg-[#14143E] w-full h-4"></div>

      <div className="bg-white rounded-tl-3xl py-4 flex flex-col overflow-y-scroll absolute h-full w-full">
        {/* <div className="text-slate-700 font-medium ">Assessments page</div> */}
        <div className="my-5 flex flex-row gap-4 px-8">
          <div className="py-2 px-3 bg-[#E5E8FD] rounded-2xl">
            <p className="text-[#3855F2] text-sm font-semibold font-inter">
              TVM 0/712
            </p>
          </div>
          <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
            <p className="text-sm font-semibold font-inter">AVA (12/62)</p>
          </div>
          <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
            <p className="text-sm font-semibold font-inter">MKR (0/45)</p>
          </div>
          <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
            <p className="text-sm font-semibold font-inter">APT (0/234) </p>
          </div>
          <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
            <p className="text-sm font-semibold font-inter">LRC (0/45) </p>
          </div>
        </div>
        <div className="flex flex-col p-8 gap-3">
          <div className="flex flex-col gap-3 justify-center">
            <p className="text-[#101828] text-2xl font-bold font-inter text-left">
              {t("tvm")}
            </p>
            <p className="text-[#475467] text-sm font-medium font-inter text-left">
              {t("showingkeymetrics")}{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col p-8 gap-5 ">
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
            <div className="rounded-xl flex flex-col justify-center p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full">
              <p className="text-[#101828] text-base font-semibold font-inter text-left">
                {t("overallassessment")}
              </p>
              <div className="flex gap-4 justify-between">
                <div className="h-80 w-80 p-4 pb-8 flex flex-col rounded-xl">
                  <p className="text-[#101828] text-sm font-semibold font-inter text-left">
                    {t("initialscore")}
                  </p>
                  <div className="h-64 w-full flex justify-center">
                    <DonutChart />
                  </div>
                </div>
                <div className="h-80 w-80 p-4 pb-8 flex flex-col rounded-xl">
                  <p className="text-[#101828] text-sm font-semibold font-inter text-left">
                    {t("currentscore")}
                  </p>
                  <div className="h-64 w-full flex justify-center">
                    <DonutChart />
                  </div>
                </div>
                <div className="h-80 w-80 p-4 pb-8 flex flex-col rounded-xl">
                  <p className="text-[#101828] text-sm font-semibold font-inter text-left">
                    {t("targetscore")}
                  </p>
                  <div className="h-64 w-full flex justify-center">
                    <DonutChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-[450px] w-full gap-4">
              <div className="w-full flex flex-col rounded-xl p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0]">
                <div className="mt-2 flex justify-between">
                  <p className="text-[#101828] text-base font-semibold font-inter text-left">
                    {t("maturityovertime")}
                  </p>
                  <div className="border-[#D0D5DD] border rounded-lg">
                    <button className="bg-[#F9FAFB] py-2 px-4 text-center text-xs font-semibold font-inter text-[#1D2939]">
                      1 yr
                    </button>
                    <button className="py-2 px-4 text-center text-xs font-semibold font-inter text-[#344054] border-l border-[#D0D5DD]">
                      30d
                    </button>
                    <button className="py-2 px-4 text-center text-xs font-semibold font-inter text-[#344054] border-l border-[#D0D5DD]">
                      7d
                    </button>
                    <button className="py-2 px-4 text-center text-xs font-semibold font-inter text-[#344054] border-l border-[#D0D5DD]">
                      24h
                    </button>
                  </div>
                </div>
                <div className="h-80 w-full flex justify-left">
                  <LineChart />
                </div>
              </div>
              <div className="w-full flex flex-col rounded-xl p-5 gap-2 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0]">
                <p className="text-[#101828] text-base font-semibold font-inter text-left">
                  {t("riskscore")}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-[#101828] text-sm font-semibold font-inter text-left">
                    {t("almostreaching")}
                  </p>
                  <p className="text-[#475467] text-xs font-medium font-inter text-left">
                    {t("usedspots")}{" "}
                  </p>
                </div>
                <div className="h-96 w-full flex justify-center">
                  <HalfDonutChart />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-xl flex justify-center w-full gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0]">
                <div className="w-full flex flex-col rounded-xl p-5 gap-3 items-center">
                  <div className="w-full">
                    <p className="text-[#101828] text-base font-semibold font-inter text-left">
                      {t("comparisonscore")}
                    </p>
                  </div>
                  <StackedBarChart />
                </div>
              </div>
              <div className="rounded-xl flex gap-4 p-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0]">
                <div className="flex flex-col gap-4 w-full">
                  <p className="text-[#101828] text-base font-semibold font-inter text-left">
                    {t("actionitems")}
                  </p>
                  <div className="flex">
                    <div className="border-[#D0D5DD] border rounded-lg flex">
                      <button className="rounded-lg bg-[#fff7f7] py-2 px-4 text-center text-xs font-semibold font-inter text-[#F23838]">
                        {t("highestpriority")}
                      </button>
                      <button className="py-2 px-4 text-center text-xs font-semibold font-inter text-[#F27B38] border-l border-[#D0D5DD]">
                        {t("highpriority")}
                      </button>
                      <button className="py-2 px-4 text-center text-xs font-semibold font-inter text-[#C238F2] border-l border-[#D0D5DD]">
                        {t("lowpriority")}
                      </button>
                      <button className="py-2 px-4 text-center text-xs font-semibold font-inter text-[#06CA02] border-l border-[#D0D5DD]">
                        {t("lowestpriority")}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="bg-[#F9FAFB] rounded-lg p-3">
                      <p className="text-[#101828] text-xs font-medium font-inter text-left">
                        1. {t("goalaudition")}
                      </p>
                    </div>
                    <div className="bg-[#F9FAFB] rounded-lg p-3">
                      <p className="text-[#101828] text-xs font-medium font-inter text-left">
                        2. {t("goalaudition")}
                      </p>
                    </div>
                    <div className="bg-[#F9FAFB] rounded-lg p-3">
                      <p className="text-[#101828] text-xs font-medium font-inter text-left">
                        3. {t("goalaudition")}
                      </p>
                    </div>
                    <div className="bg-[#F9FAFB] rounded-lg p-3">
                      <p className="text-[#101828] text-xs font-medium font-inter text-left">
                        4. {t("goalaudition")}
                      </p>
                    </div>
                    <button className="mt-4 py-3 px-6 w-full rounded-2xl bg-[#3855F2] hover:bg-[#536aed] text-white text-sm font-medium font-inter">
                      {t("viewall")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
