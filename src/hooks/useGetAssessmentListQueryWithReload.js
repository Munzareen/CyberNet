import { useEffect, useState } from "react";
import { useGetAssessmentListQuery } from "../store/services/assessmentsService";

// ...

export const useGetAssessmentListQueryWithReload = () => {
  const [skipToken, setSkipToken] = useState(Date.now());

  useEffect(() => {
    setSkipToken(Date.now());
  }, []);

  return useGetAssessmentListQuery(undefined, {
    skipToken,
  });
};
