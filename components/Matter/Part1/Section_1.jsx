import Image from "next/image";

import { drawBalls } from "./drawBalls";
import { y_2540, y_2550_1, y_2550_2, y_2560_1, y_2560_2 } from "../../../public/data/part_1/constitution";
import { vwToPixels } from "../../util";
export const Section_1 = ({ current }) => {
  // let isDrawed = false;

  const start = () => {
    // if (!isDrawed)
    drawBalls(current.world, y_2540);
    setTimeout(() => {
      drawBalls(current.world, y_2550_2);
    }, 5000);
    setTimeout(() => {
      drawBalls(current.world, y_2550_1);
    }, 10000);
    setTimeout(() => {
      drawBalls(current.world, y_2560_1);
    }, 15000);
    setTimeout(() => {
      drawBalls(current.world, y_2560_2);
    }, 20000);

    // const balls_2040 = document.getElementsByClassName("balls_2040");
    // Object.values(balls_2040).map((a) => (a.style.display = "none"));
    // isDrawed = true;
  };

  return (
    <div className="absolute z-20 w-full pt-16 text-center ">
      <div className="flex flex-col items-center ">
        <p className="b4">
          หรืออาจเป็นเพราะกระบวนการ
          <br />
          ที่ส่งผลต่อการลงชื่อเสนอกฎหมาย
        </p>
        <p className="mt-6 b4">โดยแบ่งเป็น</p>
        <p className="font-black h6"> ขั้นตอนการเสนอกฎหมาย</p>
        <p className="mt-6 b4">และ</p>
        <p className="font-black h6"> ขั้นตอนการพิจารณากฎหมาย</p>
        <p className="mt-6 b4">มาดูกันว่าขั้นตอนไหนที่ทำให้กฎหมายประชาชนไปไม่ถึงปลายทาง</p>
        <div className="   relative w-[112px] h-[112px] mt-20 cursor-pointer" id="start_btn" onClick={() => start()}>
          <Image src="/images/start.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="h-full" id="leg_section_1_wrapper">
        <div className={` opacity-0 relative w-[500px] h-[197px] mx-auto top-[400px]`} id="leg_startsection_1">
          .
        </div>
        <div className={` relative w-[500px] h-[197px] mx-auto top-[600px]`} id="leg_01">
          <Image src="/images/leg_01.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[700px] h-[197px] left-[-80px]  top-[700px]`} id="leg_02">
          <Image src="/images/leg_02.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[600px] h-[197px] mx-[60%] top-[700px]`} id="leg_03">
          <Image src="/images/leg_03.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[600px] h-[197px] mx-[36%] top-[780px]`} id="leg_04">
          <Image src="/images/leg_04.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[700px] h-[197px] mx-[12%] top-[880px]`} id="leg_05">
          <Image src="/images/leg_05.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[250px] h-[433px] mx-[2%] top-[750px]`} id="leg_07">
          <Image src="/images/leg_07.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[600px] h-[197px] mx-[11%] top-[800px]`} id="leg_06">
          <Image src="/images/leg_06.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[800px] h-[197px] mx-[30%] top-[900px]`} id="leg_08">
          <Image src="/images/leg_08.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[250px] h-[433px] mx-[0] top-[600px]`} id="leg_09">
          <Image src="/images/leg_07.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[800px] h-[300px] mx-[6%] top-[550px]`} id="leg_10">
          <Image src="/images/leg_09.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[150px] h-[433px] mx-[0%] top-[350px] opacity-0`} id="leg_11">
          <Image src="/images/leg_07.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[650px] h-[170px] mx-auto top-[450px]`} id="leg_12">
          <Image src="/images/leg_10.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[850px] h-[190px] mx-[42%] top-[600px]`} id="leg_13">
          <Image src="/images/leg_11.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[280px] h-[350px] mx-[3%] top-[300px]`} id="leg_14">
          <Image src="/images/leg_12.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};
