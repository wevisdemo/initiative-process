import React from "react";
import { interview } from "../../public/data/interview";
import triangle from "../../public/images/triangle.svg";
import Image from "next/image";
import WvSharer from "@wevisdemo/ui/components/sharer";
import WvFooter from "@wevisdemo/ui/components/footer";
import { ScrollTo } from "../util";
export const Interview = () => {
  return (
    <div className="min-h-screen pt-24 ">
      <div id="title" className="text-center ">
        <p className="font-bold b2">
          ฟังความคิดเห็นของบุคคล
          <br className=" md:hidden" />
          หรือองค์กรที่ทำสิ่งนี้กัน
        </p>
        <p className="b4">ในฐานะผู้ที่ผลักดันการขับเคลื่อนกฎหมายคิดเห็นอย่างไรบ้าง? </p>
      </div>
      <div id="interview" className=" mt-14">
        {interview.map((p, index) => (
          <div
            key={index}
            className={`flex justify-center mb-10 ${index % 2 != 0 ? " flex-row-reverse" : " flex-row"}`}
          >
            <div
              className={`relative w-[60px] top-[40px] h-[60px] ${
                index % 2 === 0 ? " mr-10 lg:mr-14" : " ml-10 lg:ml-14"
              }`}
            >
              <Image src={p.img} layout="fill" objectFit="cover" className="rounded-full" />
            </div>
            <div className=" w-[240px] lg:w-[340px] bg-white rounded-[10px]  p-5 relative  ">
              <div
                className={` absolute w-[40px] top-[55px]  h-[32px] ${
                  index % 2 === 0 ? "-left-[32px]" : "-right-[32px] rotate-180"
                }`}
              >
                <Image src={triangle} layout="fill" objectFit="contain" />
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
        <div className={` relative w-[22px] h-[22px] mx-auto mt-5 cursor-pointer  `} onClick={() => ScrollTo("#intro")}>
          <Image src="/images/restart.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="text-center b4" id="share">
        <p className="font-bold ">ร่วมแชร์เพื่อชวนเพื่อน </p>
        <p>สำรวจเส้นทางและสนับสนุนกฎหมายของประชาชนต่อไป</p>
        <div className="py-10 ">
          <WvSharer center url="https://initiative-process.vercel.app" light={true} />
        </div>
        <WvFooter />
      </div>
    </div>
  );
};
