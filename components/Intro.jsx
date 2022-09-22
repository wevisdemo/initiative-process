import React from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { device } from "./util";
export const Intro = () => {
  const handleLoading = () => {
    document.getElementById("loading").style.display = "none";
  };

  return (
    <div id="intro-wrapper" className="w-full overflow-x-hidden ">
      <div className=" w-[320px] lg:container mx-auto   " id="intro">
        <div className="relative ">
          <div className="  w-[24px] h-[24px] lg:w-[62px] lg:h-[62px] animate-bounce absolute bottom-0 lg:bottom-[15%] left-[50%] translate-x-[-50%] z-10  pointer-events-none">
            <Image src="/images/chevron.svg" layout="fill" objectFit="contain" />
          </div>
          <div className="relative z-10 mx-auto font-bold lg:pointer-events-none h-[568px] lg:h-screen h3">
            <div className="relative w-[283px] h-[98px] lg:w-[820px] lg:h-[420px] top-[200px] lg:top-[60px] flex justify-center   ">
              <p className="rotate-[15deg] relative lg:translate-y-[120px] translate-y-[-60%] left-5 lg:left-3">
                <span>เส้นทางกฎหมาย </span>
                <br className=" lg:hidden" />
                <span className=" text-lime">ของประชาชน</span>
              </p>
              <Image src="/images/intro_leg_1.svg" layout="fill" objectFit="contain" />
            </div>
            <div className="relative lg:w-[610px] w-[217px] h-[65px] lg:h-[300px] ml-auto top-[300px]  lg:top-0 ">
              <p className="-rotate-[15deg] relative top-[-70px] lg:top-[60px]">
                <span>
                  สุดท้าย
                  <br className=" lg:hidden" />
                  ไปจบที่ไหน...{" "}
                </span>
              </p>
              <Image src="/images/intro_leg_2.svg" layout="fill" objectFit="contain" />
            </div>
          </div>
          {device() === "labtop" && (
            <div className="absolute top-0 hidden w-full h-full lg:block">
              <Spline
                scene="https://prod.spline.design/E3l64mEHZYNC5zbn/scene.splinecode"
                onLoad={() => handleLoading()}
              />
            </div>
          )}
          {device() != "labtop" && (
            <div className="absolute top-0 w-full h-full lg:hidden">
              <Spline
                scene="https://prod.spline.design/wFfz2JgSeTIeo5rl/scene.splinecode"
                onLoad={() => handleLoading()}
              />
            </div>
          )}
        </div>
        <div className="relative overflow-hidden">
          <div className="relative w-[320px]  lg:w-[350px] border-2 border-white border-y-0 mx-auto text-center lg:pointer-events-none z-10">
            <p className=" mt-[84px] b4 pt-10">
              การลงชื่อเสนอกฎหมายของประชาชน
              <br /> อย่างที่หลายๆคนรู้ว่าเป็น
            </p>
            <p className=" mt-[134px] font-bold h3">ช่องทาง</p>
            <p className="font-bold h5">ประชาธิปไตย</p>
            <p className="font-bold h3">ทางตรง</p>
            <p className=" mt-[107px] b4">
              ที่เปิดโอกาสให้ประชาชนสามารถ
              <br />
              เสนอกฎหมายในแบบที่ต้องการได้{" "}
            </p>
            <p className="pb-10 mt-6 b4">
              สำหรับช่องทางนี้
              <br /> ปลายทางของสิ่งที่ประชาชนเสนอ
            </p>
          </div>
          {device() === "labtop" && (
            <div className="absolute top-0 hidden w-full h-full lg:block">
              <Spline scene="https://prod.spline.design/8aMCNzLozPWGWR70/scene.splinecode" />
            </div>
          )}
          {device() != "labtop" && (
            <div className="absolute top-0 w-full h-full lg:hidden">
              <Spline scene="https://prod.spline.design/MkKIeHHUF5d1vao8/scene.splinecode" />
            </div>
          )}
        </div>

        <div className="relative ">
          <div className="relative lg:w-[350px] h-[317px] mx-auto  text-center  flex items-center justify-center lg:pointer-events-none top-[-15px] z-10">
            <div className=" absolute  w-[66px] h-[320px] left-0 rotate-180 top-0  ">
              <Image src="/images/intro_serration.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="font-bold h6 ">
              อาจไม่ได้
              <br />
              เรียบง่าย
            </p>
            <div className=" absolute  w-[66px] h-[320px] right-0 top-0 translate-x-0  ">
              <Image src="/images/intro_serration.svg" layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className=" w-[320px]  lg:w-[480px] h-[300px] lg:h-[720px] relative text-center mx-auto top-[-25px] z-10 lg:pointer-events-none">
            <div
              className=" h-[270px] lg:h-[720px] w-[2px] bg-white absolute left-[-25px] lg:left-[-10px] top-[-3px] lg:top-[-10px]  rotate-12"
              id="line"
            />
            <div
              className=" h-[270px] lg:h-[720px] w-[2px] bg-white absolute top-[-3px]  lg:top-[-10px] right-[-25px] lg:right-[-10px] -rotate-12"
              id="line"
            />
            <p className="pt-10 b4">และเป็นไปตามเจตนารมณ์อย่างที่คิด</p>
          </div>
          {device() === "labtop" && (
            <div className="absolute top-0 hidden w-full h-full lg:block ">
              <Spline scene="https://prod.spline.design/riMsp148negqdlYv/scene.splinecode" />
            </div>
          )}
          {device() != "labtop" && (
            <div className="absolute top-0 overflow-hidden h-[617px] lg:hidden  w-[320px]">
              <Spline
                scene="https://prod.spline.design/MkKIeHHUF5d1vao8/scene.splinecode"
                className="absolute top-0 translate-x-[-36.5%]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
