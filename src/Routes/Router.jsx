import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AllIssues from "../Pages/AllIssues";
import HomePage from "../Pages/HomePage";
// import HomeIssues from "../Pages/Homeissues";
import IssuesDetails from "../Pages/IssuesDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
// import AddIssue from "../Pages/Addissue";
import PrivateRoute from "../Provider/PrivateRoute";
import MyIssues from "../Pages/MyIssues";
import MyContribution from "../Pages/MyContribution";
import ErrorPage from "../Pages/ErrorPage";
import AddIssue from "../Pages/AddIssue";
import About from "../Pages/About";
import Contact from "../Pages/footerPage/Contact";
import PrivacyPolicy from "../Pages/footerPage/PrivacyPolicy";
import Terms from "../Pages/footerPage/Terms";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/DashboardHome";
import Profile from "../Components/Profile";

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
        path: "contact",
        element: <Contact />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "issuesDetails/:id",
    element: <IssuesDetails />,
    loader: ({ params }) =>
      fetch(
        `https://clean-city-portal-server.vercel.app/allIssues/${params.id}`
      ),
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "addIssue",
        element: (
          <PrivateRoute>
            <AddIssue />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "myIssue",
        element: (
          <PrivateRoute>
            <MyIssues />
          </PrivateRoute>
        ),
      },
      {
        path: "myContribution",
        element: (
          <PrivateRoute>
            <MyContribution />
          </PrivateRoute>
        ),
      },
    ],
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
