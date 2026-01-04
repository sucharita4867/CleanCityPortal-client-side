import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const JoinCleanDrive = () => {
  return (
    <section className=" py-8 px-6 bg-white  my-10">
      <div className="max-w-2xl mx-auto text-center">
        <div>
          <h2 className="title poppins mb-2">
            <Typewriter
              words={["Join Our Clean Drive Initiative!"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              delaySpeed={1000}
            />
          </h2>
          <p className="description mb-8">
            Your time and effort can make our environment cleaner and more
            beautiful. Let's build a cleaner future together. Register now and
            be part of the change.
          </p>

          <Link to="/auth/register" className="btn allBtn ">
            Register Now
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinCleanDrive;
