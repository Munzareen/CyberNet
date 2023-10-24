import React from "react";
import Comment from "./Comment";
import { useState } from "react";
export default function Drawer({ children, isOpen, setIsOpen }) {
  const [viewCommentsFlag, setViewCommentsFlag] = useState(true);

  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out flex" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className="h-full flex-grow"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
      <section
        className={
          "w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform flex p-0" +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="flex-grow relative flex flex-col overflow-y-scroll h-screen">
          <div className="flex flex-col flex-grow">
            {viewCommentsFlag ? (
              <>
                <div className="border-b-2 border-gray-300 flex justify-between px-8 py-5 items-center">
                  <p className="text-[#101828] text-2xl font-semibold font-inter">
                    Comments
                  </p>
                  <div className="">
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
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col flex-grow gap-5 px-8">
                  <div className="mt-5 flex flex-row gap-4 ">
                    <div className="py-2 px-3 bg-[#E5E8FD] rounded-2xl">
                      <p className="text-[#3855F2] text-base font-semibold font-inter">
                        New Updates
                      </p>
                    </div>
                    <div className="py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
                      <p className="text-base font-semibold font-inter">
                        All comments
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full">
                    <div className="">
                      <div className="flex justify-between">
                        <div className="text-lg font-inter font-semibold text-[#101828]">
                          Question 1
                        </div>
                        <div className="bg-[#F2F4F7] rounded-full">
                          <p className="text-xm font-inter font-medium text-[#3855F2] px-2 py-1">
                            4 New Comments
                          </p>
                        </div>
                      </div>
                      <div className="font-inter font-medium text-[#475467] text-sm">
                        5 minutes ago
                      </div>
                      <div className="flex gap-3 mt-3">
                        <button className="font-inter font-semibold text-[#475467] text-sm">
                          Dismiss
                        </button>
                        <button
                          onClick={() => setViewCommentsFlag(false)}
                          className="font-inter font-semibold text-[#3855F2] text-sm"
                        >
                          View Comments
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
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>

                    <p className="text-[#101828] text-2xl font-semibold font-inter">
                      Question 1
                    </p>
                  </div>
                  <div className="">
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
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col flex-grow gap-5 px-8">
                  x
                  <Comment />
                  <Comment />
                  <Comment />
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
          setIsOpen(false);
        }}
      ></section> */}
    </main>
  );
}
