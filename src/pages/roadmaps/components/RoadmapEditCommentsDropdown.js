import React, { useState, useRef, useEffect } from "react";
export default function RoadmapEditCommentsDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative flex justify-center items-center"
      ref={dropdownRef}
    >
      <button
        className="shadow-sm shadow-gray-200 border border-[#D0D5DD] flex items-center justify-center w-30 px-5 h-10 rounded-xl bg-[#FFFFFF] text-[#475467] text-sm font-semibold font-inter"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className={open ? "text-[#475467]" : "text-[#475467]"}>
          In progress
        </span>
        <svg
          className="fill-current h-4 w-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M6 8l4 4 4-4"
            fill="none"
            stroke={open ? "#475467" : "#475467"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          className={`bg-white rounded-lg absolute top-14 right-0 shadow-md transition-all duration-400 ease-in-out transform-gpu opacity-100 visible translate-y-0 border border-[#D0D5DD]`}
        >
          <ul className="list-none p-0 m-0">
            <li className="">
              <p
                className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap"
                href="#"
              >
                Unassigned
              </p>
            </li>
            <li className="">
              <p
                className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap"
                href="#"
              >
                In progress
              </p>
            </li>
            <li className="">
              <p
                className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap"
                href="#"
              >
                In revision
              </p>
            </li>
            <li className="">
              <p
                className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap"
                href="#"
              >
                In review
              </p>
            </li>
            <li className="">
              <p
                className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap"
                href="#"
              >
                Completed
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
