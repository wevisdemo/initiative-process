import React from "react";

import { y_2540, y_2550, y_2560 } from "../public/data/part_1/constitution";
import { color_circle } from "./util";
import { PinBallToolTip } from "./PinBallToolTip";

export const ExpandYear = () => {
  const Ratio = () => {
    return (
      <div className="flex space-y-2 lg:space-x-[32px] flex-col lg:flex-row mt-3">
        <div className="flex items-center">
          <div className="circle_ratio" style={{ background: color_circle("สังคม") }} />
          <p className="ml-[8px]">
            สังคม <span className="font-bold ">54</span> ฉบับ
          </p>
        </div>
        <div className="flex items-center">
          <div className="circle_ratio" style={{ background: color_circle("เศรษฐกิจ") }} />
          <p className="ml-[8px]">
            เศรษฐกิจ <span className="font-bold ">29</span> ฉบับ
          </p>
        </div>
        <div className="flex items-center">
          <div className="circle_ratio" style={{ background: color_circle("การเมือง") }} />
          <p className="ml-[8px]">
            การเมือง <span className="font-bold ">36</span> ฉบับ
          </p>
        </div>
        <div className="flex items-center">
          <div className="circle_ratio" style={{ background: color_circle("ศาสนาและวัฒนธรรม") }} />
          <p className="ml-[8px]">
            ศาสนาและวัฒนธรรม <span className="font-bold ">8</span> ฉบับ
          </p>
        </div>
      </div>
    );
  };

  const YearDetail = ({ data, year, image }) => {
    return (
      <div className="flex flex-col items-center lg:flex-1 border border-t-0 px-[15px] h-[400px] lg:h-auto lg:px-[20px] pb-5 border-white">
        <p className="b1">รัฐธรรมนูญ</p>
        <p className="font-black h3">{year}</p>
        <p className="opacity-75 b6">11 ต.ค. 40 - 23 ส.ค. 50</p>
        <div className="flex items-center mt-4 b4 mb-9">
          <img src={image} alt="image" className=" relative lg:w-[24px] w-[16px] h-[16px] lg:h-[24px] mr-2" />
          ยื่นไป <span className="px-1 font-bold ">{data.length}</span> ฉบับ
        </div>
        <div className="flex items-end flex-1 h-full">
          <PinBallToolTip data={data} />
        </div>
      </div>
    );
  };

  return (
    <div
      className="top-0 z-20 flex flex-col justify-around w-full py-10 mx-auto bg-black lg:h-screen lg:sticky lg:max-w-6xl "
      id="page_start"
    >
      <div className="flex flex-col items-center pt-10 text-center min-h-[270px] " id="step_0">
        <div className="b4">
          เพราะตั้งแต่รัฐธรรมนูญปี 2540 เปิดโอกาส
          <br className=" lg:hidden" />
          ให้ลงชื่อเสนอกฎหมาย <br className="hidden lg:inline" />
          ผ่านมากว่า 20 ปี <br className=" lg:hidden" />
          กฎหมายที่เสนอโดยประชาชน
        </div>

        <p className="flex items-center mt-2 font-black lg:mb-4 h7">
          ผ่านเพียง
          <span className=" mx-1 flex items-center justify-center lg:w-[36px] w-[28px] h-[28px] lg:h-[36px] border-2 border-white rounded-full ">
            9
          </span>
          ฉบับ <span className="hidden lg:inline">จากที่ยื่นไปทั้งหมด 142 ฉบับ</span>
        </p>
        <p className="font-black lg:hidden h7">จากที่ยื่นไปทั้งหมด 142 ฉบับ</p>
        <p className="b4">
          ซึ่งกฎหมายที่ถูกเสนอโดยประชาชนเข้ามา
          <br className=" lg:hidden" /> ตามแต่ละรัฐธรรมนูญ ถูกแบ่งดังนี้{" "}
        </p>
        <Ratio />
        <div className="flex items-center my-4 opacity-75 ">
          <img
            src={require("assets/images/click_able.svg")}
            alt="image"
            className=" relative w-[24px] h-[24px] mr-1 "
          />

          <p className=" b5">ชี้เพื่อดูรายละเอียดของกฎหมายแต่ละฉบับ</p>
        </div>
      </div>
      <div className="flex-col items-center hidden pt-10 text-center  min-h-[270px]" id="step_1">
        <p className="mt-2 font-black h7">ทำไม?</p>
        <p className="mt-2 b4">
          ปลายทางของกฎหมายประชาชนไม่เป็นไปตามนั้น
          <br /> มีปัจจัยหรือสาเหตุอะไร ที่ส่งผลต่อกฎหมายประชาชนเหล่านี้
        </p>
        <p className="font-bold b4">ไม่ใช่ทุกกฎหมายที่จะเสนอได้ และต้องมีจำนวนผู้เสนอครบ</p>
      </div>
      <div className="hidden pt-10 text-center  min-h-[270px]" id="step_2">
        <p className="font-bold b4">กฎหมายของรัฐธรรมนูญปี 2540-2560 ที่เปิดช่องทางลงชื่อการเข้าเสนอชื่อ</p>
      </div>

      <div className="flex  mt-3 h-full flex-col space-y-10 lg:space-y-0 lg:flex-row max-w-[280px] mx-auto lg:max-w-none ">
        {/* year 2540 */}
        <YearDetail data={y_2540} year="2540" image={require("assets/images/circle_white_type_1.svg")} />
        {/* year 2550 */}
        <YearDetail data={y_2550} year="2550" image={require("assets/images/circle_white_type_2.svg")} />
        {/* year 2560 */}
        <YearDetail data={y_2560} year="2560" image={require("assets/images/circle_white_type_3.svg")} />
      </div>
    </div>
  );
};
