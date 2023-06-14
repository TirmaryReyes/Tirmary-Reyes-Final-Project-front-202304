import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import { Suspense } from "react";
import paths from "../paths";
import {
  LazyAddPlantPage,
  LazyLoginPage,
  LazyNotFoundPage,
  LazyPlantsList,
} from "../lazyComponents/lazyComponents";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },

      {
        path: paths.login,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: `${paths.home}`,
        element: (
          <Suspense>
            <LazyPlantsList />
          </Suspense>
        ),
      },
      {
        path: `${paths.add}`,
        element: (
          <Suspense>
            <LazyAddPlantPage />
          </Suspense>
        ),
      },
      {
        path: `*`,
        element: (
          <Suspense>
            <LazyNotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
