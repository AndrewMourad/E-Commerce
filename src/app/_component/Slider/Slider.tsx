"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SliderType = {
  spaceBetween: number;
  slidesPerView: number;
  pageList: string[];
};

export default function Slider({
  spaceBetween,
  slidesPerView,
  pageList,
}: SliderType) {
  return (
    <Swiper
      loop={true}
      modules={[Navigation, Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation
      pagination={{
        clickable: true,
        renderBullet(index, className) {
          return `<span class='${className} bg-white! w-3! h-3! transition-all'></span>`;
        },
        bulletActiveClass: "w-10! opacity-100! rounded-md!",
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {pageList.map((src) => {
        return (
          <SwiperSlide>
            <Image
              src={src}
              className="w-full h-80 object-cover"
              alt=""
              width={400}
              height={300}
            ></Image>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
