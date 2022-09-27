import React from "react";
import { interview } from "public/data/interview";
import triangle from "assets/images/triangle.svg";

import WvSharer from "@wevisdemo/ui/components/sharer";
import WvFooter from "@wevisdemo/ui/components/footer";
import Spline from "@splinetool/react-spline";
import { device, ScrollTo } from "../util";
export const Interview = () => {
  return (
    <div className="relative min-h-screen pt-24 overflow-hidden ">
      {device() === "labtop" && (
        <div className="absolute top-0  left-[50%] translate-x-[-50%] ">
          <Spline scene=" https://prod.spline.design/MkKIeHHUF5d1vao8/scene.splinecode" />
          <Spline scene=" https://prod.spline.design/MkKIeHHUF5d1vao8/scene.splinecode" />
        </div>
      )}

      <div id="interview">
        <div id="title" className="relative text-center my-14 ">
          <p className="font-bold b2">
            ฟังความคิดเห็นของบุคคล
            <br className=" md:hidden" />
            หรือองค์กรที่ทำสิ่งนี้กัน
          </p>
          <p className="b4">
            ในฐานะผู้ที่ผลักดันการขับเคลื่อนกฎหมาย
            <br className=" md:hidden" />
            คิดเห็นอย่างไรบ้าง?{" "}
          </p>
        </div>
        {interview.map((p, index) => (
          <div
            key={index}
            className={`flex justify-center mb-10 ${index % 2 != 0 ? " flex-row-reverse" : " flex-row"}`}
          >
            <div className={`relative  top-[40px]  ${index % 2 === 0 ? " mr-10 lg:mr-14" : " ml-10 lg:ml-14"}`}>
              <img src={p.img} alt="image" className="rounded-full object-cover w-[60px] h-[60px]" />
            </div>
            <div className=" w-[240px] lg:w-[340px] bg-white rounded-[10px]  p-5 relative  ">
              <div
                className={` absolute w-[40px] top-[55px]  h-[32px] ${
                  index % 2 === 0 ? "-left-[32px]" : "-right-[32px] rotate-180"
                }`}
              >
                <img src={triangle} alt="image" />
              </div>
              <p dangerouslySetInnerHTML={{ __html: p.des }} className="text-black b5" />
              <p className="mt-4 font-bold text-black b4">{p.name}</p>
              <p className="text-black b6">{p.unit}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="py-10 text-center b4" id="restart">
        <p>กลับไปเริ่มใหม่</p>
        <div className={` relative  mt-5 cursor-pointer  `} onClick={() => ScrollTo("#intro", "start")}>
          <img src={require("assets/images/restart.svg")} alt="image" className=" w-[22px] h-[22px] mx-auto" />
        </div>
      </div>
      <div className="text-center b4" id="share">
        <p className="font-bold ">ร่วมแชร์เพื่อชวนเพื่อน </p>
        <p>สำรวจเส้นทางและสนับสนุนกฎหมายของประชาชนต่อไป</p>
        <div className="py-10 ">
          <WvSharer center url="wevis.info/initiativelaw " light={true} />
        </div>
        <WvFooter />
      </div>
    </div>
  );
};
