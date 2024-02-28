import React from "react";

export default function QuizQuestionOptions({ isActive, name, key }) {
  // console.log("IN QUESTION OPTIONS");
  return isActive ? (
    <div
      key={key}
      className="hover:cursor-pointer rounded-xl py-2 px-4 shadow-sm shadow-[#d0d0d0] border border-[#D0D5DD] bg-[#ECF1FD]"
    >
      <p className="text-[#3855F2] text-xs font-semibold font-inter">{name}</p>
    </div>
  ) : (
    <div
      key={key}
      className="hover:cursor-pointer rounded-xl py-2 px-4 shadow-sm shadow-[#d0d0d0] border border-[#D0D5DD]"
    >
      <p className="text-[#344054] text-xs font-semibold font-inter">{name}</p>
    </div>
  );
}
