import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AllIssues from "../Pages/AllIssues";
import HomePage from "../Pages/HomePage";
// import HomeIssues from "../Pages/Homeissues";
import Loading from "../Components/Loading";
import IssuesDetails from "../Pages/IssuesDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
// import AddIssue from "../Pages/Addissue";
import PrivateRoute from "../Provider/PrivateRoute";
import MyIssues from "../Pages/MyIssues";
import MyContribution from "../Pages/MyContribution";
import ErrorPage from "../Pages/ErrorPage"
import AddIssue from "../Pages/AddIssue"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () =>
          fetch("https://clean-city-portal-server.vercel.app/latest-issues"),
      },
      {
        path: "/allIssues",
        element: <AllIssues />,
        loader: () =>
          fetch("https://clean-city-portal-server.vercel.app/allIssues"),
      },
      {
        path: "/addIssue",
        element: (
          <PrivateRoute>
            <AddIssue />
          </PrivateRoute>
        ),
      },
      {
        path: "/myIssue",
        element: (
          <PrivateRoute>
            <MyIssues />
          </PrivateRoute>
        ),
      },
      {
        path: "/myContribution",
        element: (
          <PrivateRoute>
            <MyContribution />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "issuesDetails/:id",
    element: (
      <PrivateRoute>
        <IssuesDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://clean-city-portal-server.vercel.app/allIssues/${params.id}`
      ),
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export default router;
