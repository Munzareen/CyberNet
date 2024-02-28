import React from "react";

export default function OngoingAssessmentsNavElement({
  isActive,
  departmentName,
  setCurrentAssignment,
}) {
  return isActive ? (
    <div
      onClick={() => setCurrentAssignment(departmentName)}
      className="bg-white shadow-sm shadow-[#979797] rounded-md flex justify-center items-center py-2 px-3 cursor-pointer"
    >
      <p className="text-[#344054] text-xs font-semibold font-inter">
        {departmentName}
      </p>
    </div>
  ) : (
    <div
      onClick={() => setCurrentAssignment(departmentName)}
      className="rounded-md flex justify-center items-center py-2 px-3 cursor-pointer"
    >
      <p className="text-[#667085] text-xs font-semibold font-inter">
        {departmentName}
      </p>
    </div>
  );
}
