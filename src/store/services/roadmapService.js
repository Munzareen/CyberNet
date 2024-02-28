import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const roadmapApi = createApi({
  reducerPath: "roadmapApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cybernetapis.azurewebsites.net/api/Assessment",
    prepareHeaders: (headers) => {
      const accessToken = Cookies.get("access_token");
      headers.set("Authorization", `Bearer ${accessToken}`);
      return headers;
    },
  }),
  tagTypes: ["Roadmap"],
  endpoints: (builder) => ({
    getAssigneeList: builder.query({
      query: () => {
        return {
          url: "/getAssigneeList",
          method: "GET",
        };
      },
      providesTags: ["Roadmap"],
    }),
    viewRoadmapDetail: builder.query({
      query: () => {
        return {
          url: "/viewRoadmapDetail",
          method: "GET",
        };
      },
      providesTags: ["Roadmap"],
    }),
    getAssesmentUpgrade: builder.query({
      query: () => {
        return {
          url: "/getAssesmentUpgrade",
          method: "GET",
        };
      },
      providesTags: ["Roadmap"],
    }),
    setRoadmapAttribute: builder.mutation({
      query: (Id) => {
        return {
          url: `/setRoadmapAttribute?Id=${Id}`,
          method: "POST",
        };
      },
      invalidatesTags: ["Roadmap"],
    }),
    addCommentRoadmap: builder.mutation({
      query: (body) => {
        return {
          url: "/addCommentRoadmap",
          method: "POST",
          body: JSON.stringify(body),
        };
      },
      invalidatesTags: ["Roadmap"],
    }),
    addAssesmentUpgrade: builder.mutation({
      query: (body) => {
        return {
          url: "/addAssesmentUpgrade",
          method: "POST",
          body: JSON.stringify(body),
        };
      },
      invalidatesTags: ["Roadmap"],
    }),
  }),
});

export const {
  useGetAssigneeListQuery,
  useViewRoadmapDetailQuery,
  useGetAssesmentUpgradeQuery,
  useSetRoadmapAttributeMutation,
  useAddCommentRoadmapMutation,
  useAddAssesmentUpgradeMutation,
} = roadmapApi;
