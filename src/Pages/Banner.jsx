import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import banner1 from "../assets/clening1.webp";
import banner2 from "../assets/clening2.webp";
import banner3 from "../assets/clening3.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-72">
            <img
              src={banner1}
              alt="Garbage Cleanup"
              className="w-full h-full object-cover rounded-lg opacity-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-[#F8B864] text-2xl font-bold mb-1 poppins">
                Keep Our Streets Clean
              </h2>
              <p className="text-white text-base">
                Join hands to maintain cleanliness and a healthier environment.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-72">
            <img
              src={banner2}
              alt="Community Cleanup"
              className="w-full h-full object-cover rounded-lg opacity-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-[#F8B864] text-2xl font-bold mb-1 poppins">
                Community Efforts Matter
              </h2>
              <p className="text-white text-base">
                Participate in local cleanup drives and make a real difference.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-72">
            <img
              src={banner3}
              alt="Sustainable Living"
              className="w-full h-full object-cover rounded-lg opacity-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-[#F8B864] text-2xl font-bold mb-1 poppins">
                Promote Sustainability
              </h2>
              <p className="text-white text-base">
                Adopt eco-friendly habits for a greener future.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
