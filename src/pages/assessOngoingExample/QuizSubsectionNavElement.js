import { t } from "i18next";
import React from "react";

export default function QuizSubsectionNavElement({
  isActive,
  onClick,
  questions,
  name,
  id,
}) {
  return isActive ? (
    <div
      onClick={onClick}
      className="hover:cursor-pointer bg-white shadow-sm shadow-[#979797] rounded-md flex justify-center items-center py-2 px-3"
    >
      <p className="text-[#344054] text-xs font-semibold font-inter">{name}</p>
      <div className="flex justify-center items-center ml-4 p-2 h-min w-min rounded-full bg-[#ECF1FD]">
        <p className="text-xs text-[#3855F2] whitespace-nowrap">
          0/{questions}
        </p>
      </div>{" "}
    </div>
  ) : (
    <div
      onClick={onClick}
      className="hover:cursor-pointer rounded-md flex justify-center items-center py-2 px-3"
    >
      <p className="text-[#667085] text-xs font-semibold font-inter">{name}</p>
      <div className="flex justify-center items-center ml-4 p-2 h-min w-min rounded-full bg-[#F2F4F7]">
        <p className="text-xs text-[#344054] whitespace-nowrap">
          0/{questions}
        </p>
      </div>{" "}
    </div>
  );
}
