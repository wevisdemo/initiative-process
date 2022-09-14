import React from "react";
import Image from "next/image";

export const DetailState = ({ top, img, des }) => {
  return (
    <div
      className="absolute text-left left-[50%] -translate-x-[50%] lg:left-[95%] lg:-translate-x-[100%]  w-[280px] lg:w-[340px] bg-black z-40  rounded-[10px] p-5"
      style={{ top: top, background: "rgba(55, 55, 70, 0.75)" }}
    >
      <div className="  relative w-[30px] h-[30px]">
        <Image src={img} layout="fill" objectFit="contain" />
      </div>

      <p className="my-3 font-bold text-start b4">รายละเอียดเพิ่มเติม</p>
      <p className=" b5">{des}</p>
    </div>
  );
};
