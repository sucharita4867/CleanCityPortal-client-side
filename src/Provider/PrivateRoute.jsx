// import React, { use } from "react";
// import { AuthContext } from "./AuthProvider";
// import { Navigate, useLocation } from "react-router";

// const PrivateRoute = ({ children }) => {
//   const { user } = use(AuthContext);

//   const location = useLocation();

//   if (user && user?.email) {
//     return children;
//   }
//   return <Navigate  to="/auth/login"></Navigate>;
// };

// export default PrivateRoute;
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" state={location.pathname} replace />;
  }

  return children;
};

export default PrivateRoute;
