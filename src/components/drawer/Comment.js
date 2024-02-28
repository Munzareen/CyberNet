import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useReplyToCommentMutation } from "../../store/services/questionService";
export default function Comment({ commentHeading, commentDetails, userId }) {
  const { t } = useTranslation();

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
                {commentHeading
                  ? `${commentHeading} by user ${userId}`
                  : "Katherine Moss"}
              </div>
              <div className="font-inter font-medium text-[#667085] text-sm">
                {t("fiveminutesago")}
              </div>
            </div>
            <div className="font-inter font-medium text-[#475467] text-sm">
              {commentDetails ? commentDetails : t("finishednotes")}{" "}
            </div>
          </div>
          {flag ? (
            <div className="flex gap-3">
              <div className="font-inter font-semibold text-[#475467] text-sm">
                {t("dismiss")}
              </div>
              <button
                onClick={() => setFlag(false)}
                className="font-inter font-semibold text-[#3855F2] text-sm"
              >
                {t("reply")}
              </button>
            </div>
          ) : (
            <CommentReplyTextArea setFlag={setFlag} />
          )}
        </div>
      </div>
    </div>
  );
}

function CommentReplyTextArea({ setFlag }) {
  const [comment, setComment] = useState(""); // State for the textarea input
  const [addNewReplyComment, { isLoading, isSuccess }] =
    useReplyToCommentMutation(); // Mutation hook
  const { t } = useTranslation();
  const handleAddComment = async () => {
    if (comment.trim() !== "") {
      try {
        const outputObject = {
          questionId: 1,
          commentHeading: "Question 1 Reply",
          commentDetails: comment,
        };
        await addNewReplyComment(outputObject); // Trigger the mutation
        setComment(""); // Clear the textarea
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    if (isSuccess) {
      setFlag(true);
    }
  }, [isSuccess]);
  return (
    <div className="flex flex-col gap-3">
      <textarea
        className="border-[#D0D5DD] border font-inter font-medium text-[#475467] text-sm w-full h-20 rounded-lg p-3 outline-none"
        placeholder={t("enterreply")}
        value={comment}
        onChange={(e) => setComment(e.target.value)} // Update the state when the input changes
      ></textarea>
      <button
        className="py-3 px-2 rounded-2xl bg-[#3855F2] hover:bg-[#536aed] text-white text-base font-medium font-inter w-24"
        onClick={handleAddComment} // Set up the onClick event
        disabled={isLoading} // Disable the button while the mutation is in progress
      >
        {t("send")}
      </button>
    </div>
  );
}
