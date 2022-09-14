import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import { device } from "../util";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

export const OurTeam = () => {
  const chart_list = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col items-center h-screen pt-24 ">
      <p className="font-bold b2">ส่วนหนึ่งขององค์กรที่คอยผลักดันเรื่องการเสนอกฎหมาย</p>
      <p className="b4">
        ขอหยิบยกบางส่วนให้เพื่อให้พวกเราคอยติดตามข้อมูล สนับสนุน ร่วมลงชื่อเสนอกฎหมาย กับองค์กรเหล่านี้ได้
      </p>
      <div id="swiper" className="w-full ">
        <div className="container mx-auto " id="wrapper">
          <Swiper className="mySwiper" navigation={true} slidesPerView="auto" freeMode={true} spaceBetween={30}>
            {chart_list.map((_, index) => {
              return (
                <SwiperSlide key={index} className=" bg-purple">
                  {index}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
