import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Register = () => {
  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);
  };
  return (
    <div className="text-black flex justify-center items-center my-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-black">
        <div className="card-body">
          <h1 className="text-[#464646] poppins text-center font-semibold text-2xl ">
            Please Register!
          </h1>
          <fieldset className="fieldset">
            <form onSubmit={handelRegister}>
              {/* name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="rounded-full input"
                placeholder="Name"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="rounded-full input"
                placeholder="Email"
                required
              />
              {/* photo */}

              <label className="label">Photo URL </label>
              <input
                name="photo"
                type="text"
                className="rounded-full input"
                placeholder="Photo URl"
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

              <button className="btn w-full mt-4 md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864]">
                Login
              </button>
            </form>
            <button className="btn bg-white text-black  rounded-full border border-[#F8B864]">
              <FcGoogle className="text-xl" />
              Login with Google
            </button>

            <p className="text-center text-sm font-medium">
              You have an account?
              <span className="font-bold text-blue-600 hover:underline">
                <Link to="/auth/login"> Login</Link>
              </span>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
