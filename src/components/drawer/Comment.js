import React from "react";
import { useState } from "react";
export default function Comment() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="rounded-xl p-5 gap-4 border border-[#EAECF0] shadow-sm shadow-[#d0d0d0] w-full">
      <div className="flex w-full gap-4">
        <div className="">
          <div className="image relative">
            {/* <img alt="x" width="48" height="48" className="rounded-full" /> */}
            <div className="rounded-full bg-slate-200 w-12 h-12 flex justify-center items-center">
              <div>-+-</div>
            </div>
            <div className="absolute inset-x-8 inset-y-8  w-6 h-6 rounded-full bg-green-600 border-4 border-white"></div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <div className="font-inter font-semibold text-[#101828] text-sm">
                Katherine Moss
              </div>
              <div className="font-inter font-medium text-[#667085] text-sm">
                2 mins ago
              </div>
            </div>
            <div className="font-inter font-medium text-[#475467] text-sm">
              I’ve finished adding my notes. Happy for us to review whenever
              you’re ready!
            </div>
          </div>
          {flag ? (
            <div className="flex gap-3">
              <div className="font-inter font-semibold text-[#475467] text-sm">
                Dismiss
              </div>
              <button
                onClick={() => setFlag(false)}
                className="font-inter font-semibold text-[#3855F2] text-sm"
              >
                Reply
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <textarea
                className="border-[#D0D5DD] border font-inter font-medium text-[#475467] text-sm w-full h-20 rounded-lg p-3 outline-none"
                placeholder="Enter your comment here"
              ></textarea>
              <button className="py-3 px-6 rounded-2xl bg-[#3855F2] hover:bg-[#536aed] text-white text-base font-medium font-inter w-24">
                Send
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex justify-between">
<div className="font-inter font-semibold text-[#101828]">
  Question 1
</div>
<div className="bg-[#F2F4F7] rounded-full">
  <p className="font-inter font-medium text-[#3855F2] px-2 py-1">
    4 New Comments
  </p>
</div>
</div>
<div className="font-inter font-medium text-[#475467]">5 minutes ago</div>
<div className="flex gap-3 mt-3">
<div className="font-inter font-semibold text-[#475467] py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl">
  Dismiss
</div>
<button
  onClick={null}
  className="font-inter font-semibold text-[#3855F2] py-2 px-3 hover:bg-[#E5E8FD] rounded-2xl"
>
  View Comments
</button>
</div> */
}
