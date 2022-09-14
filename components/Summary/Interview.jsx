import React from "react";
import { interview } from "../../public/data/interview";
import triangle from "../../public/images/triangle.svg";
import Image from "next/image";
export const Interview = () => {
  return (
    <div className="container min-h-screen pt-24 ">
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
    </div>
  );
};
