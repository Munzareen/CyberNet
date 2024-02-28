import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cybernetapis.azurewebsites.net/",
  }),

  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (body) => {
        return {
          url: `api/user/login`,
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

// Export hooks for usage in functional components, which are
export const { useSigninUserMutation } = authApi;

//
//const [signinUser, { data }] = useSigninUserMutation();
// signinUser({ emailAddress: "test1@test.com", password: "testt" });
