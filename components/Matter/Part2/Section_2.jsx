import Image from "next/image";

import { drawBalls } from "../drawBalls";
import { y_2540, y_2550_1, y_2550_2, y_2560_1, y_2560_2 } from "../../../public/data/constitution";
import { vwToPixels } from "../../util";
export const Section_2 = ({ current }) => {
  // let isDrawed = false;

  const start = () => {
    // if (!isDrawed)
    drawBalls(current.world, y_2540);
    // setTimeout(() => {
    //   drawBalls(current.world, y_2550_2);
    // }, 5000);
    // setTimeout(() => {
    //   drawBalls(current.world, y_2550_1);
    // }, 10000);
    // setTimeout(() => {
    //   drawBalls(current.world, y_2560_1);
    // }, 15000);
    // setTimeout(() => {
    //   drawBalls(current.world, y_2560_2);
    // }, 20000);

    // const balls_2040 = document.getElementsByClassName("balls_2040");
    // Object.values(balls_2040).map((a) => (a.style.display = "none"));
    // isDrawed = true;
  };

  return (
    <div className="z-20 w-full mt-[150px] text-center ">
      <div className="flex flex-col items-center ">
        <p className="b4">
          จาก 33 ฉบับ <br />
          ที่ผ่านเข้าสู่วาระการประชุม <br />
          กระบวนการต่อไป คือ
        </p>
        <p className="font-black h6"> ขั้นตอนการพิจารณากฎหมาย</p>
      </div>
      <div className="h-full" id="leg_section_1_wrapper">
        <div className={` relative w-[721px] h-[197px] mx-auto top-[267px]`} id="leg_13">
          <Image src="/images/leg_13.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[700px] h-[197px] left-[-80px]  top-[700px]`} id="leg_14">
          <Image src="/images/leg_14.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[600px] h-[197px] mx-[60%] top-[700px]`} id="leg_15">
          <Image src="/images/leg_15.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[600px] h-[197px] mx-[36%] top-[780px]`} id="leg_16">
          <Image src="/images/leg_16.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[600px] h-[197px] mx-[12%] top-[880px]`} id="leg_17">
          <Image src="/images/leg_17.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[250px] h-[433px] mx-[2%] top-[750px]`} id="leg_18">
          <Image src="/images/leg_18.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[600px] h-[197px] mx-[11%] top-[800px]`} id="leg_19">
          <Image src="/images/leg_19.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[800px] h-[197px] mx-[30%] top-[900px]`} id="leg_20">
          <Image src="/images/leg_20.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[250px] h-[433px] mx-[0] top-[600px]`} id="leg_21">
          <Image src="/images/leg_21.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[800px] h-[300px] mx-[6%] top-[550px]`} id="leg_22">
          <Image src="/images/leg_22.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[150px] h-[433px] mx-[0%] top-[350px] opacity-0`} id="leg_23">
          <Image src="/images/leg_23.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[650px] h-[170px] mx-auto top-[450px]`} id="leg_24">
          <Image src="/images/leg_24.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[650px] h-[170px] mx-auto top-[450px]`} id="leg_25">
          <Image src="/images/leg_25.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};
