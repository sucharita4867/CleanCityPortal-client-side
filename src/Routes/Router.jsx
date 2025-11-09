import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AllIssues from "../Pages/AllIssues";
import HomePage from "../Pages/HomePage";
import HomeIssues from "../Pages/Homeissues";
import Loading from "../Components/Loading";

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
        loader: () => fetch("http://localhost:3000/allIssues"),
        // HydrateFallback: <Loading />,
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
