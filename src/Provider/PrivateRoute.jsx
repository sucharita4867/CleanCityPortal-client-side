// import React, { use } from "react";
// import { AuthContext } from "./AuthProvider";
// import { Navigate, useLocation } from "react-router";

// const PrivateRoute = ({ children }) => {
//   const { user } = use(AuthContext);

//   const location = useLocation();

//   if (user && user?.email) {
//     return children;
//   }
//   return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
// };

// export default PrivateRoute;
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // 🕒 যদি এখনো loading হয়
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  // 🔒 যদি user না থাকে, login এ পাঠাও
  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // ✅ user থাকলে children দেখাও
  return children;
};

export default PrivateRoute;
