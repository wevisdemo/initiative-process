import React from "react";
import { y_2540 } from "../public/data/constitution";

export const ExpandYear = () => {
  console.log(y_2540);
  return (
    <div className="sticky top-0 block w-full h-screen bg-black ">
      <div className="flex flex-col items-center pt-4 ">
        <p className="b4">เพราะตั้งแต่รัฐธรรมนูญปี 2540 เปิดโอกาสให้ลงชื่อเสนอกฎหมาย</p>
        <p className="b4">ผ่านมากว่า 20 ปี กฎหมายที่เสนอโดยประชาชน</p>
        <p className="flex mt-2 mb-4 font-black h7">
          ผ่านเพียง
          <span className=" mx-1 flex items-center justify-center w-[36px] h-[36px] border-2 border-white rounded-full ">
            9
          </span>
          ฉบับ จากที่ยื่นไปทั้งหมด 142 ฉบับ
        </p>
        <p className="b4">ซึ่งกฎหมายที่ถูกเสนอโดยประชาชนเข้ามา ตามแต่ละรัฐธรรมนูญ ถูกแบ่งดังนี้ </p>
        <p className="mt-4 opacity-75 b5 ">ชี้เพื่อดูรายละเอียดของกฎหมายแต่ละฉบับ</p>
      </div>
      {/* year 2540 */}
      <div></div>
      {/* year 2540 */}
    </div>
  );
};
