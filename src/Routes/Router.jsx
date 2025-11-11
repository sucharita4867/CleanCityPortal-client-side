import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AllIssues from "../Pages/AllIssues";
import HomePage from "../Pages/HomePage";
import HomeIssues from "../Pages/Homeissues";
import Loading from "../Components/Loading";
import IssuesDetails from "../Pages/IssuesDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import AddIssue from "../Pages/Addissue";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => fetch('http://localhost:3000/latest-issues')
      },
      {
        path: "allIssues",
        element: <AllIssues />,
        loader: () => fetch("http://localhost:3000/allIssues"),
        // HydrateFallback: <Loading />,
      },

      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/addIssue",
        element: (
          <PrivateRoute>
            <AddIssue />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/issuesDetails/:id",
    element: (
      <PrivateRoute>
        <IssuesDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`http://localhost:3000/allIssues/${params.id}`),
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/*",
    element: <h2>Error page</h2>,
  },
]);
export default router;
