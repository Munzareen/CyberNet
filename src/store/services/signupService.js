import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signUpApi = createApi({
  reducerPath: "signUpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cybernetapis.azurewebsites.net/",
  }),

  endpoints: (builder) => ({
    signUpUser: builder.mutation({
      query: (body) => {
        return {
          url: `api/user/signup`,
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
export const { useSignUpUserMutation } = signUpApi;

//
//const [signinUser, { data }] = useSigninUserMutation();
// signinUser({ emailAddress: "test1@test.com", password: "testt" });
