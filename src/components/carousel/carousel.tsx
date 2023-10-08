import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.style.css";

import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IFeaturedItem } from "src/interfaces/featured-item.interface";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

interface ICarouselProps {
  items: IFeaturedItem[];
}

const Carousel: FC<ICarouselProps> = ({ items }) => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      loop={true}
      keyboard={true}
      autoplay={{ delay: 10000 }}
      modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper">
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
