import Image from "next/image";
import { DiagramCompare } from "../../DiagramCompare";
import { DiagramPart2Full } from "../../DiagramPart2Full";
import { DiagramPart2 } from "../../DiagramPart2";
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
    <div id="DetailsCanvas_Part2" className="relative w-full ">
      <div className=" sticky top-0 lg:h-[30vh] h-[0px] lg:z-10  lg:w-[50%] ">
        <div className="relative flex items-center justify-center h-screen ">
          <div id="DiagramPart2Full" className="absolute opacity-0 cursor-pointer">
            <DiagramPart2Full />
          </div>
          <div id="DiagramPart2" className="absolute cursor-pointer ">
            <DiagramPart2 />
          </div>
          <div id="DiagramCompare" className="absolute opacity-0 cursor-pointer">
            <DiagramCompare />
          </div>
        </div>
      </div>
      <div className="relative bg-black bg-opacity-75 ">
        <div className="relative flex h-screen ">
          <div className="flex-1 hidden lg:block" />
          <div className="flex flex-col justify-center flex-1 " id="detail_step_6">
            <div className="max-w-[470px] mx-auto">
              <p className="b3">
                หลังจากที่ผ่านขั้นตอนที่ดูเหมือนจะไม่มีวันจบสิ้น
                <br /> ในรอบที่สอง ขั้นของการพิจารณากฎหมาย
                <br />
                กระบวนการที่ติดค้างอยู่มากที่สุด คือ
              </p>
              <div className={` relative w-[250px] h-[250px] md:w-[305px] md:h-[305px] mt-4 mx-auto `}>
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
          <div className="flex-1 hidden lg:block" />
          <div className="flex flex-col flex-1 " id="detail_step_7">
            <SummaryAll />
          </div>
        </div>
        <div className="relative flex min-h-screen mt-40 md:my-0 ">
          <div className="flex-1 hidden lg:block" />
          <div className="flex flex-col justify-center flex-1 " id="detail_step_8">
            <StepConsider />
          </div>
        </div>
        <div className="relative flex h-screen ">
          <div className="flex-1 hidden lg:block" />
          <div className="flex flex-col justify-center flex-1 " id="detail_step_9">
            <StepAdjust />
          </div>
        </div>
        <div className="relative flex h-screen ">
          <div className="flex-1 hidden lg:block" />
          <div className="flex flex-col justify-center flex-1 " id="detail_step_10">
            <CompareStep1 />
          </div>
        </div>
        <div className="relative flex h-screen ">
          <div className="flex-1 hidden lg:block" />
          <div className="flex flex-col justify-center flex-1 " id="detail_step_11">
            <CompareStep3 />
          </div>
        </div>
        <div className="relative flex h-screen ">
          <div className="flex-1 hidden lg:block" />
          <div className="flex flex-col justify-center flex-1 " id="detail_step_12">
            <CompareStep45 />
          </div>
        </div>
        <div className="relative flex h-screen ">
          <div className="flex-1 hidden lg:block" />
          <div className="flex flex-col justify-center flex-1 " id="detail_step_13">
            <CompareStep6 />
          </div>
        </div>
        <div className="relative flex h-screen ">
          <div className="flex-1 hidden lg:block" />
          <div className="flex flex-col justify-center flex-1 " id="detail_step_14">
            <CompareStep7 />
          </div>
        </div>
      </div>
    </div>
  );
};
