import React from "react";
import "./AssessmentsOngoing.css";
import Navbar from "../../components/Navbar/Navbar";
import Drawer from "../../components/drawer/Drawer";
import { Link } from "react-router-dom";

const AssessmentsOngoing = () => {
  return (
    <div className="r-assessments-initial bg-[#14143E] pt-4 w-full">
      <div className="bg-white rounded-tl-3xl py-4 h-full flex flex-col">
        {/* <div className="text-slate-700 font-medium ">Assessments page</div> */}
        <div className="my-5 flex flex-row gap-4 px-8">
          <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
            <p className="text-base font-semibold font-inter">
              New Assessments
            </p>
          </div>
          <div className="py-2 px-3 bg-[#E5E8FD] rounded-2xl">
            <p className="text-[#3855F2] text-base font-semibold font-inter">
              Ongoing Assessments
            </p>
          </div>
          <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
            <p className="text-base font-semibold font-inter">
              Completed Assessments
            </p>
          </div>
        </div>
        <div className="bg-[#F9F9F9] flex flex-col p-8 gap-3">
          <div className="text-[#101828] text-3xl font-bold font-inter">
            Ongoing Assessments
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
            <p className="text-[#101828] text-lg text-left font-bold font-inter">
              Threat, Vulnerable Management (TVM)
            </p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99992C10.8334 9.53968 10.4603 9.16659 10 9.16659C9.53978 9.16659 9.16669 9.53968 9.16669 9.99992C9.16669 10.4602 9.53978 10.8333 10 10.8333Z"
                stroke="#3855F2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 4.99992C10.4603 4.99992 10.8334 4.62682 10.8334 4.16659C10.8334 3.70635 10.4603 3.33325 10 3.33325C9.53978 3.33325 9.16669 3.70635 9.16669 4.16659C9.16669 4.62682 9.53978 4.99992 10 4.99992Z"
                stroke="#3855F2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 16.6666C10.4603 16.6666 10.8334 16.2935 10.8334 15.8333C10.8334 15.373 10.4603 14.9999 10 14.9999C9.53978 14.9999 9.16669 15.373 9.16669 15.8333C9.16669 16.2935 9.53978 16.6666 10 16.6666Z"
                stroke="#3855F2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-6 ">
            <div className="flex gap-6">
              <div className="rounded-xl flex flex-col p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full">
                <p className="text-[#101828] text-base text-left font-semibold font-inter">
                  Assessment progress
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-[#101828] text-4xl text-left font-bold font-inter">
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
                <p className="text-[#101828] text-base text-left font-semibold font-inter">
                  Compliance progress{" "}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-[#101828] text-4xl text-left font-bold font-inter">
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
                <p className="text-[#101828] text-base text-left font-semibold font-inter">
                  Total questions{" "}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-[#101828] text-4xl text-left font-bold font-inter">
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
                <p className="text-[#101828] text-base text-left font-semibold font-inter">
                  Answered Questions
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-[#101828] text-4xl text-left font-bold font-inter">
                    481
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl flex flex-row p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                  Model
                </p>
                <p className="text-[#344054] text-sm text-left font-bold font-inter whitespace-nowrap">
                  Dow_8372
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                  Started Date
                </p>
                <p className="text-[#344054] text-sm text-left font-bold font-inter whitespace-nowrap">
                  21 May 2020
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                  Last Activity
                </p>
                <p className="text-[#344054] text-sm text-left font-bold font-inter whitespace-nowrap">
                  26 May 2020
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                  Assignees
                </p>
                <div className=""></div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                  Comments
                </p>
                <p className="text-[#3855F2] text-sm text-left font-bold font-inter underline whitespace-nowrap">
                  4
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                  Support Tickets
                </p>
                <p className="text-[#3855F2] text-sm text-left font-bold font-inter underline whitespace-nowrap">
                  231
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                  Actions Assigned
                </p>
                <p className="text-[#3855F2] text-sm text-left font-bold font-inter underline whitespace-nowrap">
                  321
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                  Actions Total
                </p>
                <p className="text-[#3855F2] text-sm text-left font-bold font-inter underline whitespace-nowrap">
                  512
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Link to="/dashboard/assessments/ongoing/example">
              <button className="py-3 px-6 rounded-2xl bg-[#3855F2] hover:bg-[#536aed] text-white text-base font-medium font-inter">
                Continue Assessment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentsOngoing;
