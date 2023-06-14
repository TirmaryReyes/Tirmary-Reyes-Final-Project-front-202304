import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

export const LazyPlantsList = lazy(
  () => import("../pages/PlantsPage/PlantsPage")
);

export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage")
);

export const LazyAddPlantPage = lazy(
  () => import("../pages/AddPlantPage/AddPlantPage")
);
