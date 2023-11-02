import React from "react";
import "./roadmaps.css";
import Navbar from "../../components/Navbar/Navbar";
import Drawer from "../../components/drawer/Drawer";
import SearchIconbar from "../../components/icons/searchIconBar/SearchIconbar";
import RoadmapDropdown from "./components/RoadmapDropdown";
import Table from "./components/Table";
import { useState } from "react";
import TableMedium from "./components/TableMedium";
import CrossIcon from "../../components/icons/CrossIcon";
import SpaceshipIcon from "../../components/icons/SpaceshipIcon";
import RoadmapsIcon from "../../components/icons/navIcons/RoadmapsIcon";
import BlueRoadmapsIcon from "../../components/icons/BlueRoadmapsIcon";
import Comment from "../../components/drawer/Comment";
import RoadmapEditCommentsDropdown from "./components/RoadmapEditCommentsDropdown";

const Roadmaps = () => {
  const [priority, setPriority] = useState("high");
  const [rmHeroDisplay, setRmHeroDisplay] = useState("");
  const [viewCommentsFlag, setViewCommentsFlag] = useState(true);

  return (
    <>
      <div className="r-assessments-initial bg-[#14143E] pt-4 w-full">
        <div className="bg-white rounded-tl-3xl py-4 h-full flex flex-col">
          {/* <div className="text-slate-700 font-medium ">Assessments page</div> */}
          <div className="mt-5 flex flex-row gap-4 px-8">
            <button className="py-2 px-3 bg-[#E5E8FD] rounded-2xl">
              <p className="text-[#3855F2] text-base font-semibold font-inter">
                All
              </p>
            </button>
            <button className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
              <p className="text-base font-semibold font-inter">Assigned</p>
            </button>
            <button className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
              <p className="text-base font-semibold font-inter">Unassigned</p>
            </button>
          </div>
          <div className="bg-[#F9F9F9] flex flex-col p-8 gap-3">
            <div className="text-[#101828] text-3xl font-bold font-inter">
              All roadmaps
            </div>
            <div className="flex gap-2 border border-[#F2F4F7] rounded-md p-1">
              <button
                className={
                  "rounded-md flex justify-center items-center py-2 px-3 gap-2" +
                  (priority === "high"
                    ? "  bg-white shadow-sm shadow-[#979797] "
                    : "")
                }
                onClick={() => setPriority("high")}
              >
                <p className="text-[#F23838] text-xs font-semibold font-inter">
                  High priority
                </p>
                <div className="rounded-full bg-[#F3E1E2] px-2 py-1">
                  <p className="text-[#F23838] text-xs font-medium font-inter">
                    52
                  </p>
                </div>
              </button>
              <button
                className={
                  "rounded-md flex justify-center items-center py-2 px-3 gap-2" +
                  (priority === "medium"
                    ? "  bg-white shadow-sm shadow-[#979797] "
                    : "")
                }
                onClick={() => setPriority("medium")}
              >
                <p className="text-[#C238F2] text-xs font-semibold font-inter">
                  Medium priority{" "}
                </p>
                <div className="rounded-full bg-[#F2F4F7] px-2 py-1">
                  <p className="text-[#344054] text-xs font-medium font-inter">
                    23
                  </p>
                </div>
              </button>
              <button
                className={
                  "rounded-md flex justify-center items-center py-2 px-3 gap-2" +
                  (priority === "low"
                    ? "  bg-white shadow-sm shadow-[#979797] "
                    : "")
                }
                onClick={() => setPriority("low")}
              >
                <p className="text-[#06CA02] text-xs font-semibold font-inter">
                  Low priority{" "}
                </p>
                <div className="rounded-full bg-[#F2F4F7] px-2 py-1">
                  <p className="text-[#344054] text-xs font-medium font-inter">
                    76
                  </p>
                </div>
              </button>
            </div>
          </div>
          {priority === "high" ? (
            <div className="flex flex-col p-8 gap-5">
              <div className="flex justify-between">
                <p className="text-[#344054] text-lg font-semibold font-inter">
                  High priority roadmaps
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
                    <RoadmapDropdown />
                  </div>
                </div>
              </div>
              <div className="table">
                <Table setRmHeroDisplay={setRmHeroDisplay} />
              </div>
            </div>
          ) : priority === "medium" ? (
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
                    <RoadmapDropdown />
                  </div>
                </div>
              </div>
              <div className="table">
                <TableMedium />
              </div>
            </div>
          ) : priority === "low" ? (
            <div className="flex flex-col p-8 gap-5">
              <div className="flex justify-between">
                <p className="text-[#344054] text-lg font-semibold font-inter">
                  Low priority roadmaps
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
                    <RoadmapDropdown />
                  </div>
                </div>
              </div>
              <div className="table">
                <Table />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {rmHeroDisplay == "info" && (
        <div
          className="fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out flex justify-center items-center"
          onClick={() => setRmHeroDisplay(false)}
        >
          <div
            className="bg-white rounded-2xl flex flex-col p-8 gap-4 w-1/3"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-between">
              <div className="bg-[#ECF1FD] border-[8px] border-[#F9F5FF] flex justify-center items-center w-12 h-12">
                <BlueRoadmapsIcon />
              </div>
              <button
                onClick={() => {
                  setRmHeroDisplay(false);
                }}
                className="w-12 h-12 flex justify-center items-center"
              >
                <CrossIcon />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold font-inter text-left text-[#101828]">
                ACT-6521
              </p>
              <p className="text-sm font-medium font-inter text-left text-[#475467]">
                Educational assessment or educational evaluation is the
                systematic process of documenting and using empirical data on
                the knowledge, skill, attitudes, aptitude{" "}
              </p>
            </div>
            <div className="rounded-xl flex flex-row p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                  Assigned to
                </p>
                <p className="text-[#344054] text-sm text-left font-bold font-inter whitespace-nowrap">
                  My self
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                  Due Date
                </p>
                <p className="text-[#344054] text-sm text-left font-bold font-inter whitespace-nowrap">
                  21 May 2020
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                  Comments
                </p>
                <p className="text-[#3855F2] text-sm text-left font-bold font-inter underline whitespace-nowrap">
                  7 Comments
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#475467] text-xs text-left font-medium font-inter whitespace-nowrap">
                  Actionable items
                </p>
                <p className="text-[#3855F2] text-sm text-left font-bold font-inter underline whitespace-nowrap">
                  5 Actions
                </p>
              </div>
            </div>
            <div className="flex gap-7 w-full justify-center pt-5">
              <button
                onClick={() => {
                  setRmHeroDisplay(false);
                }}
                className="w-56 py-3 px-6 rounded-2xl bg-white hover:bg-[#f7faff] border border-[#344054] "
              >
                <p className="text-[#344054] text-base font-medium font-inter">
                  Edit
                </p>
              </button>
              <button className="w-56 py-3 px-6 rounded-2xl bg-[#3855F2] hover:bg-[#536aed] ">
                <p className="text-white text-base font-medium font-inter">
                  Assign to other
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
      {rmHeroDisplay == "comments_details" && (
        <div
          className="fixed z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out flex justify-center"
          onClick={() => setRmHeroDisplay(false)}
        >
          <div
            className="bg-white rounded-2xl flex flex-col p-8 m-8 gap-4 w-1/2 overflow-y-scroll overflow-x-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-between">
              <div className="bg-[#ECF1FD] border-[8px] border-[#F9F5FF] flex justify-center items-center w-12 h-12">
                <BlueRoadmapsIcon />
              </div>
              <button
                onClick={() => {
                  setRmHeroDisplay(false);
                }}
                className="w-12 h-12 flex justify-center items-center"
              >
                <CrossIcon />
              </button>
            </div>
            <div className="w-full flex justify-between gap-4">
              <div className="w-3/5 flex flex-col gap-2">
                <p className="text-lg font-semibold font-inter text-left text-[#101828]">
                  ACT-6521
                </p>
                <p className="text-sm font-medium font-inter text-left text-[#475467]">
                  Educational assessment or educational evaluation is the
                  systematic process of documenting and using empirical data on
                  the knowledge, skill, attitudes, aptitude.
                </p>
                <p className="text-sm font-medium font-inter text-left text-[#475467]">
                  Educational assessment or educational evaluation is the
                  systematic process of documenting and using empirical data on
                  the knowledge, skill, attitudes, aptitude.
                </p>
                <p className="text-sm font-medium font-inter text-left text-[#475467]">
                  Educational assessment or educational evaluation is the
                  systematic process of documenting and using empirical data on
                  the knowledge, skill, attitudes, aptitude.
                </p>
              </div>
              <div className="w-2/5 flex flex-col border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] rounded-xl p-5 items-start justify-start gap-3">
                {" "}
                <RoadmapEditCommentsDropdown />
                <div className="flex w-full h-full">
                  <div className="w-1/2 h-full flex flex-col">
                    <div className="h-5 flex items-center">
                      <p className="text-[#475467] text-xs font-medium font-inter text-left">
                        Assignee name
                      </p>
                    </div>
                    <div className="h-5 flex items-center">
                      <p className="text-[#475467] text-xs font-medium font-inter text-left">
                        Reporter
                      </p>
                    </div>
                    <div className="h-5 flex items-center">
                      <p className="text-[#475467] text-xs font-medium font-inter text-left">
                        Status
                      </p>
                    </div>
                    <div className="h-5 flex items-center">
                      <p className="text-[#475467] text-xs font-medium font-inter text-left">
                        Due date
                      </p>
                    </div>
                    <div className="h-5 flex items-center">
                      <p className="text-[#475467] text-xs font-medium font-inter text-left">
                        Priority
                      </p>
                    </div>
                    <div className="h-5 flex items-center">
                      <p className="text-[#475467] text-xs font-medium font-inter text-left">
                        Reporter
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 h-full flex flex-col">
                    {" "}
                    <div className="h-5 flex items-center">
                      <p className="text-[#344054] text-sm font-semibold font-inter text-left">
                        John Lynx
                      </p>
                    </div>
                    <div className="h-5 flex items-center">
                      <p className="text-[#344054] text-sm font-semibold font-inter text-left">
                        rfasf@gmail.com
                      </p>
                    </div>
                    <div className="h-5 flex items-center">
                      <p className="text-[#344054] text-sm font-semibold font-inter text-left">
                        In progress
                      </p>
                    </div>
                    <div className="h-5 flex items-center">
                      <p className="text-[#344054] text-sm font-semibold font-inter text-left">
                        12 March 2021
                      </p>
                    </div>
                    <div className="h-5 flex items-center">
                      <p className="text-[#344054] text-sm font-semibold font-inter text-left">
                        High
                      </p>
                    </div>
                    <div className="h-5 flex items-center">
                      <p className="text-[#344054] text-sm font-semibold font-inter text-left">
                        rfasf@gmail.com
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full justify-between mt-4">
              <p className="text-[#101828] text-lg font-semibold font-inter text-left">
                Comments
              </p>
              <Comment />
              <Comment />
              <Comment />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Roadmaps;
