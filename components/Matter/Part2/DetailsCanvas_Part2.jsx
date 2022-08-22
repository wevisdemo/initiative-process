import Image from "next/image";
import { CompareStep1 } from "./CompareStep1";
import { CompareStep3 } from "./CompareStep3";
import { CompareStep45 } from "./CompareStep45";
import { CompareStep6 } from "./CompareStep6";
import { CompareStep7 } from "./CompareStep7";
import { StepAdjust } from "./StepAdjust";
import { StepConsider } from "./StepConsider";
import { SummaryAll } from "./SummaryAll";
export const DetailsCanvas_Part2 = () => {
  return (
    <div id="DetailsCanvas_Part1" className="relative w-full ">
      <div className=" sticky top-0 h-[30vh] w-[50%] ">
        <div className="h-screen bg-lime">Strick</div>
      </div>
      <div className="relative flex h-screen ">
        <div className="flex-1" />
        <div className="flex flex-col justify-center flex-1 ">
          <div className="max-w-[470px] mx-auto">
            <p className="b3">
              หลังจากที่ผ่านขั้นตอนที่ดูเหมือนจะไม่มีวันจบสิ้น
              <br /> ในรอบที่สอง ขั้นของการพิจารณากฎหมาย
              <br />
              กระบวนการที่ติดค้างอยู่มากที่สุด คือ
            </p>
            <div className={` relative w-[305px] h-[305px] mt-4 mx-auto `}>
              <Image src="/images/rank_part2.svg" layout="fill" objectFit="contain" />
            </div>
            <div className="flex items-center justify-center mt-10 b2 ">
              ขั้นตอนที่
              <div className={` relative w-[30px] h-[30px] ml-2 `}>
                <Image src="/images/bullet_11_white.svg" layout="fill" objectFit="contain" />
              </div>
            </div>
            <div className="text-center ">
              <p className="b2">ส.ส.วาระ 1 รับหลักการ</p>
              <p className="b2">
                <span className="font-bold ">5</span> ฉบับ
              </p>
              <p className="mt-4 b3">และยังมีที่รอการพิจารณาในขั้นตอนนี้อยู่อีก 9 ฉบับ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex ">
        <div className="flex-1" />
        <div className="flex flex-col flex-1 ">
          <SummaryAll />
        </div>
      </div>
      <div className="relative flex h-screen ">
        <div className="flex-1" />
        <div className="flex flex-col justify-center flex-1 ">
          <StepConsider />
        </div>
      </div>
      <div className="relative flex h-screen ">
        <div className="flex-1" />
        <div className="flex flex-col justify-center flex-1 ">
          <StepAdjust />
        </div>
      </div>
      <div className="relative flex h-screen ">
        <div className="flex-1" />
        <div className="flex flex-col justify-center flex-1 ">
          <CompareStep1 />
        </div>
      </div>
      <div className="relative flex h-screen ">
        <div className="flex-1" />
        <div className="flex flex-col justify-center flex-1 ">
          <CompareStep3 />
        </div>
      </div>
      <div className="relative flex h-screen ">
        <div className="flex-1" />
        <div className="flex flex-col justify-center flex-1 ">
          <CompareStep45 />
        </div>
      </div>
      <div className="relative flex h-screen ">
        <div className="flex-1" />
        <div className="flex flex-col justify-center flex-1 ">
          <CompareStep6 />
        </div>
      </div>
      <div className="relative flex h-screen ">
        <div className="flex-1" />
        <div className="flex flex-col justify-center flex-1 ">
          <CompareStep7 />
        </div>
      </div>
    </div>
  );
};