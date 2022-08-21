import Image from "next/image";

export const SummaryAll = () => {
  const data = [
    {
      step: "bullet_1",
      img_bullet: "bullet_9_white",
      img: "summary_1",
      des: "ส่งให้นายกรัฐมนตรีให้คำรับรอง",
      qul: "35 ฉบับ",
    },
    { step: "bullet_2", img_bullet: "bullet_3_white", img: "summary_2", des: "ล่ารายชื่อ", qul: "34 ฉบับ" },
    { step: "bullet_3", img_bullet: "bullet_1_white", img: "summary_3", des: "ตรวจสอบเอกสาร", qul: "14 ฉบับ" },
    {
      step: "bullet_4",
      img_bullet: "bullet_2_white",
      img: "summary_4",
      des: "ประธานรัฐสภาตรวจสอบหมวด 3/5",
      qul: "11 ฉบับ",
    },
    { step: "bullet_5", img_bullet: "bullet_b_white", img: "summary_5", des: "ยกเลิกรัฐธรรมนูญ", qul: "7 ฉบับ" },
    {
      step: "bullet_6",
      img_bullet: "bullet_4_white",
      img: "summary_6",
      des: "ประธานรัฐสภา ตรวจสอบเอกสาร",
      qul: "5 ฉบับ",
    },
    { step: "bullet_6", img_bullet: "bullet_11_white", img: "summary_7", des: "ส.ส.วาระ 1 รับหลักการ", qul: "5 ฉบับ" },
    {
      step: "bullet_7",
      img_bullet: "bullet_13_white",
      img: "summary_8",
      des: "ส.ส.วาระ 3 ลงมติเห็นชอบ",
      qul: "3 ฉบับ",
    },
    { step: "bullet_7", img_bullet: "bullet_14_white", img: "summary_9", des: "ส.ว.รับหลักการ", qul: "3 ฉบับ" },
    { step: "bullet_7", img_bullet: "bullet_a_white", img: "summary_10", des: "ถอนร่างพระราชบัญญัติ", qul: "3 ฉบับ" },
    {
      step: "bullet_8",
      img_bullet: "bullet_5_white",
      img: "summary_11",
      des: "แจ้งให้ยื่น รายชื่อเพิ่มเติม 90 วัน ",
      qul: "2 ฉบับ",
    },
    {
      step: "bullet_8",
      img_bullet: "bullet_12_white",
      img: "summary_12",
      des: "ยกเลิกรัฐธรส.ส.วาระ 2 ตั้งคณะกรรมาธิการรมนูญ",
      qul: "1 ฉบับ",
    },
  ];
  return (
    <div className="pt-10 mx-auto ">
      <p className="mb-4 font-bold b2">สรุปอันดับทั้งหมด </p>
      {data.map((d, index) => (
        <div className="flex" key={index}>
          <div className={` relative ${index < 3 ? "w-[40px] h-[40px]" : "w-[32px] h-[40px]"}  mr-4 `}>
            <Image src={`/images/${d.step}.svg`} layout="fill" objectFit="contain" />
          </div>
          <div className="flex flex-col ">
            <div className="flex b5 ">
              ขั้นตอนที่
              <div className={` relative w-[21px] h-[21px] mx-1 `}>
                <Image src={`/images/${d.img_bullet}.svg`} layout="fill" objectFit="contain" />
              </div>
              <b>{d.des}</b>
            </div>
            <div className="flex">
              {index < 2 && (
                <div className={` relative w-[196px] h-[88px] mt-1 mb-5  `}>
                  <Image src={`/images/${d.img}.svg`} layout="fill" objectFit="contain" />
                </div>
              )}
              {index === 2 && (
                <div className={` relative w-[196px] h-[40px] mt-1 mb-5  `}>
                  <Image src={`/images/${d.img}.svg`} layout="fill" objectFit="contain" />
                </div>
              )}
              {index === 3 && (
                <div className={` relative w-[176px] h-[16px] mt-1 mb-5  `}>
                  <Image src={`/images/${d.img}.svg`} layout="fill" objectFit="contain" />
                </div>
              )}
              {index === 4 && (
                <div className={` relative w-[136px] h-[16px] mt-1 mb-5  `}>
                  <Image src={`/images/${d.img}.svg`} layout="fill" objectFit="contain" />
                </div>
              )}
              {index >= 5 && index <= 6 && (
                <div className={` relative w-[116px] h-[16px] mt-1 mb-5  `}>
                  <Image src={`/images/${d.img}.svg`} layout="fill" objectFit="contain" />
                </div>
              )}

              {index >= 7 && index <= 9 && (
                <div className={` relative w-[56px] h-[16px] mt-1 mb-5  `}>
                  <Image src={`/images/${d.img}.svg`} layout="fill" objectFit="contain" />
                </div>
              )}
              {index === 10 && (
                <div className={` relative w-[36px] h-[16px] mt-1 mb-5  `}>
                  <Image src={`/images/${d.img}.svg`} layout="fill" objectFit="contain" />
                </div>
              )}
              {index === 11 && (
                <div className={` relative w-[16px] h-[16px] mt-1 mb-5  `}>
                  <Image src={`/images/${d.img}.svg`} layout="fill" objectFit="contain" />
                </div>
              )}
              <p className="ml-2 b5">{d.qul}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="ml-[50px]">
        <div className="mt-4 b5">ขั้นตอนที่</div>
        <p className="mt-2 b5">ไม่มีกฎหมายที่ยื่นไปติดค้างอยู่เลย</p>
      </div>
    </div>
  );
};
