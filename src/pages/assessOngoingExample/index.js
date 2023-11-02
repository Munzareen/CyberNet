import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Drawer from "../../components/drawer/Drawer";
import AssignDropdown from "../../components/dropdown/AssignDropdown";

const AssessOngoingExample = () => {
  return (
    <div className="r-assessments-initial bg-[#14143E]  w-full h-screen overflow-y-hidden relative">
      <div className="bg-[#14143E] w-full h-4"></div>
      <div className="bg-white rounded-tl-3xl py-4 flex flex-col overflow-y-scroll absolute h-full w-full">
        {/* <div className="text-slate-700 font-medium ">Assessments page</div> */}
        <div className="my-5 flex flex-row gap-4 px-8">
          <div className="py-2 px-3 bg-[#E5E8FD] rounded-2xl">
            <p className="text-[#3855F2] text-base font-semibold font-inter">
              TVM 0/712
            </p>
          </div>
          <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
            <p className="text-base font-semibold font-inter">AVA (12/62)</p>
          </div>
          <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
            <p className="text-base font-semibold font-inter">MKR (0/45)</p>
          </div>
          <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
            <p className="text-base font-semibold font-inter">APT (0/234) </p>
          </div>
          <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
            <p className="text-base font-semibold font-inter">LRC (0/45) </p>
          </div>
        </div>
        <div className="bg-[#F9F9F9] flex flex-col p-8 gap-3">
          <div className="flex gap-6 items-center">
            <p className="text-[#101828] text-3xl font-bold font-inter">
              Threat, Vulnerable Management (TVM)
            </p>
            <div className="flex justify-center items-center ml-4 p-2 h-min w-min rounded-full bg-[#ECF1FD]">
              <p className="text-xs text-[#3855F2] whitespace-nowrap">
                712 Questions
              </p>
            </div>{" "}
          </div>
          <div className="flex gap-2 border border-[#F2F4F7] rounded-md p-1">
            <div className="bg-white shadow-sm shadow-[#979797] rounded-md flex justify-center items-center py-2 px-3">
              <p className="text-[#344054] text-xs font-semibold font-inter">
                Manage IT and OT
              </p>
              <div className="flex justify-center items-center ml-4 p-2 h-min w-min rounded-full bg-[#ECF1FD]">
                <p className="text-xs text-[#3855F2] whitespace-nowrap">1/12</p>
              </div>{" "}
            </div>
            <div className="rounded-md flex justify-center items-center py-2 px-3">
              <p className="text-[#667085] text-xs font-semibold font-inter">
                Information Asset
              </p>
              <div className="flex justify-center items-center ml-4 p-2 h-min w-min rounded-full bg-[#F2F4F7]">
                <p className="text-xs text-[#344054] whitespace-nowrap">0/65</p>
              </div>{" "}
            </div>
            <div className="rounded-md flex justify-center items-center py-2 px-3">
              <p className="text-[#667085] text-xs font-semibold font-inter">
                Manage configuration
              </p>
              <div className="flex justify-center items-center ml-4 p-2 h-min w-min rounded-full bg-[#F2F4F7]">
                <p className="text-xs text-[#344054] whitespace-nowrap">0/14</p>
              </div>{" "}
            </div>
            <div className="rounded-md flex justify-center items-center py-2 px-3">
              <p className="text-[#667085] text-xs font-semibold font-inter">
                Manage activities
              </p>
              <div className="flex justify-center items-center ml-4 p-2 h-min w-min rounded-full bg-[#F2F4F7]">
                <p className="text-xs text-[#344054] whitespace-nowrap">0/9</p>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col p-8 gap-5 ">
          <div className="flex flex-col gap-6 ">
            <div className="rounded-xl flex p-5 justify-between border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="text-[#101828] text-lg font-semibold font-inter text-left">
                      1 . The IT and OT assets inventory attributes
                      cybersecurity activities for example location assets
                      parity system and formwork.
                    </p>
                  </div>
                  <div className="flex gap-2 pt-2 items-center h-6">
                    <div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 10.8V8M8 5.2H8.007M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                          stroke="#98A2B3"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <AssignDropdown />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-xl py-2 px-4 shadow-sm shadow-[#d0d0d0] border border-[#D0D5DD]">
                    <p className="text-[#344054] text-sm font-semibold font-inter">
                      Not implemented
                    </p>
                  </div>
                  <div className="rounded-xl py-2 px-4 shadow-sm shadow-[#d0d0d0] border border-[#D0D5DD]">
                    <p className="text-[#344054] text-sm font-semibold font-inter">
                      Partially implemented
                    </p>
                  </div>
                  <div className="rounded-xl py-2 px-4 shadow-sm shadow-[#d0d0d0] border border-[#D0D5DD] bg-[#ECF1FD]">
                    <p className="text-[#3855F2] text-sm font-semibold font-inter">
                      Largely implemented
                    </p>
                  </div>
                  <div className="rounded-xl py-2 px-4 shadow-sm shadow-[#d0d0d0] border border-[#D0D5DD]">
                    <p className="text-[#344054] text-sm font-semibold font-inter">
                      Fully implemented
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl flex p-5 justify-between border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="text-[#101828] text-lg font-semibold font-inter text-left">
                      1 . The IT and OT assets inventory attributes
                      cybersecurity activities for example location assets
                      parity system and formwork.
                    </p>
                  </div>
                  <div className="flex gap-2 pt-2 items-center h-6">
                    <div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 10.8V8M8 5.2H8.007M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                          stroke="#98A2B3"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <AssignDropdown />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-xl py-2 px-4 shadow-sm shadow-[#d0d0d0] border border-[#D0D5DD]">
                    <p className="text-[#344054] text-sm font-semibold font-inter">
                      Not implemented
                    </p>
                  </div>
                  <div className="rounded-xl py-2 px-4 shadow-sm shadow-[#d0d0d0] border border-[#D0D5DD]">
                    <p className="text-[#344054] text-sm font-semibold font-inter">
                      Partially implemented
                    </p>
                  </div>
                  <div className="rounded-xl py-2 px-4 shadow-sm shadow-[#d0d0d0] border border-[#D0D5DD] bg-[#ECF1FD]">
                    <p className="text-[#3855F2] text-sm font-semibold font-inter">
                      Largely implemented
                    </p>
                  </div>
                  <div className="rounded-xl py-2 px-4 shadow-sm shadow-[#d0d0d0] border border-[#D0D5DD]">
                    <p className="text-[#344054] text-sm font-semibold font-inter">
                      Fully implemented
                    </p>
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

export default AssessOngoingExample;
