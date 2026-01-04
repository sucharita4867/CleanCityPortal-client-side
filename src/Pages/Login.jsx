import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, setUser, googleLogin } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Normal login
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: "Login successfully!",
          icon: "success",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid email or password. Please try again.",
        });
      });
  };

  // Google login
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          title: "Login with Google successful!",
          icon: "success",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
        });
      });
  };

  // Demo login
  const handleDemoLogin = () => {
    const demoEmail = "demo@user.com";
    const demoPassword = "Dd@12345";

    loginUser(demoEmail, demoPassword)
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          title: "Demo Login Successful!",
          icon: "success",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Demo Login Failed",
          text: "Demo credentials are not valid.",
        });
      });
  };

  return (
    <div className="text-black flex justify-center items-center my-10">
      <div className="card bg-base-100 pt-4 w-full max-w-sm shadow-2xl border border-gray-300">
        <h1 className="text-[#464646] poppins text-center font-semibold text-2xl">
          Please Login!
        </h1>

        <form onSubmit={handelLogin} className="card-body pt-0">
          <fieldset className="fieldset space-y-2">
            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input rounded-full"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input rounded-full"
              placeholder="Password"
              required
            />

            {/* Login Button */}
            <button className="btn mt-4 allBtn rounded-full">Login</button>

            {/* Demo Login */}
            <button
              type="button"
              onClick={handleDemoLogin}
              className="btn allBtn rounded-full  text-black border"
            >
              Login as Demo User
            </button>

            <div className="divider text-sm">OR</div>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogle}
              className="btn bg-white text-black rounded-full border"
            >
              <FcGoogle className="text-xl" />
              Login with Google
            </button>

            {/* Register Link */}
            <p className="text-center text-sm font-medium mt-2">
              Don't have an account?
              <Link
                to="/auth/register"
                className="font-bold text-blue-600 hover:underline ml-1"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
