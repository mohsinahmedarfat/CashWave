import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Root from "../layout/Root";
import ErrorPage from "../ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default Router;
