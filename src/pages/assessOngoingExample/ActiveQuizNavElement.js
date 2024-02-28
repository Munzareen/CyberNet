import React from "react";

export default function ActiveQuizNavElement({
  isActive,
  name,
  id,
  questions,
  ...props
}) {
  return isActive ? (
    <div
      {...props}
      className="hover:cursor-pointer py-2 px-3 bg-[#E5E8FD] rounded-2xl"
    >
      <p className="text-[#3855F2] text-sm font-semibold font-inter">{`${name} (0/${questions})`}</p>
    </div>
  ) : (
    <div
      {...props}
      className="hover:cursor-pointer py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl"
    >
      <p className="text-sm font-semibold font-inter">{`${name} (0/${questions})`}</p>
    </div>
  );
}
