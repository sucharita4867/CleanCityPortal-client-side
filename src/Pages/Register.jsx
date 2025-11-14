import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, googleLogin } = use(AuthContext);
  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, photoURL);

    const isValidPassword =
      /[A-Z]/.test(password) && /[a-z]/.test(password) && password.length >= 6;

    if (!isValidPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain at least one uppercase, one lowercase letter and be at least 6 characters long.",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        // updatedData({ displayName: name, photoURL: photoURL })
        // .then(() => {
        // setUser({ ...user, displayName: name, photoURL: photoURL });
        // })
        // .catch((error) => {
        //   Swal.fire({
        //     icon: "error"
        //     title: "Oops...",
        //     text: error,
        //   });
        //   setUser(user);
        // });
        // .catch((err) => {
        //   console.log(err);
        // });

        Swal.fire({
          title: "Register successfully!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        console.log("successfull", result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="text-black flex justify-center items-center my-4">
      <div className="card bg-base-100 pt-4 w-full max-w-sm shrink-0 shadow-2xl border border-gray-300">
        <h1 className="text-[#464646] poppins text-center font-semibold text-2xl ">
          Please Register!
        </h1>
        <form onSubmit={handelRegister} className="card-body pt-0">
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
            <button
              onClick={handleGoogle}
              className="btn bg-white text-black  rounded-full border border-[#F8B864]"
            >
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
