import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DotDotDotIcon from "../icons/DotDotDotIcon";
export default function AssignExampleDropdown() {
  const { t } = useTranslation();

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
    <div className="relative flex items-start" ref={dropdownRef}>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="flex items-start"
      >
        <div className="flex items-start relative">
          <div className="absolute bg-yellow-500 rounded-full w-2 h-2 left-[-3px]"></div>
          <DotDotDotIcon></DotDotDotIcon>
        </div>
      </button>
      {open && (
        <div
          className={`bg-white rounded-lg absolute top-10 right-0 shadow-md transition-all duration-400 ease-in-out transform-gpu opacity-100 visible translate-y-0 border border-[#D0D5DD]`}
        >
          <ul className="list-none p-0 m-0">
            <li className="">
              <p
                className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap text-left"
                href="#"
              >
                {t("viewcomments")}
              </p>
            </li>
            <li className="">
              <p
                className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap text-left"
                href="#"
              >
                {t("viewsupport")}
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
