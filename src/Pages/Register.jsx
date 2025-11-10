import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log({ name, email, photo, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="text-black flex justify-center items-center my-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-black">
        <h1 className="text-[#464646] poppins text-center font-semibold text-2xl ">
          Please Register!
        </h1>
        <form onSubmit={handelRegister} className="card-body">
          <fieldset className="fieldset ">
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
            <label className="label mt-2">Email</label>
            <input
              name="email"
              type="email"
              className="rounded-full input"
              placeholder="Email"
              required
            />
            {/* photo */}
            <label className="label mt-2">Photo URL </label>
            <input
              name="photo"
              type="text"
              className="rounded-full input"
              placeholder="Photo URl"
              required
            />
            {/* password */}
            <label className="label mt-2">Password</label>
            <input
              name="password"
              type="password"
              className="input rounded-full"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="btn w-full mt-4 md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864]"
            >
              Register
            </button>
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
        </form>
      </div>
    </div>
  );
};

export default Register;
