import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import banner1 from "../assets/clening2.webp";
import banner2 from "../assets/image2.jpg";
import banner3 from "../assets/image.webp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      {/* ===== Slide 1 ===== */}
      <SwiperSlide>
        <div className="relative w-full h-80">
          <img
            src={banner1}
            alt="Clean Streets"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-[#F8B864] text-3xl md:text-4xl font-bold mb-3 poppins">
              Build Cleaner & Safer Cities
            </h2>
            <p className="text-white text-base md:text-lg max-w-2xl mb-5">
              Report local issues, raise awareness, and help create a healthier
              environment for everyone.
            </p>
            <Link to="/allIssues" className="btn allBtn">
              View City Issues
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* ===== Slide 2 ===== */}
      <SwiperSlide>
        <div className="relative w-full h-80">
          <img
            src={banner2}
            alt="Community Action"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-[#F8B864] text-3xl md:text-4xl font-bold mb-3 poppins">
              Community Action Makes a Difference
            </h2>
            <p className="text-white text-base md:text-lg max-w-2xl mb-5">
              Join hands with your community to identify problems and bring
              positive change to your neighborhood.
            </p>
            <Link to="/auth/register" className="btn allBtn">
              Join the Community
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* ===== Slide 3 ===== */}
      <SwiperSlide>
        <div className="relative w-full h-80">
          <img
            src={banner3}
            alt="Sustainable Living"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-[#F8B864] text-3xl md:text-4xl font-bold mb-3 poppins">
              Promote Sustainable Living
            </h2>
            <p className="text-white text-base md:text-lg max-w-2xl mb-5">
              Take small actions today to ensure a cleaner and greener future
              for the next generation.
            </p>
            <Link to="/about" className="btn allBtn">
              Learn More
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* ===== Autoplay Progress ===== */}
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default Banner;
