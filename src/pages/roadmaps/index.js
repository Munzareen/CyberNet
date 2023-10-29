import React from "react";
import "./roadmaps.css";
import Navbar from "../../components/Navbar/Navbar";
import Drawer from "../../components/drawer/Drawer";
import SearchIconbar from "../../components/icons/searchIconBar/SearchIconbar";
import Dropdown from "./components/Dropdown";
import Table from "./components/Table";
const Roadmaps = () => {
  return (
    <div className="r-assessments-initial bg-[#14143E] pt-4 w-full">
      <div className="bg-white rounded-tl-3xl py-4 h-full flex flex-col">
        {/* <div className="text-slate-700 font-medium ">Assessments page</div> */}
        <div className="mt-5 flex flex-row gap-4 px-8">
          <div className="py-2 px-3 bg-[#E5E8FD] rounded-2xl">
            <p className="text-[#3855F2] text-base font-semibold font-inter">
              All
            </p>
          </div>
          <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
            <p className="text-base font-semibold font-inter">Assigned</p>
          </div>
          <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
            <p className="text-base font-semibold font-inter">Unassigned</p>
          </div>
        </div>
        <div className="bg-[#F9F9F9] flex flex-col p-8 gap-3">
          <div className="text-[#101828] text-3xl font-bold font-inter">
            All roadmaps
          </div>
          <div className="flex gap-2 border border-[#F2F4F7] rounded-md p-1">
            <div className="bg-white shadow-sm shadow-[#979797] rounded-md flex justify-center items-center py-2 px-3 gap-2">
              <p className="text-[#F23838] text-xs font-semibold font-inter">
                High priority
              </p>
              <div className="rounded-full bg-[#F3E1E2] px-2 py-1">
                <p className="text-[#F23838] text-xs font-medium font-inter">
                  52
                </p>
              </div>
            </div>
            <div className="rounded-md flex justify-center items-center py-2 px-3">
              <p className="text-[#C238F2] text-xs font-semibold font-inter">
                Medium priority{" "}
              </p>
              <div className="rounded-full bg-[#F2F4F7] px-2 py-1">
                <p className="text-[#344054] text-xs font-medium font-inter">
                  23
                </p>
              </div>
            </div>
            <div className="rounded-md flex justify-center items-center py-2 px-3">
              <p className="text-[#06CA02] text-xs font-semibold font-inter">
                Low priority{" "}
              </p>
              <div className="rounded-full bg-[#F2F4F7] px-2 py-1">
                <p className="text-[#344054] text-xs font-medium font-inter">
                  76
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-8 gap-5">
          <div className="flex justify-between">
            <p className="text-[#344054] text-lg font-semibold font-inter">
              Medium priority roadmaps
            </p>
            <div className="flex gap-5">
              <div className="search">
                <div className="shadow-sm shadow-gray-200 border border-[#D0D5DD] flex items-center w-60 px-5 py-2 rounded-xl bg-[#FFFFFF] text-[#667085] focus:outline-none h-10">
                  <div className="mr-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 16.5L13.5834 13.5833M15.6667 8.58333C15.6667 12.4954 12.4954 15.6667 8.58333 15.6667C4.67132 15.6667 1.5 12.4954 1.5 8.58333C1.5 4.67132 4.67132 1.5 8.58333 1.5C12.4954 1.5 15.6667 4.67132 15.6667 8.58333Z"
                        stroke="#667085"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full bg-[#FFFFFF] text-[#667085] font-inter font-medium text-base leading-6 focus:outline-none"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="dropdown">
                <Dropdown />
              </div>
            </div>
          </div>
          <div className="table">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
