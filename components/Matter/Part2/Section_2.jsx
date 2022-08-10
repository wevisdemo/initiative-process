import Image from "next/image";

import { drawBalls } from "./drawBalls";
import { y_2540, y_2550, y_2560 } from "../../../public/data/part_2/constitution";

export const Section_2 = ({ current }) => {
  // let isDrawed = false;

  const start = () => {
    // if (!isDrawed)
    drawBalls(current.world, y_2540);
    drawBalls(current.world, y_2550);
    drawBalls(current.world, y_2560);

    // const balls_2040 = document.getElementsByClassName("balls_2040");
    // Object.values(balls_2040).map((a) => (a.style.display = "none"));
    // isDrawed = true;
  };

  return (
    <div className="absolute z-20 w-full pt-16 text-center ">
      <div className="relative flex flex-col items-center " onClick={() => start()}>
        <p className="b4">
          จาก 33 ฉบับ <br />
          ที่ผ่านเข้าสู่วาระการประชุม <br />
          กระบวนการต่อไป คือ
        </p>
        <p className="font-black h6"> ขั้นตอนการพิจารณากฎหมาย</p>
        <div className="absolute top-0 flex flex-wrap opacity-0 ">
          {y_2540.map((d, index) => (
            <div key={index} className={`${d["รธน."]}_${d["ลำดับ"]}_2 }`}>
              .
            </div>
          ))}
          {y_2550.map((d, index) => (
            <div key={index} className={`${d["รธน."]}_${d["ลำดับ"]}_2 }`}>
              .
            </div>
          ))}
          {y_2560.map((d, index) => (
            <div key={index} className={`${d["รธน."]}_${d["ลำดับ"]}_2 }`}>
              .
            </div>
          ))}
        </div>
      </div>
      <div className="h-full" id="leg_section_2_wrapper">
        <div className={` opacity-0  relative w-[500px] h-[197px] mx-auto top-[300px]`} id="leg_start_section_2">
          .
        </div>
        <div className={` relative w-[550px] h-[197px] mx-[63%] top-[600px]`} id="leg_15">
          <Image src="/images/leg_13.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[250px] h-[433px] left-[55%]  top-[500px]`} id="leg_16">
          <Image src="/images/leg_14.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[600px] h-[197px] mx-[63%] top-[600px]`} id="leg_17">
          <Image src="/images/leg_15.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[550px] h-[197px] mx-[42%] top-[680px]`} id="leg_18">
          <Image src="/images/leg_16.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative  w-[250px] h-[433px] mx-[33%] top-[500px]`} id="leg_19">
          <Image src="/images/leg_17.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[450px] h-[197px] mx-[40%] top-[550px]`} id="leg_20">
          <Image src="/images/leg_18.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[500px] h-[197px] mx-[65%] top-[550px]`} id="leg_21">
          <Image src="/images/leg_19.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[450px] h-[197px] mx-[15%] top-[450px]`} id="leg_22">
          <Image src="/images/leg_20.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[800px] h-[197px] mx-[20%] top-[550px]`} id="leg_23">
          <Image src="/images/leg_21.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative  w-[250px] h-[433px] mx-[0%] top-[500px]`} id="leg_24">
          <Image src="/images/leg_17.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[450px] h-[300px] mx-[6%] top-[500px]`} id="leg_25">
          <Image src="/images/leg_22.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[400px] h-[197px] mx-[30%] top-[500px] `} id="leg_26">
          <Image src="/images/leg_23.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[200px] h-[433px] mx-[-1%] top-[150px]`} id="leg_27">
          <Image src="/images/leg_24.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};
