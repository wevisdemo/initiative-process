import React from "react";

export const DetailState = ({ top, left, img, des }) => {
  return (
    <div
      className="absolute text-left  -translate-x-[50%]  lg:-translate-x-[100%] w-[310px]  md:w-[320px] lg:w-[340px] bg-black z-40  rounded-[10px] p-3 lg:p-5"
      style={{ top: top, background: "rgba(55, 55, 70, 0.75)", left: left }}
    >
      <div className="  relative w-[30px] h-[30px]">
        <img src={img} alt="image" />
      </div>

      <p className="my-1 font-bold lg:my-3 text-start b4">รายละเอียดเพิ่มเติม</p>
      <p className=" b5" dangerouslySetInnerHTML={{ __html: des }} />
    </div>
  );
};
