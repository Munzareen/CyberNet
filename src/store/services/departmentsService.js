import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const departmentsApi = createApi({
  reducerPath: "departmentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cybernetapis.azurewebsites.net/api/department",
    prepareHeaders: (headers) => {
      const accessToken = Cookies.get("access_token");
      headers.set("Authorization", `Bearer ${accessToken}`);
      return headers;
    },
  }),
  tagTypes: ["Departments"],
  endpoints: (builder) => ({
    getAllDepartments: builder.query({
      query: (searchText) => {
        return {
          url: `/getalldepartments?SearchText=${searchText}`,
          method: "GET",
        };
      },
      providesTags: ["Departments"],
    }),
    getDepartmentById: builder.query({
      query: (id) => {
        return {
          url: `/getdepartmentbyid?DepartmentId=${id}`,
          method: "GET",
        };
      },
      providesTags: ["Departments"],
    }),
    createDepartment: builder.mutation({
      query: (data) => ({
        url: "/createdepartment",
        method: "POST",
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["Departments"],
    }),
    editDepartment: builder.mutation({
      query: (data) => ({
        url: "/editdepartment",
        method: "POST",
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["Departments"],
    }),
    deleteDepartment: builder.mutation({
      query: (id) => ({
        url: `/deletedepartment?DepartmentId=${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Departments"],
    }),
  }),
});

export const {
  useGetAllDepartmentsQuery,
  useGetDepartmentByIdQuery,
  useCreateDepartmentMutation,
  useEditDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentsApi;
