import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SelectImageBox from "./SelectImageBox";


interface Props {
  humans: { url: string }[][];
  garments: { url: string }[][];
  backgroundColor?: string;
}

const SlideSelectImageBox = ({ humans, garments, backgroundColor }: Props) => {
  return (
    <>
      <div
        className="flex justify-center items-center relative pt-10px"
        style={{ backgroundColor: backgroundColor }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {humans.map((human, ind) => (
            <SwiperSlide key={ind} className="text-center">
              <SelectImageBox humanImages={human} garmentImages={garments[ind]} backgroundColor={"white"} ind={ind} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default SlideSelectImageBox;
