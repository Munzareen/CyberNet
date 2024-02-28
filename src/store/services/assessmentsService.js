import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const assessmentsApi = createApi({
  reducerPath: "assessmentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cybernetapis.azurewebsites.net/api/Assessment",
    prepareHeaders: (headers) => {
      const accessToken = Cookies.get("access_token");
      // headers.set("Authorization", `Bearer ${accessToken}`);
      headers.set(
        "Authorization",
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OTIyN2YzZC1mMWZlLTRhZjUtOTQ1Yy05MzlkYWQ0OGNjMzYiLCJ1c2VyaWQiOiI0IiwiZnVsbG5hbWUiOiJzdHJpbmciLCJlbWFpbGFkZHJlc3MiOiJzdHJpbmciLCJtb2JpbGVudW1iZXIiOiIiLCJpc1Byb2ZpbGVWZXJpZmllZCI6InRydWUiLCJleHAiOjE3MDkyNzg0ODQsImlzcyI6Imh0dHBzOi8vY3liZXJuZXRhcGlzLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6Imh0dHBzOi8vY3liZXJuZXRhcGlzLmF6dXJld2Vic2l0ZXMubmV0LyJ9.kNF1XrQguTH7JigxESkxk6h_JMuXNgfVDP40b17tDW0`
      );
      return headers;
    },
  }),
  tagTypes: ["Assessments"],
  endpoints: (builder) => ({
    getAssessmentList: builder.query({
      query: () => {
        return {
          url: "/getAssestmentList",
          method: "GET",
        };
      },
      providesTags: ["Assessments"],
    }),
    takeAssessment: builder.mutation({
      query: (id) => {
        return {
          url: `/takeAssesment?AssessmentId=${id}`,
          method: "POST",
        };
      },
      invalidatesTags: ["Assessments"],
    }),
    getQuestionListByAssessment: builder.query({
      query: (id) => {
        return {
          url: `/getQuestionListByAssestment?AssessmentId=${id}`,
          method: "GET",
        };
      },
      // providesTags: ["Assessments"],
    }),
    getUserOngoingAssessmentList: builder.query({
      query: () => {
        return {
          url: "/getUserOngoingAssesmentList",
          method: "GET",
        };
      },
      providesTags: ["Assessments"],
    }),
    getUserAssessmentDashboard: builder.query({
      query: () => {
        return {
          url: "/getUserAssesmentDashboard",
          method: "GET",
        };
      },
      providesTags: ["Assessments"],
    }),
    getUserCompletedAssessment: builder.query({
      query: () => {
        return {
          url: "/getUserCompletedAssesment",
          method: "GET",
        };
      },
      providesTags: ["Assessments"],
    }),
    getUserAssessmentRoadmapList: builder.query({
      query: () => {
        return {
          url: "/getUserAssesmentRoadmapList",
          method: "GET",
        };
      },
      providesTags: ["Assessments"],
    }),
  }),
});

export const {
  useGetAssessmentListQuery,
  useTakeAssessmentMutation,
  useGetQuestionListByAssessmentQuery,
  useGetUserOngoingAssessmentListQuery,
  useGetUserAssessmentDashboardQuery,
  useGetUserCompletedAssessmentQuery,
  useGetUserAssessmentRoadmapListQuery,
} = assessmentsApi;
