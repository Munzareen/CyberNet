import React, { useState, useRef, useEffect } from "react";

const RoadmapFormDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Myself");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
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
    <div className="" ref={dropdownRef}>
      <button
        className="text-[#475467] shadow-sm shadow-gray-200 border border-[#D0D5DD] flex items-center w-48 px-4 py-1 h-10 rounded-xl bg-[#FFFFFF] text-sm font-medium font-inter"
        onClick={toggleDropdown}
      >
        <p className="text-[#475467]">{selectedOption}</p>
      </button>
      {isOpen && (
        <div className="absolute z-50 w-48 bg-white shadow-md rounded-lg mt-1 border border-[#D0D5DD]">
          <ul className="list-none p-0 m-0 z-50">
            <li className="">
              <p
                className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap text-left"
                href="#"
              >
                Myself
              </p>
            </li>
            <li className="">
              <p
                className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap text-left"
                href="#"
              >
                Jason
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoadmapFormDropdown;
