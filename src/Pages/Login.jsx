import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email,password)
  };
  return (
    <div className="text-black flex justify-center items-center my-8">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-black">
        <div className="card-body">
          <h1 className="text-[#464646] poppins text-center font-semibold text-2xl ">
            Please Login!
          </h1>
          <fieldset className="fieldset">
            <form onSubmit={handelLogin}>
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="rounded-full input"
                placeholder="Email"
                required
              />
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
            </form>
            <button className="btn bg-white text-black  rounded-full border border-[#F8B864]">
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
        </div>
      </div>
    </div>
  );
};

export default Login;
