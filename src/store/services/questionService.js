import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cybernetapis.azurewebsites.net/api/Question",
    prepareHeaders: (headers) => {
      const accessToken = Cookies.get("access_token");
      headers.set(
        "Authorization",
        `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OTUyZWUyOC0zZmU4LTQ3OTgtODE5My05MWMwMDE0NGFmOTMiLCJ1c2VyaWQiOiIyIiwiZnVsbG5hbWUiOiJEZW1vIEFjY291bnQiLCJlbWFpbGFkZHJlc3MiOiJkZW1vYWNjb3VudEBnbWFpbC5jb20iLCJtb2JpbGVudW1iZXIiOiIiLCJpc1Byb2ZpbGVWZXJpZmllZCI6InRydWUiLCJleHAiOjE3MTE1NjM0ODQsImlzcyI6Imh0dHBzOi8vY3liZXJuZXRhcGlzLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6Imh0dHBzOi8vY3liZXJuZXRhcGlzLmF6dXJld2Vic2l0ZXMubmV0LyJ9.QyGTlmTuj_khv8kN7dmDBjYwkvg3t4BCZRNm2dLP7wI`
      );
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  tagTypes: ["Questions"],
  endpoints: (builder) => ({
    addSupport: builder.mutation({
      query: (body) => {
        return {
          url: "/addSupport",
          method: "POST",
          body: JSON.stringify(body),
        };
      },
      invalidatesTags: ["Questions"],
    }),
    viewQuestionSupport: builder.query({
      query: (QuestionId) => {
        return {
          url: `/viewQuestionSupport?QuestionId=${QuestionId}`,
          method: "GET",
        };
      },
      providesTags: ["Questions"],
    }),
    addComment: builder.mutation({
      query: (body) => {
        return {
          url: "/addComment",
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["Questions"],
    }),
    replyToComment: builder.mutation({
      query: (body) => {
        return {
          url: "/replyToComment",
          method: "POST",
          body: JSON.stringify(body),
        };
      },
      invalidatesTags: ["Questions"],
    }),
    viewQuestionComment: builder.query({
      query: (QuestionId) => {
        return {
          url: `/viewQuestionComment?QuestionId=${QuestionId}`,
          method: "GET",
        };
      },
      providesTags: ["Questions"],
    }),
  }),
});

export const {
  useAddSupportMutation,
  useViewQuestionSupportQuery,
  useAddCommentMutation,
  useReplyToCommentMutation,
  useViewQuestionCommentQuery,
} = questionApi;
