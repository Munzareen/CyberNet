import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { authApi } from "./services/authService";
import { signUpApi } from "./services/signupService";
import { companyApi } from "./services/createCompanyService";
import { resetPasswordApi } from "./services/resetPasswordService";
import { departmentsApi } from "./services/departmentsService";
import { assessmentsApi } from "./services/assessmentsService";
import { questionApi } from "./services/questionService";
import { roadmapApi } from "./services/roadmapService";
import { commonApi } from "./services/utilsService";

export default configureStore({
  reducer: {
    counter: counterReducer,
    [authApi.reducerPath]: authApi.reducer,
    [signUpApi.reducerPath]: signUpApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    [resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
    [departmentsApi.reducerPath]: departmentsApi.reducer,
    [assessmentsApi.reducerPath]: assessmentsApi.reducer,
    [questionApi.reducerPath]: questionApi.reducer,
    [roadmapApi.reducerPath]: roadmapApi.reducer,
    [commonApi.reducerPath]: commonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      signUpApi.middleware,
      companyApi.middleware,
      resetPasswordApi.middleware,
      departmentsApi.middleware,
      assessmentsApi.middleware,
      questionApi.middleware,
      roadmapApi.middleware,
      commonApi.middleware
    ),
});
