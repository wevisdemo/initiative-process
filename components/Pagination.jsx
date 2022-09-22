import { ScrollTo, device } from "./util";
import Image from "next/image";
import { color_circle } from "./util";
import { useState } from "react";
export const Pagination = () => {
  const data = [0, "a", "b", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const [isOpen, setIsOpen] = useState(false);
  let name;
  const clickScroll = (id) => {
    if (id === 0) {
      name = device() === "labtop" ? "leg_01" : "leg_01_mobile";
    }
    if (id === "b" || id === "b") {
      name = device() === "labtop" ? "leg_02" : "leg_02_mobile";
    }
    if (id === 1) {
      name = device() === "labtop" ? "leg_03" : "leg_03_mobile";
    }
    if (id === 2) {
      name = device() === "labtop" ? "leg_04" : "leg_04_mobile";
    }
    if (id === 3) {
      name = device() === "labtop" ? "leg_05" : "leg_05_mobile";
    }
    if (id === 4) {
      name = device() === "labtop" ? "leg_06" : "leg_06_mobile";
    }
    if (id === 5) {
      name = device() === "labtop" ? "leg_08" : "leg_08_mobile";
    }
    if (id === 6) {
      name = device() === "labtop" ? "leg_09" : "leg_09_mobile";
    }

    if (id === 7) {
      name = device() === "labtop" ? "leg_10" : "leg_10_mobile";
    }
    if (id === 8) {
      name = device() === "labtop" ? "leg_12" : "leg_12_mobile";
    }
    if (id === 9) {
      name = device() === "labtop" ? "leg_13" : "leg_13_mobile";
    }

    if (id === 10) {
      name = device() === "labtop" ? "leg_14" : "leg_14_mobile";
    }
    if (id === 11) {
      name = device() === "labtop" ? "leg_15" : "leg_15_mobile";
    }
    if (id === 12) {
      name = device() === "labtop" ? "leg_16" : "leg_16_mobile";
    }
    if (id === 13) {
      name = device() === "labtop" ? "leg_17" : "leg_17_mobile";
    }
    if (id === 14) {
      name = device() === "labtop" ? "leg_18" : "leg_18_mobile";
    }
    if (id === 15) {
      name = device() === "labtop" ? "leg_19" : "leg_19_mobile";
    }
    if (id === 16) {
      name = device() === "labtop" ? "leg_20" : "leg_20_mobile";
    }
    if (id === 17) {
      name = device() === "labtop" ? "leg_21" : "leg_21_mobile";
    }
    if (id === 18) {
      name = device() === "labtop" ? "leg_25" : "leg_25_mobile";
    }
    if (id === 19) {
      name = device() === "labtop" ? "leg_26" : "leg_26_mobile";
    }
    if (id === 20) {
      name = device() === "labtop" ? "leg_27" : "leg_27_mobile";
    }

    if (name) ScrollTo("#" + name, "center");
  };
  const openInfo = () => {
    let seemore = document.getElementById("info_pagination");
    seemore.style.display = "block";
  };
  const closeInfo = () => {
    let seemore = document.getElementById("info_pagination");
    seemore.style.display = "none";
  };
  const openDetail = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.getElementById("detail_state_mobile").style.display = "none";
    } else {
      document.getElementById("detail_state_mobile").style.display = "block";
    }
  };
  return (
    <div className="fixed  top-[50%] translate-y-[-50%] z-[70]   left-0 opacity-0" id="pagination">
      <div className="flex flex-col items-center ml-3 space-y-1 bg-black md:space-y-2 ">
        <div
          className=" relative w-[20px] h-[20px] mb-2 cursor-pointer"
          onClick={() => openInfo()}
          onMouseLeave={() => closeInfo()}
        >
          <Image src="/images/info.svg" layout="fill" objectFit="contain" />
        </div>
        {data.map((d) => (
          <button
            onClick={() => clickScroll(d)}
            key={d}
            id={`hint_${d}`}
            className="w-[12px] h-[12px] rounded-full border border-white  relative hover:scale-[1.75] "
          >
            <div className="absolute w-full h-full text-black rounded-full opacity-0 hint hover:opacity-100 hover:bg-white">
              {d}
            </div>
          </button>
        ))}
        <div
          className=" relative w-[20px] h-[20px] border  items-center hidden justify-center border-white rounded-full mt-2  lg:hidden"
          onClick={() => openDetail()}
          id="btn_detail_state"
        >
          {!isOpen && <div className=" absolute translate-y-[-15%] b6">...</div>}
          {isOpen && (
            <div className="  absolute w-[20px] h-[20px]  translate-y-[-4%]">
              <Image src="/images/close_white.svg" layout="fill" objectFit="contain" />
            </div>
          )}
        </div>
      </div>
      <div
        className=" absolute border border-white rounded-[10px] bg-black  left-[0] top-0 hidden translate-x-[5%] md:translate-x-[20%] z-20 p-8 md:w-max  w-[350px]  "
        id="info_pagination"
      >
        <div id="close_info" className="absolute top-0 right-0 m-8 ">
          <div className="  w-[32px] h-[32px]  lg:hidden   cursor-pointer" onClick={() => closeInfo()}>
            <Image src="/images/close_white.svg" layout="fill" objectFit="contain" />
          </div>
        </div>
        <p className="mb-3 font-bold b2">วิธีดูสัญลักษณ์</p>
        <p className="mb-2 font-bold b4">ประเภทกฎหมาย</p>
        <div className="flex flex-row flex-wrap ">
          <div className="flex items-center mr-[12px]">
            <div className="circle_ratio" style={{ background: color_circle("สังคม") }} />
            <p className="ml-[8px] b6">สังคม</p>
          </div>
          <div className="flex items-center mr-[12px]">
            <div className="circle_ratio" style={{ background: color_circle("เศรษฐกิจ") }} />
            <p className="ml-[8px] b6">เศรษฐกิจ</p>
          </div>
          <div className="flex items-center mr-[12px]">
            <div className="circle_ratio" style={{ background: color_circle("การเมือง") }} />
            <p className="ml-[8px] b6">การเมือง</p>
          </div>
          <div className="flex items-center md:mr-[12px] mt-2 md:mt-0">
            <div className="circle_ratio" style={{ background: color_circle("ศาสนาและวัฒนธรรม") }} />
            <p className="ml-[8px] b6">ศาสนาและวัฒนธรรม</p>
          </div>
        </div>
        <p className="mt-4 mb-2 font-bold b4">ปีรัฐธรรมนูญ</p>
        <div className="flex space-x-[12px] flex-row ">
          <div className="flex items-center b6">
            <div className="relative mr-2 circle_ratio">
              <Image src="/images/circle_white_type_1.svg" layout="fill" objectFit="contain" />
            </div>
            2540
          </div>
          <div className="flex items-center b6">
            <div className="relative mr-2 circle_ratio">
              <Image src="/images/circle_white_type_2.svg" layout="fill" objectFit="contain" />
            </div>
            2550
          </div>
          <div className="flex items-center b6">
            <div className="relative mr-2 circle_ratio">
              <Image src="/images/circle_white_type_3.svg" layout="fill" objectFit="contain" />
            </div>
            2560
          </div>
        </div>
      </div>
    </div>
  );
};
