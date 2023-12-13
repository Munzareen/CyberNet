// import React, { useState, useRef, useEffect } from "react";
// import { useTranslation } from "react-i18next";

// export default function RoadmapDropdown() {
//   const { t } = useTranslation();

//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpen(false);
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
//     <div
//       className="relative flex justify-center items-center"
//       ref={dropdownRef}
//     >
//       <button
//         className="shadow-sm shadow-gray-200 border border-[#D0D5DD] flex items-center justify-center w-30 px-5 h-10 rounded-xl bg-[#FFFFFF] text-[#475467] text-sm font-semibold font-inter"
//         onClick={() => {
//           setOpen(!open);
//         }}
//       >
//         <span className={open ? "text-[#3855F2]" : "text-[#475467]"}>
//           {t("sortby")}
//         </span>
//         <svg
//           className="fill-current h-4 w-4 ml-2"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//         >
//           <path
//             d="M6 8l4 4 4-4"
//             fill="none"
//             stroke={open ? "#3855F2" : "currentColor"}
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </button>

//       {open && (
//         <div
//           className={`bg-white rounded-lg absolute top-14 right-0 shadow-md transition-all duration-400 ease-in-out transform-gpu opacity-100 visible translate-y-0 border border-[#D0D5DD]`}
//         >
//           <ul className="list-none p-0 m-0">
//             <li className="">
//               <p
//                 className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap"
//                 href="#"
//               >
//                 {t("unassigned")}
//               </p>
//             </li>
//             <li className="">
//               <p
//                 className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap"
//                 href="#"
//               >
//                 {t("inprogress")}
//               </p>
//             </li>
//             <li className="">
//               <p
//                 className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap"
//                 href="#"
//               >
//                 {t("inrevision")}
//               </p>
//             </li>
//             <li className="">
//               <p
//                 className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap"
//                 href="#"
//               >
//                 {t("inreview")}
//               </p>
//             </li>
//             <li className="">
//               <p
//                 className="text-sm font-semibold font-inter text-[#344054] py-3 px-5 hover:bg-[#ECF1FD] cursor-pointer whitespace-nowrap"
//                 href="#"
//               >
//                 {t("completed")}
//               </p>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";

const RoadmapDropdown = () => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = React.useState(null);

  const options = [
    { value: "unassigned", label: t("unassigned") },
    { value: "inprogress", label: t("inprogress") },
    { value: "inrevision", label: t("inrevision") },
    { value: "inreview", label: t("inreview") },
    { value: "completed", label: t("completed") },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      borderColor: "#D0D5DD",
      borderRadius: "12px",
      padding: "0px",
      backgroundColor: "#FFFFFF",
      color: "#475467",
      fontWeight: "500",
      width: "150px",
      height: "30px",
      fontSize: "0.875rem",
      borderRadius: "8px", // Add this line
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#ECF1FD" : null,
      color: "#344054",
      padding: "8px",
      fontWeight: "500",
      fontSize: "0.875rem",
      borderRadius: "8px", // Add this line
    }),
  };

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={customStyles}
        placeholder={t("sortby")}
      />
    </>
  );
};

export default RoadmapDropdown;
