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
import { SliderData } from "./SliderData";
import Ratings from "./Ratings";

SwiperCore.use([Navigation, Pagination]);

const CardCarousel = () => {
  return (
    <div className="parent">
      <div className="slider-top-title">
        <p id="slider-top-title-id"> Top Music Professionals for hire</p>
      </div>
      <br />
      <div className="carousel-container-1">
        <Swiper
          spaceBetween={-80}
          slidesPerView={3}
          grabCursor={true}
          navigation
          loop={true}
          // pagination={{ clickable: false }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="slider">
            {({ isNext }) => (
              // eslint-disable-next-line jsx-a11y/alt-text
              <div className={isNext ? "active" : "not-active"}>
                <div className="slider-image-container">
                  <div className="slider-images">
                    <img
                      src={SliderData[0].image}
                      alt="slideimage"
                      className="slide-title-image"
                    ></img>
                  </div>
                </div>
                <div className="slider-title slider-title flex justify-center items-center text-2xl font-bold">
                  {SliderData[0].title}{" "}
                </div>
                <div className="ratings">
                  {" "}
                  <Ratings />
                </div>

                <div className="slider-des flex justify-center items-center text-lg p-2 ">
                  {SliderData[0].des}{" "}
                </div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide className="slider">
            {({ isNext }) => (
              <div className={isNext ? "active" : "not-active"}>
                <div className="slider-image-container">
                  <div className="slider-images">
                    <img
                      src={SliderData[1].image}
                      alt="slideimage"
                      className="slide-title-image"
                    ></img>
                  </div>
                </div>
                <div className="slider-title slider-title flex justify-center items-center text-2xl font-bold">
                  {SliderData[1].title}
                </div>
                <div className="ratings">
                  {" "}
                  <Ratings />
                </div>
                <div className="slider-des flex justify-center items-center text-lg p-2 ">
                  {SliderData[1].des}
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider">
            {({ isNext }) => (
              <div className={isNext ? "active" : "not-active"}>
                <div className="slider-image-container">
                  {" "}
                  <div className="slider-images">
                    <img
                      src={SliderData[2].image}
                      alt="slideimage"
                      className="slide-title-image"
                    ></img>
                  </div>
                </div>
                <div className="slider-title slider-title flex justify-center items-center text-2xl font-bold">
                  {SliderData[2].title}
                </div>
                <div className="ratings">
                  {" "}
                  <Ratings />
                </div>
                <div className="slider-des flex justify-center items-center text-lg p-2 ">
                  {SliderData[2].des}
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider">
            {({ isNext }) => (
              <div className={isNext ? "active" : "not-active"}>
                {" "}
                <div className="slider-image-container">
                  <div className="slider-images">
                    <img
                      src={SliderData[3].image}
                      alt="slideimage"
                      className="slide-title-image"
                    ></img>
                  </div>
                </div>
                <div className="slider-title slider-title flex justify-center items-center text-2xl font-bold">
                  {SliderData[3].title}
                </div>
                <div className="ratings">
                  {" "}
                  <Ratings />
                </div>
                <div className="slider-des flex justify-center items-center text-lg p-2 ">
                  {SliderData[3].des}
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider">
            {({ isNext }) => (
              <div className={isNext ? "active" : "not-active"}>
                {" "}
                <div className="slider-image-container">
                  <div className="slider-images">
                    <img
                      src={SliderData[4].image}
                      alt="slideimage"
                      className="slide-title-image"
                    ></img>
                  </div>
                </div>
                <div className="slider-title slider-title flex justify-center items-center text-2xl font-bold">
                  {SliderData[4].title}
                </div>
                <div className="ratings">
                  {" "}
                  <Ratings />
                </div>
                <div className="slider-des flex justify-center items-center text-lg p-2 ">
                  {SliderData[4].des}
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider">
            {({ isNext }) => (
              <div className={isNext ? "active" : "not-active"}>
                <div className="slider-image-container">
                  <div className="slider-images">
                    <img
                      src={SliderData[5].image}
                      alt="slideimage"
                      className="slide-title-image"
                    ></img>
                  </div>
                </div>
                <div className="slider-title flex justify-center items-center text-2xl font-bold">
                  {SliderData[5].title}
                </div>
                <div className="ratings">
                  {" "}
                  <Ratings />
                </div>
                <div className="slider-des flex justify-center items-center text-lg p-2 ">
                  {SliderData[5].des}
                </div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>

      {/* mobile view */}

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
                <div className="slider-image-container-1">
                  <div className="slider-images">
                    <img
                      src={SliderData[0].image}
                      alt="slideimage"
                      className="slide-title-image"
                    ></img>{" "}
                  </div>
                </div>
                <div className="slider-title-1"> {SliderData[0].title}</div>
                <div className="ratings">
                  {" "}
                  <Ratings />
                </div>
                <div className="slider-des-1"> {SliderData[0].des}</div>
              </div>
            )}
          </SwiperSlide>

          <SwiperSlide className="slider-1">
            {({ isActive }) => (
              <div className={isActive ? "active-1" : "not-active-1"}>
                <div className="slider-image-container-1">
                  <div className="slider-images">
                    {" "}
                    <img
                      src={SliderData[1].image}
                      alt="slideimage"
                      className="slide-title-image"
                    ></img>{" "}
                  </div>
                </div>
                <div className="slider-title-1"> {SliderData[1].title}</div>
                <div className="ratings">
                  {" "}
                  <Ratings />
                </div>
                <div className="slider-des-1"> {SliderData[1].des}</div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider-1">
            {({ isActive }) => (
              <div className={isActive ? "active-1" : "not-active-1"}>
                {" "}
                <div className="slider-image-container-1">
                  <div className="slider-images">
                    {" "}
                    <img
                      src={SliderData[2].image}
                      alt="slideimage"
                      className="slide-title-image"
                    ></img>{" "}
                  </div>
                </div>
                <div className="slider-title-1"> {SliderData[2].title}</div>
                <div className="ratings">
                  {" "}
                  <Ratings />
                </div>
                <div className="slider-des-1"> {SliderData[2].des}</div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider-1">
            {({ isActive }) => (
              <div className={isActive ? "active-1" : "not-active-1"}>
                {" "}
                <div className="slider-image-container-1">
                  <div className="slider-images">
                    {" "}
                    <img
                      src={SliderData[3].image}
                      alt="slideimage"
                      className="slide-title-image"
                    ></img>{" "}
                  </div>
                </div>
                <div className="slider-title-1"> {SliderData[3].title}</div>
                <div className="ratings">
                  {" "}
                  <Ratings />
                </div>
                <div className="slider-des-1"> {SliderData[3].des}</div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider-1">
            {({ isActive }) => (
              <div className={isActive ? "active-1" : "not-active-1"}>
                {" "}
                <div className="slider-image-container-1">
                  <div className="slider-images">
                    {" "}
                    <img
                      src={SliderData[4].image}
                      alt="slideimage"
                      className="slide-title-image"
                    ></img>{" "}
                  </div>
                </div>
                <div className="slider-title-1"> {SliderData[4].title}</div>
                <div className="ratings">
                  {" "}
                  <Ratings />
                </div>
                <div className="slider-des-1"> {SliderData[4].des}</div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="slider-1">
            {({ isActive }) => (
              <div className={isActive ? "active-1" : "not-active-1"}>
                <div className="slider-image-container-1">
                  <div className="slider-images">
                    <img
                      src={SliderData[5].image}
                      alt="slideimage"
                      className="slide-title-image"
                    ></img>{" "}
                  </div>
                </div>
                <div className="slider-title-1"> {SliderData[5].title}</div>
                <div className="ratings">
                  {" "}
                  <Ratings />
                </div>
                <div className="slider-des-1"> {SliderData[5].des}</div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>

      {/* explore more link */}
      <div className="slider-explore">
        <p id="slider-explore-more"> Explore More </p>
      </div>
    </div>
  );
};

export default CardCarousel;
