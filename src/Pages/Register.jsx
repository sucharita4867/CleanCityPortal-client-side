import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, googleLogin, updateUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;

    const isValidPassword =
      /[A-Z]/.test(password) && /[a-z]/.test(password) && password.length >= 6;

    if (!isValidPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain uppercase, lowercase and 6 characters",
      });
      return;
    }

    createUser(email, password, name, photoURL)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL }).then(() => {
          setUser({ ...user, displayName: name, photoURL });
        });

        Swal.fire({
          title: "Register successful!",
          icon: "success",
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
      .then(() => {
        Swal.fire({
          title: "Logged in with Google!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="text-black flex justify-center items-center my-4">
      <div className="card bg-base-100 pt-4 w-full max-w-sm shrink-0 shadow-2xl border border-gray-300">
        <h1 className="text-[#464646] poppins text-center font-semibold text-2xl">
          Please Register!
        </h1>

        <form onSubmit={handelRegister} className="card-body pt-0">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="rounded-full input"
              required
            />

            <label className="label mt-2">Email</label>
            <input
              name="email"
              type="email"
              className="rounded-full input"
              required
            />

            <label className="label mt-2">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="rounded-full input"
              required
            />

            <label className="label mt-2">Password</label>
            <input
              name="password"
              type="password"
              className="input rounded-full"
              required
            />

            <button
              type="submit"
              className="btn allBtn w-full mt-4 bg-[#F8B864] text-white rounded-full"
            >
              Register
            </button>

            <button
              type="button"
              onClick={handleGoogle}
              className="btn allBtn w-full mt-2 bg-white text-black rounded-full border border-[#F8B864]"
            >
              <FcGoogle className="text-xl" /> Login with Google
            </button>

            <p className="text-center text-sm font-medium mt-2">
              Already have an account?
              <Link className="font-bold text-blue-600" to="/auth/login">
                
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
