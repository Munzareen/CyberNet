import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

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
        <div className="flex items-start">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99992C10.8334 9.53968 10.4603 9.16659 10 9.16659C9.53978 9.16659 9.16669 9.53968 9.16669 9.99992C9.16669 10.4602 9.53978 10.8333 10 10.8333Z"
              stroke="#3855F2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 4.99992C10.4603 4.99992 10.8334 4.62682 10.8334 4.16659C10.8334 3.70635 10.4603 3.33325 10 3.33325C9.53978 3.33325 9.16669 3.70635 9.16669 4.16659C9.16669 4.62682 9.53978 4.99992 10 4.99992Z"
              stroke="#3855F2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 16.6666C10.4603 16.6666 10.8334 16.2935 10.8334 15.8333C10.8334 15.373 10.4603 14.9999 10 14.9999C9.53978 14.9999 9.16669 15.373 9.16669 15.8333C9.16669 16.2935 9.53978 16.6666 10 16.6666Z"
              stroke="#3855F2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
