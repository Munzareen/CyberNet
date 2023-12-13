import { useState, useRef } from "react";
import QuestionIcon from "./QuestionIcon";
import RoadmapFormDropdown from "./RoadmapFormDropdown";
import CommentsIcon from "../../../components/icons/CommentsIcon";
import UploadClipIcon from "../../../components/icons/UploadClipIcon";
import EyeViewIcon from "../../../components/icons/EyeViewIcon";
import { useTranslation } from "react-i18next";
const Table = ({ setRmHeroDisplay }) => {
  const { t } = useTranslation();
  const fileInput = useRef(null);

  const handleIconClick = () => {
    fileInput.current.click();
  };

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
    {
      id: 3,
      actionItem: "APT-001",
      description: t("cybersecurity"),
      assignee: "Liv Morgan",
      dueDate: "2022-03-01",
    },
    {
      id: 3,
      actionItem: "APT-001",
      description: t("cybersecurity"),
      assignee: "Liv Morgan",
      dueDate: "2022-03-01",
    },
    {
      id: 3,
      actionItem: "APT-001",
      description: t("cybersecurity"),
      assignee: "Liv Morgan",
      dueDate: "2022-03-01",
    },
    {
      id: 3,
      actionItem: "APT-001",
      description: t("cybersecurity"),
      assignee: "Liv Morgan",
      dueDate: "2022-03-01",
    },
    {
      id: 3,
      actionItem: "APT-001",
      description: t("cybersecurity"),
      assignee: "Liv Morgan",
      dueDate: "2022-03-01",
    },
    {
      id: 3,
      actionItem: "APT-001",
      description: t("cybersecurity"),
      assignee: "Liv Morgan",
      dueDate: "2022-03-01",
    },
    {
      id: 3,
      actionItem: "APT-001",
      description: t("cybersecurity"),
      assignee: "Liv Morgan",
      dueDate: "2022-03-01",
    },
    {
      id: 3,
      actionItem: "APT-001",
      description: t("cybersecurity"),
      assignee: "Liv Morgan",
      dueDate: "2022-03-01",
    },
    {
      id: 3,
      actionItem: "APT-001",
      description: t("cybersecurity"),
      assignee: "Liv Morgan",
      dueDate: "2022-03-01",
    },
    {
      id: 3,
      actionItem: "APT-001",
      description: t("cybersecurity"),
      assignee: "Liv Morgan",
      dueDate: "2022-03-01",
    },
    {
      id: 3,
      actionItem: "APT-001",
      description: t("cybersecurity"),
      assignee: "Liv Morgan",
      dueDate: "2022-03-01",
    },
    {
      id: 3,
      actionItem: "APT-001",
      description: t("cybersecurity"),
      assignee: "Liv Morgan",
      dueDate: "2022-03-01",
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
                          <CommentsIcon></CommentsIcon>
                        </button>
                        <button
                          onClick={() => {
                            setRmHeroDisplay("info");
                          }}
                          className="h-10 w-10 flex justify-center items-center"
                        >
                          <EyeViewIcon></EyeViewIcon>{" "}
                        </button>
                        <div>
                          <input
                            type="file"
                            ref={fileInput}
                            style={{ display: "none" }}
                            onChange={null}
                          ></input>
                          <div
                            className="h-10 w-10 flex justify-center items-center cursor-pointer"
                            onClick={handleIconClick}
                          >
                            <UploadClipIcon></UploadClipIcon>
                          </div>
                        </div>{" "}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="m-3 py-3 px-6 w-64 rounded-2xl bg-[#3855F2] hover:bg-[#536aed] text-white text-sm font-medium font-inter">
              {t("loadmore")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
