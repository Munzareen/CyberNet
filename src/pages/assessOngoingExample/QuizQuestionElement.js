import React from "react";
import AssignDropdown from "../../components/dropdown/AssignDropdown";
import AssignExampleDropdown from "../../components/dropdown/AssignExampleDropdown";
import InfoIcon from "../../components/icons/infoIcon";
import { useTranslation } from "react-i18next";
import QuizQuestionOptions from "./QuizQuestionOptions";

export default function QuizQuestionElement({ item, index, key }) {
  const { t } = useTranslation();
  // console.log(`IN QUESTION ELEMENT:`);
  // console.log(item);
  return (
    <div
      key={key}
      className="rounded-xl flex p-5 justify-between border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full"
    >
      <div className="flex w-full flex-col gap-6">
        <div className="flex w-full justify-between">
          <div className="flex">
            <p className="text-[#101828] text-base font-semibold font-inter text-left">
              {index} . {item.fullQuestion}
            </p>
          </div>
          <div className="flex gap-2 items-center h-6">
            <div>
              <InfoIcon></InfoIcon>
            </div>
            <AssignExampleDropdown />
          </div>
        </div>
        <div className="flex gap-3">
          {item.options.map((item, index) => {
            // console.log("inMAP");
            // console.log(item);
            return (
              <QuizQuestionOptions key={item.optionId} name={item.option} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
