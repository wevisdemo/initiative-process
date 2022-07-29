import Image from "next/image";

import { drawBalls } from "../drawBalls";
import { y_2540 } from "../../../public/data/constitution";
export const Page1 = ({ current }) => {
  let isDrawed = false;

  const start = () => {
    if (!isDrawed) drawBalls(current.world, y_2540);
    // const balls_2040 = document.getElementsByClassName("balls_2040");
    // Object.values(balls_2040).map((a) => (a.style.display = "none"));
    isDrawed = true;
  };

  return (
    <div className="absolute z-20 flex flex-col items-center w-full h-screen mt-16 text-center ">
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
      <div className=" relative w-[112px] h-[112px] mt-20 cursor-pointer" id="start_btn" onClick={() => start()}>
        <Image src="/images/start.svg" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};
