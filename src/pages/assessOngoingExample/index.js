import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Drawer from "../../components/drawer/Drawer";
import AssignDropdown from "../../components/dropdown/AssignDropdown";
import AssignExampleDropdown from "../../components/dropdown/AssignExampleDropdown";
import { useTranslation } from "react-i18next";
import InfoIcon from "../../components/icons/infoIcon";
import { Link, useParams } from "react-router-dom";
import {
  useGetQuestionListByAssessmentQuery,
  useGetUserOngoingAssessmentListQuery,
} from "../../store/services/assessmentsService";
import ActiveQuizNavElement from "./ActiveQuizNavElement";
import QuizSubsectionNavElement from "./QuizSubsectionNavElement";
import QuizQuestionElement from "./QuizQuestionElement";
import Spinner from "../signin/spinner";
const AssessOngoingExample = () => {
  const [activeQuizSection, setActiveQuizSection] = useState(1);
  const { id } = useParams();
  const { t } = useTranslation();
  const {
    isLoading,
    isSuccess,
    data,
    error,
    isError,
    isFetching: isQuestionFetching,
  } = useGetQuestionListByAssessmentQuery(id);
  const {
    isLoading: isLoadingA,
    isSuccess: isSuccessA,
    data: dataA,
    error: errorA,
    isError: isErrorA,
    isFetching: isUserAssessmentFetching,
  } = useGetUserOngoingAssessmentListQuery();

  const isLoadingOmega = isQuestionFetching || isUserAssessmentFetching;
  useEffect(() => {
    if (isSuccess && data) {
      setActiveQuizSection(data?.data.subDepartments[0]?.subDepartmentId);
    }
  }, [isSuccess, data]);
  return (
    <div className="r-assessments-initial bg-[#14143E]  w-full h-screen overflow-y-hidden relative">
      <div className="bg-[#14143E] w-full h-4"></div>
      <div className="bg-white rounded-tl-3xl py-4 flex flex-col overflow-y-scroll absolute h-full w-full">
        {/* <div className="text-slate-700 font-medium ">Assessments page</div> */}
        {isLoading || isLoadingA || isLoadingOmega ? (
          <div className="m-8 text-[#101828] text-2xl font-bold font-inter ">
            Loading...
          </div>
        ) : (
          <>
            {isLoading && <Spinner />}
            {!isLoading && (
              <>
                <div className="my-5 flex flex-row gap-4 px-8">
                  {dataA?.data.map((item, index) => (
                    <Link
                      key={index}
                      idd={item.totalMCQCount}
                      to={`/dashboard/assessments/ongoing/example/${item.departmentId}`}
                    >
                      <ActiveQuizNavElement
                        name={item.departmentName}
                        questions={item.totalMCQCount}
                        isActive={item.departmentId == id}
                      />
                    </Link>
                  ))}
                </div>
                <div className="bg-[#F9F9F9] flex flex-col p-8 gap-3">
                  <div className="flex gap-6 items-center">
                    <p className="text-[#101828] text-2xl font-bold font-inter">
                      {dataA && id != 5
                        ? dataA?.data[id - 1].departmentName
                        : dataA && id == 5
                        ? dataA?.data[3].departmentName
                        : t("tvm")}
                    </p>
                    <div className="flex justify-center items-center ml-4 p-2 h-min w-min rounded-full bg-[#ECF1FD]">
                      <p className="text-xs text-[#3855F2] whitespace-nowrap">
                        712 Questions
                      </p>
                    </div>{" "}
                  </div>
                  <div className="flex gap-2 border border-[#F2F4F7] rounded-md p-1">
                    {data?.data.subDepartments.map((item, index) => (
                      <QuizSubsectionNavElement
                        key={index}
                        questions={item.mcQs.length}
                        name={item.subDepartmentName}
                        isActive={item.subDepartmentId == activeQuizSection}
                        onClick={() =>
                          setActiveQuizSection(item.subDepartmentId)
                        }
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col p-8 gap-5">
                  <div className="flex flex-col gap-6">
                    {data?.data.subDepartments
                      .find(
                        (item) => item.subDepartmentId === activeQuizSection
                      )
                      ?.mcQs.map((item1, index) => (
                        <QuizQuestionElement
                          key={index}
                          index={index}
                          item={item1}
                        />
                      ))}
                    <button className="m-3 py-3 px-6 w-64 rounded-2xl bg-[#3855F2] hover:bg-[#536aed] text-white text-sm font-medium font-inter">
                      {t("loadmore")}
                    </button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AssessOngoingExample;
