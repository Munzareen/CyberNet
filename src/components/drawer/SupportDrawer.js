import React from "react";
import SupportComment from "./SupportComment";
import { useState } from "react";
import { MyContext } from "../../MyContext";
import { useContext } from "react";

import { useTranslation } from "react-i18next";
import { useViewQuestionSupportQuery } from "../../store/services/questionService";

export default function SupportDrawer({ children }) {
  const { t } = useTranslation();
  const [viewCommentsFlag, setViewCommentsFlag] = useState(true);
  const { isSupportOpen, setIsSupportOpen } = useContext(MyContext);
  const {
    isLoading: isSupportLoading,
    isSuccess: isSupportSuccess,
    data: supportData,
    error: supportError,
    isError: isSupportError,
    isFetching: isSupportFetching,
  } = useViewQuestionSupportQuery(1);
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out flex" +
        (isSupportOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className="h-full flex-grow"
        onClick={() => {
          setIsSupportOpen(false);
          setTimeout(() => {
            setViewCommentsFlag(true);
          }, 300);
        }}
      ></section>
      <section
        className={
          "w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform flex p-0" +
          (isSupportOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="flex-grow relative flex flex-col overflow-y-scroll h-screen">
          <div className="flex flex-col flex-grow">
            {viewCommentsFlag ? (
              <>
                <div className="border-b-2 border-gray-300 flex justify-between px-8 py-5 items-center">
                  <p className="text-[#101828] text-xl font-semibold font-inter">
                    {t("support")}
                  </p>
                  <button
                    onClick={() => {
                      setIsSupportOpen(false);
                      setTimeout(() => {
                        setViewCommentsFlag(true);
                      }, 300);
                    }}
                    className="p-4"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1L1 11M1 1L11 11"
                        stroke="#667085"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col flex-grow gap-5 px-8">
                  <div className="mt-5 flex flex-row gap-4 ">
                    <div className="py-2 px-3 bg-[#E5E8FD] rounded-2xl">
                      <p className="text-[#3855F2] text-sm font-semibold font-inter">
                        {t("newupdates")}
                      </p>
                    </div>
                    <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
                      <p className="text-sm font-semibold font-inter">
                        {t("allcomments")}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full">
                    <div className="">
                      <div className="flex justify-between">
                        <div className="text-base font-inter font-semibold text-[#101828]">
                          {supportData
                            ? supportData.data[0].supportHeading
                            : t("updateversion")}
                        </div>
                      </div>
                      <div className="font-inter font-medium text-[#475467] text-sm">
                        {t("fiveminutesago")}
                      </div>
                      <div className="flex gap-3 mt-3">
                        <button className="font-inter font-semibold text-[#475467] text-sm">
                          {t("dismiss")}
                        </button>
                        <button
                          onClick={() => setViewCommentsFlag(false)}
                          className="font-inter font-semibold text-[#3855F2] text-sm"
                        >
                          {t("viewcomments")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="border-b-2 border-gray-300 flex justify-between px-8 py-5 items-center">
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => {
                        setViewCommentsFlag(true);
                      }}
                      className="w-7 h-7"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 2L5.38909 9.13523C5.17838 9.33277 5.17838 9.66723 5.38909 9.86477L13 17"
                          stroke="#667085"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <p className="text-[#101828] text-xl font-semibold font-inter">
                      {t("systemreply")}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSupportOpen(false);
                      setTimeout(() => {
                        setViewCommentsFlag(true);
                      }, 300);
                    }}
                    className="p-4"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1L1 11M1 1L11 11"
                        stroke="#667085"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col justify-between px-8 gap-10">
                  <div className="flex flex-col flex-grow gap-5 pt-5">
                    {supportData?.data.map((item, index) => (
                      <SupportComment
                        key={index}
                        supportHeading={item.supportHeading}
                        supportDetails={item.supportDetails}
                        userId={item.userId}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {children}
        </article>
      </section>
      {/* <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsSupportOpen(false);
        }}
      ></section> */}
    </main>
  );
}
