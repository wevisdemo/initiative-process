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
    <div className="flex flex-col items-center h-screen pt-24 w-[90%] mx-auto ">
      <p className="font-bold b2">ส่วนหนึ่งขององค์กรที่คอยผลักดันเรื่องการเสนอกฎหมาย</p>
      <p className="text-center b4">
        ขอหยิบยกบางส่วนให้เพื่อให้พวกเราคอยติดตามข้อมูล สนับสนุน ร่วมลงชื่อเสนอกฎหมาย กับองค์กรเหล่านี้ได้
      </p>
      <div id="swiper" className="w-full mt-12 ">
        <div className="container mx-auto " id="wrapper">
          <Swiper className="mySwiper" navigation={true} slidesPerView="auto" freeMode={true} spaceBetween={30}>
            {ourTeam.map((team, index) => {
              return (
                <SwiperSlide key={index} className=" border border-white  rounded-[10px] p-6 ">
                  <div className=" relative w-[240px] h-[180px] lg:w-[320px] lg:h-[240px] mb-2">
                    <Image src={team.img} layout="fill" objectFit="cover" />
                  </div>
                  <p className="font-bold b4">{team.unit}</p>
                  <p className="mt-2 b5">{team.details}</p>
                  <div id="social" className="flex mt-4 space-x-2">
                    {team.facebook && (
                      <a
                        className=" relative w-[40px] h-[40px] lg:w-[32px] lg:h-[32px] "
                        id="fb"
                        href={team.facebook}
                        target="_blank"
                      >
                        <Image src={fb} layout="fill" objectFit="cover" />
                      </a>
                    )}
                    {team.twitter1 && (
                      <a
                        className=" relative w-[40px] h-[40px] lg:w-[32px] lg:h-[32px] "
                        id="twt"
                        href={team.twitter1}
                        target="_blank"
                      >
                        <Image src={twt} layout="fill" objectFit="cover" />
                      </a>
                    )}
                    {team.twitter2 && (
                      <a
                        className=" relative w-[40px] h-[40px] lg:w-[32px] lg:h-[32px] "
                        id="twt"
                        href={team.twitter2}
                        target="_blank"
                      >
                        <Image src={twt} layout="fill" objectFit="cover" />
                      </a>
                    )}
                    {team.tel && (
                      <div
                        className=" relative w-[40px] h-[40px] lg:w-[32px] lg:h-[32px]  cursor-pointer"
                        id="tel"
                        onClick={() => copy(team.tel)}
                      >
                        <Image src={tel} layout="fill" objectFit="cover" />
                      </div>
                    )}
                    {team.website && (
                      <a
                        className=" relative w-[40px] h-[40px] lg:w-[32px] lg:h-[32px]  "
                        id="web"
                        href={team.website}
                        target="_blank"
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
