/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./CardCarousel.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// import { CardData } from "../Services/CardData";
// import { Carousel } from "react-bootstrap";
// import image1 from "./image1.jpg";
// import image2 from "./image2.jpg";
// import image3 from "./image3.jpg";
// import image4 from "./image4.jpg";
// import image5 from "./image5.jpg";
// import image6 from "./image6.jpg";
// import image7 from "./image7.jpg";

SwiperCore.use([Navigation, Pagination]);

const CardCarousel = () => {
  return (
    <div className="parent">
      <div className="carousel-container-1">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          grabCursor={true}
          navigation
          loop={false}
          // pagination={{ clickable: false }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="slider">
            {({ isNext }) => (
              // eslint-disable-next-line jsx-a11y/alt-text
              <div className={isNext ? "active" : "not-active"}>
                <img
                  className="card-images"
                  src="https://images.unsplash.com/photo-1453090927415-5f45085b65c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=731&q=80"
                ></img>{" "}
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide className="slider">
            {({ isNext }) => (
              <div className={isNext ? "active" : "not-active"}>
                <img
                  className="card-images"
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                ></img>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider">
            {({ isNext }) => (
              <div className={isNext ? "active" : "not-active"}>
                {" "}
                <img
                  className="card-images"
                  src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                ></img>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider">
            {({ isNext }) => (
              <div className={isNext ? "active" : "not-active"}>
                {" "}
                <img
                  className="card-images"
                  src="https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                ></img>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider">
            {({ isNext }) => (
              <div className={isNext ? "active" : "not-active"}>
                {" "}
                <img
                  className="card-images"
                  src="https://images.unsplash.com/photo-1565103420311-8cbbc3cd87b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                ></img>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider">
            {({ isNext }) => (
              <div className={isNext ? "active" : "not-active"}>
                <img
                  className="card-images"
                  src="https://images.unsplash.com/photo-1468392788711-903a924761a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                ></img>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="carousel-container-2">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop={true}
          // pagination={{ clickable: false }}
        >
          <SwiperSlide className="slider-1">
            {({ isActive }) => (
              // eslint-disable-next-line jsx-a11y/alt-text
              <div className={isActive ? "active-1" : "not-active-1"}>
                <img
                  className="card-images-1"
                  src="https://images.unsplash.com/photo-1453090927415-5f45085b65c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=731&q=80"
                ></img>{" "}
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide className="slider-1">
            {({ isActive }) => (
              <div className={isActive ? "active-1" : "not-active-1"}>
                <img
                  className="card-images-1"
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                ></img>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider-1">
            {({ isActive }) => (
              <div className={isActive ? "active-1" : "not-active-1"}>
                {" "}
                <img
                  className="card-images-1"
                  src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                ></img>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider-1">
            {({ isActive }) => (
              <div className={isActive ? "active-1" : "not-active-1"}>
                {" "}
                <img
                  className="card-images-1"
                  src="https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                ></img>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider-1">
            {({ isActive }) => (
              <div className={isActive ? "active-1" : "not-active-1"}>
                {" "}
                <img
                  className="card-images-1"
                  src="https://images.unsplash.com/photo-1565103420311-8cbbc3cd87b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                ></img>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider-1">
            {({ isActive }) => (
              <div className={isActive ? "active-1" : "not-active-1"}>
                <img
                  className="card-images-1"
                  src="https://images.unsplash.com/photo-1468392788711-903a924761a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                ></img>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CardCarousel;
