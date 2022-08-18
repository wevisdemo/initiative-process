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
      <div
        className="relative flex flex-col items-center pointer-events-none "
        onClick={() => start()}
        id="click_start_draw_section_2"
      >
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
        {/* -------- */}
        <div className={` relative w-[550px] h-[197px] mx-[63%] top-[600px]`} id="leg_15">
          <Image src="/images/leg_13.svg" layout="fill" objectFit="contain" />
          <div className="absolute -top-[60%]  left-[25%]   ">
            <div className="px-2 py-1 rounded-full b2 bg-gray">ชั้น ส.ส.</div>
            <p className="relative text-center b2">
              ส.ส.วาระ 1<br />
              <b>รับหลักการ</b>
            </p>
          </div>
        </div>
        {/* -------- */}
        <div className={` relative w-[250px] h-[433px] left-[55%]  top-[500px]`} id="leg_16">
          <Image src="/images/leg_14.svg" layout="fill" objectFit="contain" />
          <div className="absolute top-[25%] w-[500px]   ">
            <p className="relative text-center b2">
              ส.ส.วาระ 2 <br />
              <b>ตั้งคณะกรรมาธิการ</b>
            </p>
          </div>
        </div>
        {/* -------- */}
        <div className={` relative w-[600px] h-[197px] mx-[63%] top-[600px]`} id="leg_17">
          <Image src="/images/leg_15.svg" layout="fill" objectFit="contain" />
          <div className="absolute -top-[40%] left-[26%]   ">
            <p className="relative text-center b2">
              ส.ส.วาระ 3<br />
              <b> ลงมติ</b>
            </p>
          </div>
        </div>
        {/* -------- */}
        <div className={` relative w-[550px] h-[197px] mx-[42%] top-[680px]`} id="leg_18">
          <Image src="/images/leg_16.svg" layout="fill" objectFit="contain" />
          <div className="absolute -top-[60%]  left-[25%]   ">
            <div className="px-2 py-1 rounded-full b2 bg-gray">ชั้น ส.ว.</div>
            <p className="relative text-center b2">
              ส.ว.วาระ 1
              <br />
              <b>รับหลักการ</b>
            </p>
          </div>
        </div>
        {/* -------- */}
        <div className={` relative  w-[250px] h-[433px] mx-[33%] top-[500px]`} id="leg_19">
          <Image src="/images/leg_17.svg" layout="fill" objectFit="contain" />
          <div className="absolute top-[45%]  w-[400px]   ">
            <p className="relative text-center b2">
              ส.ส.วาระ 3<br />
              <b> ลงมติ</b>
            </p>
          </div>
        </div>
        {/* -------- */}
        <div className={` relative w-[450px] h-[197px] mx-[40%] top-[550px]`} id="leg_20">
          <Image src="/images/leg_18.svg" layout="fill" objectFit="contain" />
          <div className="absolute -top-[40%] left-[39%]   ">
            <p className="relative text-center b2">
              ส.ว.วาระ 3 <br /> <b>ลงมติ</b>
            </p>
          </div>
        </div>
        {/* -------- */}
        <div className={` relative w-[500px] h-[197px] mx-[65%] top-[550px]`} id="leg_21">
          <Image src="/images/leg_19.svg" layout="fill" objectFit="contain" />
          <div className="absolute left-[25%] top-[15%]   ">
            <p className="relative text-center b2">
              <b>ส่งคืนยับยั้ง</b> <br />
              180 วัน
            </p>
          </div>
        </div>
        {/* -------- */}
        <div className={` relative w-[450px] h-[197px] mx-[15%] top-[450px]`} id="leg_22">
          <Image src="/images/leg_20.svg" layout="fill" objectFit="contain" />
          <div className="absolute -top-[40%]  left-[25%]   ">
            <div className="px-2 py-1 rounded-full b2 bg-gray"> ชั้น ศาลรัฐธรรมนูญ</div>
            <p className="relative text-center b2">
              <b>ศาลรัฐธรรมนูญพิจารณา</b>
            </p>
          </div>
        </div>
        {/* -------- */}
        <div className={` relative w-[800px] h-[197px] mx-[20%] top-[550px]`} id="leg_23">
          <Image src="/images/leg_21.svg" layout="fill" objectFit="contain" />
        </div>
        {/* ----x---- */}
        <div className={` relative  w-[250px] h-[433px] mx-[0%] top-[500px]`} id="leg_24">
          <Image src="/images/leg_17.svg" layout="fill" objectFit="contain" />
        </div>
        {/* -------- */}
        <div className={` relative w-[450px] h-[300px] mx-[6%] top-[500px]`} id="leg_25">
          <Image src="/images/leg_22.svg" layout="fill" objectFit="contain" />
          <div className="absolute left-[35%] top-[5%]   ">
            <p className="relative text-center b2">
              ส่งให้ <b>กษัตริย์</b>
            </p>
          </div>
        </div>
        {/* -------- */}
        <div className={` relative w-[400px] h-[197px] mx-[30%] top-[500px] `} id="leg_26">
          <Image src="/images/leg_23.svg" layout="fill" objectFit="contain" />
          <div className="absolute left-[45%] -top-[35%]   ">
            <p className="relative text-center b2">
              <b>ประชุมรัฐสภา</b>
              <br />
              ลงมติ 2/3 (500เสียง)
            </p>
          </div>
        </div>
        {/* -------- */}
        <div className={` relative w-[200px] h-[433px] mx-[-1%] top-[150px]`} id="leg_27">
          <Image src="/images/leg_24.svg" layout="fill" objectFit="contain" />
          <div className="absolute top-[40%] w-[400px]   ">
            <p className="relative text-center b2">
              ประกาศลง
              <br />
              ในราชกิจจานุเบกษา
            </p>
          </div>
        </div>
        {/* -------- */}
      </div>
    </div>
  );
};
