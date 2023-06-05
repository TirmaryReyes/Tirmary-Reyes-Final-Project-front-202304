import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

export const LazyPlantsList = lazy(
  () => import("../pages/PlantsPage/PlantsPage")
);
