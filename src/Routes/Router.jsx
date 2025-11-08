import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AllIssues from "../Pages/AllIssues";
import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "allIssues",
        element: <AllIssues />,
      },
    ],
  },

  {
    path: "/auth",
    element: <h2>authentication layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error page</h2>,
  },
]);
export default router;
