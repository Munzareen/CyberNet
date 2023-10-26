import React from "react";
import "./roadmaps.css";
import Navbar from "../../components/Navbar/Navbar";
import Drawer from "../../components/drawer/Drawer";
const Roadmaps = () => {
  return (
    <div className="flex">
      <Navbar />
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
          <div className="flex flex-col p-8 gap-5"></div>
        </div>
      </div>
      <Drawer />
    </div>
  );
};

export default Roadmaps;
