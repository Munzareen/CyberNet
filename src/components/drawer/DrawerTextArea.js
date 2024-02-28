import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAddCommentMutation } from "../../store/services/questionService";

const DrawerTextArea = () => {
  const [comment, setComment] = useState(""); // State for the textarea input
  const [addNewComment, { isLoading }] = useAddCommentMutation(); // Mutation hook
  const { t } = useTranslation();

  const handleAddComment = async () => {
    if (comment.trim() !== "") {
      try {
        const outputObject = {
          questionId: 1,
          commentHeading: "bleg",
          commentDetails: comment,
        };
        await addNewComment(outputObject); // Trigger the mutation
        setComment(""); // Clear the textarea
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <textarea
        className="border-[#D0D5DD] border font-inter font-medium text-[#475467] text-sm w-full h-20 rounded-lg p-3 outline-none"
        placeholder={t("entercomment")}
        value={comment}
        onChange={(e) => setComment(e.target.value)} // Update the state when the input changes
      ></textarea>
      <button
        className="mb-5 py-3 px-6 rounded-2xl bg-[#3855F2] hover:bg-[#536aed] text-white text-sm font-medium font-inter w-24"
        onClick={handleAddComment} // Set up the onClick event
        disabled={isLoading} // Disable the button while the mutation is in progress
      >
        {t("send")}
      </button>
    </div>
  );
};

export default DrawerTextArea;
