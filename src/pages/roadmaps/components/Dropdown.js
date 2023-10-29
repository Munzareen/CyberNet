import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort By");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="shadow-sm shadow-gray-200 border border-[#D0D5DD] flex items-center justify-center w-30 px-5 h-10 rounded-xl bg-[#FFFFFF] text-[#475467] text-sm font-semibold font-inter"
        onClick={toggleDropdown}
      >
        <span className="text-[#475467]">{selectedOption}</span>
        <svg
          className="fill-current h-4 w-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M6 8l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white shadow-lg rounded mt-1">
          <ul>
            <li
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick("Option 1")}
            >
              Option 1
            </li>
            <li
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick("Option 2")}
            >
              Option 2
            </li>
            <li
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick("Option 3")}
            >
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
