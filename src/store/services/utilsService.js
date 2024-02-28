import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const commonApi = createApi({
  reducerPath: "commonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cybernetapis.azurewebsites.net/api/Common",
    prepareHeaders: (headers) => {
      const accessToken = Cookies.get("access_token");
      headers.set("Authorization", `Bearer ${accessToken}`);
      return headers;
    },
  }),
  tagTypes: ["Common"],
  endpoints: (builder) => ({
    getCities: builder.query({
      query: () => {
        return {
          url: "/getcities",
          method: "GET",
        };
      },
      providesTags: ["Common"],
    }),
    getCityById: builder.query({
      query: (id) => {
        return {
          url: `/getcitybyid?Id=${id}`,
          method: "GET",
        };
      },
      providesTags: ["Common"],
    }),
    getStates: builder.query({
      query: () => {
        return {
          url: "/getstates",
          method: "GET",
        };
      },
      providesTags: ["Common"],
    }),
    getStateById: builder.query({
      query: (id) => {
        return {
          url: `/getstatebyid?Id=${id}`,
          method: "GET",
        };
      },
      providesTags: ["Common"],
    }),
  }),
});

export const {
  useGetCitiesQuery,
  useGetCityByIdQuery,
  useGetStatesQuery,
  useGetStateByIdQuery,
} = commonApi;
