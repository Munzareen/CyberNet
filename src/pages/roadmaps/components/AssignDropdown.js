import { useState } from "react";

const AssignDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Myself");

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
        className="text-[#475467] shadow-sm shadow-gray-200 border border-[#D0D5DD] flex items-center w-48 px-4 py-1 h-10 rounded-xl bg-[#FFFFFF] text-sm font-medium font-inter"
        onClick={toggleDropdown}
      >
        <p className="text-[#475467]">{selectedOption}</p>
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

export default AssignDropdown;
