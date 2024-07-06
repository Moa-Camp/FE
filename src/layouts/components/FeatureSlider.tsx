"use client";

import DynamicIcon from "@/helpers/DynamicIcon";
import { useRef } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  slides: Array<{ icon: string; title: string; content: string }>;
};

const FeatureSlider = ({ slides }: Props) => {
  const paginationRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        pagination={{
          type: "bullets",
          el: paginationRef.current,
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((item, index) => {
          //@ts-ignore
          return (
            <SwiperSlide key={"feature-" + index}>
              <div className="features-card group z-30 cursor-pointer">
                <div className="icon flex items-center justify-center text-primary group-hover:bottom-0 group-hover:top-auto  group-hover:duration-100 group-hover:ease-in group-hover:after:h-full">
                  <DynamicIcon icon={item.icon} />
                </div>
                <h3 className="h5 mb-5 mt-6">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="relative mt-9 flex justify-center">
        <div
          className="pagination"
          style={{ width: "100%" }}
          ref={paginationRef}
        ></div>
      </div>
    </div>
  );
};

export default FeatureSlider;
