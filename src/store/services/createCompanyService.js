import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cybernetapis.azurewebsites.net/",
    prepareHeaders: (headers) => {
      const accessToken = Cookies.get("access_token");
      headers.set("Authorization", `Bearer ${accessToken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createCompany: builder.mutation({
      query: (body) => {
        return {
          url: `api/company/createcompany`,
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const { useCreateCompanyMutation } = companyApi;
