import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SupportComment() {
  const { t } = useTranslation();
  return (
    <div className="rounded-xl p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full">
      <div className="flex w-full gap-4">
        <div className="">
          <div className="image relative">
            <div className="rounded-full bg-slate-200 w-12 h-12 flex justify-center items-center">
              <div>-+-</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <div className="font-inter font-semibold text-[#101828] text-sm">
                Chatbot
              </div>
              <div className="font-inter font-medium text-[#667085] text-sm">
                {t("fiveminutesago")}
              </div>
            </div>
            <div className="font-inter font-medium text-[#475467] text-sm">
              {t("finishednotes")}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
