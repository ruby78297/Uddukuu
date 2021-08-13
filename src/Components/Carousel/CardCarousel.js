import React from "react";
import "./CardCarousel.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, A11y]);

const CardCarousel = () => {
  return (
    <div className="parent">
      <div className="carousel-container">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: false }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="slider">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1453090927415-5f45085b65c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=731&q=80"
              alt="pic here"
            ></img>{" "}
          </SwiperSlide>
          ;
          <SwiperSlide className="slider">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="pic here"
            ></img>{" "}
          </SwiperSlide>
          ;
          <SwiperSlide className="slider">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
              alt="pic here"
            ></img>{" "}
          </SwiperSlide>
          <SwiperSlide className="slider">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              alt="pic here"
            ></img>{" "}
          </SwiperSlide>
          ;
          <SwiperSlide className="slider">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1565103420311-8cbbc3cd87b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="pic here"
            ></img>{" "}
          </SwiperSlide>
          ;
          <SwiperSlide className="slider">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1468392788711-903a924761a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt="pic here"
            ></img>{" "}
          </SwiperSlide>
          ;
        </Swiper>
      </div>
    </div>
  );
};

export default CardCarousel;
