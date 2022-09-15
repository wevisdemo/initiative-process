import React from "react";
import Image from "next/image";

const close = (id) => {
  let seemore = document.getElementById(id);
  seemore.style.display = "none";
  document.getElementsByTagName("html")[0].style.overflow = "scroll";
};

export const Seemore_1 = () => {
  return (
    <div
      id="seemore_1"
      className="  fixed w-screen top-0 left-0 h-screen z-[99] overflow-hidden bg-black bg-opacity-75 hidden "
    >
      <div className=" bg-white w-full md:w-[390px] mx-auto md:top-[50%] relative h-screen  md:h-max md:translate-y-[-50%] p-5 md:rounded-[10px] ">
        <div className="flex ">
          <div>
            <p className="font-bold text-black b4">โดยนายจอน อึ๊งภากรณ์ กับประชาชนผู้มีสิทธิเลือกตั้งจำนวน 98,041 คน</p>
            <p className="text-black b4">(ใช้เวลารวบรวมรายชื่อเพียง 1 เดือนเท่านั้น)</p>
          </div>
          <div>
            <div className=" relative w-[32px] h-[32px]  ml-[10px] cursor-pointer" onClick={() => close("seemore_1")}>
              <Image src="/images/close.svg" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
        <p className="b5 mt-[10px] text-black">
          มองว่า รัฐธรรมนูญยังคงออกแบบให้อำนาจของ คสช. ยังอยู่ มีการกำหนดอำนาจของ ส.ว. และไม่มีสิทธิได้เลือก
          นายกรัฐมนตรี จึงมีความต้องการในการแก้ไขยกเลิก ความในมาตรา 65 มาตรา 88 มาตรา 203 มาตรา 217 มาตรา 270 มาตรา 272
          มาตรา 275 และมาตรา 279 ยกเลิกหมวด 16 การปฏิรูปประเทศ มาตรา 257 ถึงมาตรา 261 ยกเลิกยุทธศาสตร์ชาติ
        </p>
      </div>
    </div>
  );
};

export const Seemore_2 = () => {
  const list = [
    {
      title: "<b>ร่างที่ 1</b> ร่างฝ่ายค้านเสนอ โดยแก้มาตรา 256 ให้มีส.ส.ร. จากการเลือกตั้ง 200 คน",
      img: "/images/exclude_black.svg",
    },
    {
      title: "<b>ร่างที่ 2</b> ร่างรัฐบาลเสนอ โดยแก้มาตรา 256 ให้มี ส.ส.ร. 200 คน",
      img: "/images/exclude_black.svg",
    },
    {
      title: "<b>ร่างที่ 3</b> ร่างฝ่ายค้านเสนอ โดยแก้มาตรา 270- 271 ยกเลิกอำนาจส.ว.เรื่องปฏิรูปประเทศ",
      img: "/images/union_black.svg",
    },
    {
      title:
        "<b>ร่างที่ 4</b> ร่างฝ่ายค้านเสนอ โดยแก้มาตรา 272 และ มาตรา 159  ยกเลิกอำนาจ ส.ว. เลือกนากยกฯ และ ยกเลิกนายกฯ คนนอก",
      img: "/images/union_black.svg",
    },
    {
      title: "<b>ร่างที่ 5</b> ร่างฝ่ายค้านเสนอ โดยแก้มาตรา 279 ยกเลิกคำสั่ง คสช. ให้ไม่ถูกกฎหมาย",
      img: "/images/union_black.svg",
    },
    {
      title: "<b>ร่างที่ 6</b> ร่างฝ่ายค้านเสนอ โดยแก้มาตรา 91 , 92, 93, 94, 101 และ 105 กลับไปใช้บัตรเลือกตั้ง 2 ใบ",
      img: "/images/union_black.svg",
    },
    {
      title:
        "<b>ร่างที่ 7</b> ภาคประชาชนเสนอ โดยแก้ไขรัฐธรรมนูญ 10 ประเด็น ถอนอำนาจคสช., ส.ว. มาจากการเลือกตั้งทั้งหมด",
      img: "/images/union_black.svg",
    },
  ];
  return (
    <div
      id="seemore_2"
      className="  fixed w-screen top-0 left-0 h-screen z-[99] overflow-hidden bg-black bg-opacity-75 hidden "
    >
      <div className=" bg-white w-full md:w-[390px] mx-auto md:top-[50%] relative h-screen  md:h-max md:translate-y-[-50%] p-5 md:rounded-[10px] ">
        <div className="flex ">
          <div>
            <p className="font-bold text-black b4">
              โดยนายพริษฐ์ วัชรสินธุ กับประชาชน ผู้มีสิทธิเลือกตั้งจำนวนถึง 135,247 คน
            </p>
          </div>
          <div>
            <div className=" relative w-[32px] h-[32px]  ml-[10px]  cursor-pointer" onClick={() => close("seemore_2")}>
              <Image src="/images/close.svg" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
        <p className="text-black b5">
          ซึ่งมีร่างของสภาผู้แทนราษฎรเสนอพร้อมด้วย อีก 5 ร่าง ผลการพิจารณาของสภาจากทั้งหมด
          ร่างของสภาผู้แทนราษฎรที่เสนอผ่าน 2 ฉบับ
        </p>
        <div className="flex flex-col mt-5 space-y-3">
          {list.map((l, index) => (
            <div className="flex " key={index}>
              <div className="mt-1 mr-3 ">
                <div className=" relative w-[20px] h-[20px]">
                  <Image src={l.img} layout="fill" objectFit="contain" />
                </div>
              </div>
              <div className="text-black b5" dangerouslySetInnerHTML={{ __html: l.title }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
