import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, setUser, googleLogin } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

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
          draggable: true,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid email or password. Please try again.",
        });
      });
  };

  const handleGoogle = () => {
    console.log("google btn clicked");
    googleLogin()
      .then((result) => {
        console.log("successfull", result);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="text-black flex justify-center items-center my-8">
      <div className="card bg-base-100 pt-4 w-full max-w-sm shrink-0 shadow-2xl border border-gray-300">
        <h1 className="text-[#464646] poppins text-center font-semibold text-2xl ">
          Please Login!
        </h1>
        <form onSubmit={handelLogin} className="card-body pt-0">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="rounded-full input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input rounded-full"
              placeholder="Password"
              required
            />
            <button className="btn mt-4 w-full md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864]">
              Login
            </button>
            <button
              onClick={handleGoogle}
              className="btn bg-white text-black  rounded-full border border-[#F8B864]"
            >
              <FcGoogle className="text-xl" />
              Login with Google
            </button>
            <p className="text-center text-sm font-medium">
              Don't have an account?
              <span className="font-bold text-blue-600 hover:underline">
                <Link to="/auth/register"> Register</Link>
              </span>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
