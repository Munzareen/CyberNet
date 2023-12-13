// import React, { useState, useRef, useEffect } from "react";
// import { useTranslation } from "react-i18next";

// const RoadmapFormDropdown = () => {
//   const { t } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(t("myself"));
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         className="text-[#475467] shadow-sm shadow-gray-200 border border-[#D0D5DD] flex items-center w-48 px-4 py-1 h-10 rounded-xl bg-[#FFFFFF] text-sm font-medium font-inter"
//         onClick={toggleDropdown}
//       >
//         <p className="text-[#475467]">{selectedOption}</p>
//       </button>
//       {isOpen && (
//         <div className="absolute z-50 w-48 bg-white shadow-md rounded-lg mt-1 border border-[#D0D5DD]">
//           <ul className="list-none p-0 m-0 z-50">
//             <li className="">
//               <p
//                 className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap text-left"
//                 href="#"
//               >
//                 {t("myself")}
//               </p>
//             </li>
//             <li className="">
//               <p
//                 className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap text-left"
//                 href="#"
//               >
//                 Jason
//               </p>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoadmapFormDropdown;

import React from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";

const RoadmapFormDropdown = () => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = React.useState({
    value: "myself",
    label: t("myself"),
  });

  const options = [
    { value: "myself", label: t("myself") },
    { value: "jason", label: "Jason" },
    // Add more options here
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      borderColor: "#D0D5DD",
      borderRadius: "12px",
      padding: "0px",
      margin: "0px",
      backgroundColor: "#FFFFFF",
      color: "#475467",
      fontWeight: "500",
      width: "250px",
      height: "30px", // Adjust the height
      fontSize: "0.875rem", // Reduce the font size
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#ECF1FD" : null,
      color: "#344054",
      padding: "10px",
      fontWeight: "500",
      fontSize: "0.875rem", // Reduce the font size
    }),
  };
  return (
    <Select
      value={selectedOption}
      onChange={setSelectedOption}
      options={options}
      styles={customStyles}
    />
  );
};

export default RoadmapFormDropdown;
