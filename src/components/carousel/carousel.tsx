import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.style.css";

import React, { FC } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IFeaturedItem } from "src/interfaces/featured-item.interface";

interface ICarouselProps {
  items: IFeaturedItem[];
}

const Carousel: FC<ICarouselProps> = ({ items }) => {
  return (
    <Swiper
      cssMode={true}
      loop={true}
      autoplay={{ delay: 5000 }}
      modules={[Autoplay]}
      className="home-carousel">
      {items.map(item => {
        return (
          <SwiperSlide key={item.label}>
            <img src={`${import.meta.env.VITE_STATIC_ASSETS_SERVER}/${item.icon}`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default React.memo(Carousel);
