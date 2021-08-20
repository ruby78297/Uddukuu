import React from "react";
import "./Services.css";
import Cards from "./Cards";
import { CardData } from "./CardData";

//Importing swiper for mobile view
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

const Services = () => {
  return (
    <div className="services-parent">
      <div className="services-title">Discover Top Music Production Pros</div>
      <div className="services">
        <div className="card-1 service-card ">
          <Cards
            id={CardData[0].id}
            title={CardData[0].title}
            des={CardData[0].des}
            image={CardData[0].image}
          ></Cards>
        </div>
        <div className="card-2 service-card">
          {" "}
          <Cards
            id={CardData[1].id}
            title={CardData[1].title}
            des={CardData[1].des}
            image={CardData[1].image}
          ></Cards>
        </div>

        <div className="card-3 service-card">
          {" "}
          <Cards
            id={CardData[2].id}
            title={CardData[2].title}
            des={CardData[2].des}
            image={CardData[2].image}
          ></Cards>
        </div>

        <div className="card-4 service-card">
          <Cards
            id={CardData[3].id}
            title={CardData[3].title}
            des={CardData[3].des}
            image={CardData[3].image}
          ></Cards>
        </div>

        <div className="card-5 service-card">
          <Cards
            id={CardData[4].id}
            title={CardData[4].title}
            des={CardData[4].des}
            image={CardData[4].image}
          ></Cards>
        </div>

        <div className="card-6 service-card">
          <Cards
            id={CardData[5].id}
            title={CardData[5].title}
            des={CardData[5].des}
            image={CardData[5].image}
          ></Cards>
        </div>
      </div>

      {/* mobile view   */}

      <div className="servicesmobile" id="services-mobile">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.5}
          grabCursor={true}
          loop={true}
          // pagination={{ clickable: false }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="services-slider">
            <div className="card-1 service-card-mobile ">
              <Cards
                id={CardData[0].id}
                title={CardData[0].title}
                des={CardData[0].des}
              ></Cards>
            </div>
            {/* <div className="mobile-card-1 mobile-card">
              <div>{CardData[0].title}</div>
              <div>{CardData[0].des} </div>
            </div> */}
          </SwiperSlide>

          <SwiperSlide className="services-slider">
            <div className="card-2 service-card-mobile">
              {" "}
              <Cards
                id={CardData[1].id}
                title={CardData[1].title}
                des={CardData[1].des}
              ></Cards>
            </div>

            {/* <div className="mobile-card-2 mobile-card">
              <div>{CardData[1].title}</div>
              <div>{CardData[1].des} </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide className="services-slider">
            <div className="card-3 service-card-mobile">
              {" "}
              <Cards
                id={CardData[2].id}
                title={CardData[2].title}
                des={CardData[2].des}
                image={CardData[2].image}
              ></Cards>
            </div>
            {/* 
            <div className="mobile-card-3 mobile-card">
              <div>{CardData[2].title}</div>
              <div>{CardData[2].des} </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide className="services-slider">
            <div className="card-4 service-card-mobile">
              <Cards
                id={CardData[3].id}
                title={CardData[3].title}
                des={CardData[3].des}
                image={CardData[3].image}
              ></Cards>
            </div>

            {/* <div className="mobile-card-4 mobile-card">
              <div>{CardData[3].title}</div>
              <div>{CardData[3].des} </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide className="services-slider">
            <div className="card-5 service-card-mobile">
              <Cards
                id={CardData[4].id}
                title={CardData[4].title}
                des={CardData[4].des}
                image={CardData[4].image}
              ></Cards>
            </div>

            {/* <div className="mobile-card-5 mobile-card">
              <div>{CardData[4].title}</div>
              <div>{CardData[4].des} </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide className="services-slider">
            <div className="card-6 service-card-mobile">
              <Cards
                id={CardData[5].id}
                title={CardData[5].title}
                des={CardData[5].des}
                image={CardData[5].image}
              ></Cards>
            </div>

            {/* <div className="mobile-card-6 mobile-card">
              <div>{CardData[5].title}</div>
              <div>{CardData[5].des} </div>
            </div> */}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
