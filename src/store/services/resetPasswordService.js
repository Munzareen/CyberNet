import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const resetPasswordApi = createApi({
  reducerPath: "resetPasswordApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cybernetapis.azurewebsites.net/",
  }),

  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: (body) => {
        return {
          url: `api/user/forgetpassword`,
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
export const { useResetPasswordMutation } = resetPasswordApi;
