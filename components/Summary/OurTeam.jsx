import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import Image from "next/image";
import SwiperCore, { Navigation } from "swiper/core";
import { ourTeam } from "../../public/data/Team";
import fb from "../../public/images/fb.svg";
import twt from "../../public/images/twt.svg";
import tel from "../../public/images/tel.svg";
import web from "../../public/images/web.svg";

SwiperCore.use([Navigation]);

export const OurTeam = () => {
  const copy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied");
  };

  return (
    <div className="container flex flex-col items-center py-24 mx-auto lg:h-screen ">
      <p className="font-bold text-center b2">ส่วนหนึ่งขององค์กรที่คอยผลักดันเรื่องการเสนอกฎหมาย</p>
      <p className="text-center b4">
        ขอหยิบยกบางส่วนให้เพื่อให้พวกเราคอยติดตามข้อมูล สนับสนุน ร่วมลงชื่อเสนอกฎหมาย กับองค์กรเหล่านี้ได้
      </p>
      <div id="swiper" className="mt-12 ">
        <div className="container max-w-[100vw] mx-auto   " id="wrapper">
          <Swiper className="mySwiper" navigation={true} slidesPerView="auto" freeMode={true}>
            {ourTeam.map((team, index) => {
              return (
                <SwiperSlide key={index} className=" border border-whitepx-3   rounded-[10px] p-4 md:p-6  ">
                  <div className=" relative w-[200px] h-[140px] md:w-[240px] md:h-[180px] lg:w-[320px] lg:h-[240px] mb-2 ">
                    <Image src={team.img} layout="fill" objectFit="cover" />
                  </div>
                  <p className="font-bold b4">{team.unit}</p>
                  <p className="mt-2 b5">{team.details}</p>
                  <div id="social" className="flex mt-4 space-x-2 md:space-x-3">
                    {team.facebook && (
                      <a
                        className=" relative  lg:w-[40px] lg:h-[40px] w-[32px] h-[32px] "
                        id="fb"
                        href={team.facebook}
                        target="_blank"
                        rel="facebook"
                      >
                        <Image src={fb} layout="fill" objectFit="cover" />
                      </a>
                    )}
                    {team.twitter1 && (
                      <a
                        className=" relative  w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] "
                        id="twt"
                        href={team.twitter1}
                        target="_blank"
                        rel="twitter"
                      >
                        <Image src={twt} layout="fill" objectFit="cover" />
                      </a>
                    )}
                    {team.twitter2 && (
                      <a
                        className=" relative  lg:w-[40px] lg:h-[40px] w-[32px] h-[32px] "
                        id="twt"
                        href={team.twitter2}
                        target="_blank"
                        rel="twitter"
                      >
                        <Image src={twt} layout="fill" objectFit="cover" />
                      </a>
                    )}
                    {team.tel && (
                      <div
                        className=" relative  lg:w-[40px] lg:h-[40px] w-[32px] h-[32px] cursor-pointer "
                        id="tel"
                        onClick={() => copy(team.tel)}
                      >
                        <Image src={tel} layout="fill" objectFit="cover" />
                      </div>
                    )}
                    {team.website && (
                      <a
                        className=" relative  lg:w-[40px] lg:h-[40px] w-[32px] h-[32px] "
                        id="web"
                        href={team.website}
                        target="_blank"
                        rel="website"
                      >
                        <Image src={web} layout="fill" objectFit="cover" />
                      </a>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
