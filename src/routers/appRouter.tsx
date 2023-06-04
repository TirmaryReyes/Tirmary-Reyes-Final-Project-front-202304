import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import LazyLoginPage from "./lazyComponent";
import { Suspense } from "react";
import paths from "./paths";
import PlantsList from "../pages/PlantsList/PlantsList";

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
        path: `${paths.login}`,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: `${paths.home}`,
        element: <PlantsList />,
      },
      {
        path: `*`,
        element: <p></p>,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
