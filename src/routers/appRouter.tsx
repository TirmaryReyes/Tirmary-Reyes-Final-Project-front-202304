import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import LazyLoginPage from "./lazyComponent";
import { Suspense } from "react";
import paths from "./paths";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
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
        element: <p>home</p>,
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
