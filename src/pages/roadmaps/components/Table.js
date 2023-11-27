import { useState } from "react";
import QuestionIcon from "./QuestionIcon";
import RoadmapFormDropdown from "./RoadmapFormDropdown";

import { useTranslation } from "react-i18next";
const Table = ({ setRmHeroDisplay }) => {
  const { t } = useTranslation();

  const [data, setData] = useState([
    {
      id: 1,
      actionItem: "ACT-621",
      description: t("cybersecurity"),
      assignee: "Trish Stratus",
      dueDate: "2022-01-01",
    },
    {
      id: 2,
      actionItem: "Dow-982",
      description: t("cybersecurity"),
      assignee: "Jimmy Montez",
      dueDate: "2022-02-01",
    },
    {
      id: 3,
      actionItem: "APT-001",
      description: t("cybersecurity"),
      assignee: "Liv Morgan",
      dueDate: "2022-03-01",
    },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const itemId = parseInt(event.target.value);
    if (event.target.checked) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    }
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#475467] uppercase tracking-wider"
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5"
                      onChange={() => {
                        const allItems = data.map((item) => item.id);
                        if (selectedItems.length === allItems.length) {
                          setSelectedItems([]);
                        } else {
                          setSelectedItems(allItems);
                        }
                      }}
                      checked={selectedItems.length === data.length}
                    />
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    <p className="text-left text-xs font-medium text-[#475467] uppercase tracking-wider whitespace-nowrap">
                      {t("actionitem")}
                    </p>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#475467] uppercase tracking-wider"
                  >
                    {t("description")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#475467] uppercase tracking-wider"
                  >
                    {t("assignee")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#475467] uppercase tracking-wider"
                  >
                    {t("duedate")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#475467] uppercase tracking-wider"
                  >
                    {t("actions")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                      <input
                        type="checkbox"
                        name="selectedItems"
                        value={item.id}
                        checked={selectedItems.includes(item.id)}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 rounded-sm"
                      />
                    </td>
                    <td className="px-6 py-3">
                      <button
                        onClick={() => {
                          setRmHeroDisplay("info");
                        }}
                        className="text-left text-xs font-medium text-[#101828] tracking-wider"
                      >
                        {item.actionItem}
                      </button>
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex gap-4 items-center">
                        <p className="text-left text-xs font-medium text-[#475467] tracking-wider">
                          {t("cybersecurity")}
                        </p>
                        <QuestionIcon />
                      </div>
                      <div></div>
                    </td>
                    <td className="px-2">
                      <div className="">
                        <RoadmapFormDropdown />
                      </div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-xs text-gray-500">
                      <input
                        type="date"
                        className="text-[#475467] shadow-sm shadow-gray-200 border border-[#D0D5DD] flex items-center w-48 px-4 py-1 h-10 rounded-xl bg-[#FFFFFF] text-xs font-medium font-inter outline-none"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <div className="flex gap-1">
                        <button
                          onClick={() => {
                            setRmHeroDisplay("comments_details");
                          }}
                          className="h-10 w-10 flex justify-center items-center"
                        >
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 6.68519H12M6 9.64815H9M8.25 1.5H9.75C13.4779 1.5 16.5 4.48477 16.5 8.16667C16.5 11.8486 13.4779 14.8333 9.75 14.8333H4.5C2.84315 14.8333 1.5 13.5068 1.5 11.8704V8.16667C1.5 4.48477 4.52208 1.5 8.25 1.5Z"
                              stroke="#475467"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => {
                            setRmHeroDisplay("info");
                          }}
                          className="h-10 w-10 flex justify-center items-center"
                        >
                          <svg
                            width="18"
                            height="14"
                            viewBox="0 0 18 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.01677 7.59415C0.90328 7.41445 0.846535 7.3246 0.81477 7.18602C0.79091 7.08192 0.79091 6.91775 0.81477 6.81366C0.846535 6.67507 0.90328 6.58522 1.01677 6.40552C1.95461 4.92054 4.74617 1.1665 9.00034 1.1665C13.2545 1.1665 16.0461 4.92054 16.9839 6.40552C17.0974 6.58522 17.1541 6.67507 17.1859 6.81366C17.2098 6.91775 17.2098 7.08192 17.1859 7.18602C17.1541 7.3246 17.0974 7.41445 16.9839 7.59415C16.0461 9.07914 13.2545 12.8332 9.00034 12.8332C4.74617 12.8332 1.95461 9.07914 1.01677 7.59415Z"
                              stroke="#475467"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.00034 9.49984C10.381 9.49984 11.5003 8.38055 11.5003 6.99984C11.5003 5.61913 10.381 4.49984 9.00034 4.49984C7.61962 4.49984 6.50034 5.61913 6.50034 6.99984C6.50034 8.38055 7.61962 9.49984 9.00034 9.49984Z"
                              stroke="#475467"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                        <div className="h-10 w-10 flex justify-center items-center">
                          <svg
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.66665 4.11096L5.2222 8.55541C4.60855 9.16906 4.60855 10.164 5.2222 10.7776C5.83585 11.3913 6.83077 11.3913 7.44442 10.7776L11.8889 6.33318C13.1162 5.10588 13.1162 3.11604 11.8889 1.88874C10.6616 0.661437 8.67172 0.661437 7.44442 1.88874L2.99997 6.33319C1.15902 8.17413 1.15903 11.1589 2.99998 12.9999C4.84093 14.8408 7.8257 14.8408 9.66665 12.9999L14.1111 8.55541"
                              stroke="#475467"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
