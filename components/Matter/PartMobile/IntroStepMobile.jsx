import Image from "next/image";
import { drawBalls2040 } from "./drawBalls2040";
import { drawBalls2050 } from "./drawBalls2050";
import { drawBalls2060 } from "./drawBalls2060";
import { y_2540, y_2550_1, y_2550_2, y_2560_1, y_2560_2 } from "../../../public/data/part_1/constitution";

export const IntroStepMobile = ({ current }) => {
  let isDrawed = false;

  const start = () => {
    if (!isDrawed) {
      drawBalls2040(current.world, y_2540);

      setTimeout(() => {
        drawBalls2050(current.world, y_2550_2);
      }, 7000);
      setTimeout(() => {
        drawBalls2050(current.world, y_2550_1);
      }, 13000);
      setTimeout(() => {
        drawBalls2060(current.world, y_2560_1);
      }, 20000);
      setTimeout(() => {
        drawBalls2060(current.world, y_2560_2);
      }, 28000);
    }

    isDrawed = true;
  };

  return (
    <div className="relative z-20 flex-col items-center mb-10 text-center ">
      <p className="mt-8 b4">
        หรืออาจเป็นเพราะกระบวนการ
        <br className=" lg:hidden" /> ที่ส่งผลต่อการลงชื่อเสนอกฎหมาย
      </p>
      <p className="mt-6 b4">โดยแบ่งเป็น</p>
      <p className="font-black h6">
        ขั้นตอนการ
        <br />
        เสนอกฎหมาย
      </p>
      <p className="mt-6 b4">และ</p>
      <p className="font-black h6">
        {" "}
        ขั้นตอนการ
        <br />
        พิจารณากฎหมาย
      </p>
      <p className="mt-6 b4">
        มาดูกันว่าขั้นตอนไหนที่ทำให้กฎหมาย
        <br />
        ประชาชนไปไม่ถึงปลายทาง
      </p>
      <div
        className="   relative w-[70px] h-[70px]  lg:w-[112px] lg:h-[112px] mx-auto mt-20 cursor-pointer"
        id="start_btn_mobile"
        onClick={() => start()}
      >
        <Image src="/images/start.svg" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};
