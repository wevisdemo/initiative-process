export const SummaryAll = () => {
  const data = [
    {
      step: require(`assets/images/bullet_1.svg`),
      img_bullet: require(`assets/images/bullet_9_white.svg`),
      img: require(`assets/images/summary_1.svg`),
      des: "ส่งให้นายกรัฐมนตรีให้คำรับรอง",
      qul: "35 ฉบับ",
    },
    {
      step: require(`assets/images/bullet_2.svg`),
      img_bullet: require(`assets/images/bullet_3_white.svg`),
      img: require(`assets/images/summary_2.svg`),
      des: "ล่ารายชื่อ",
      qul: "34 ฉบับ",
    },
    {
      step: require(`assets/images/bullet_3.svg`),
      img_bullet: require(`assets/images/bullet_1_white.svg`),
      img: require(`assets/images/summary_3.svg`),
      des: "ตรวจสอบเอกสาร",
      qul: "14 ฉบับ",
    },
    {
      step: require(`assets/images/bullet_4.svg`),
      img_bullet: require(`assets/images/bullet_2_white.svg`),
      img: require(`assets/images/summary_4.svg`),
      des: "ประธานรัฐสภาตรวจสอบหมวด 3/5",
      qul: "11 ฉบับ",
    },
    {
      step: require(`assets/images/bullet_5.svg`),
      img_bullet: require(`assets/images/bullet_b_white.svg`),
      img: require(`assets/images/summary_5.svg`),
      des: "ยกเลิกรัฐธรรมนูญ",
      qul: "7 ฉบับ",
    },
    {
      step: require(`assets/images/bullet_6.svg`),
      img_bullet: require(`assets/images/bullet_4_white.svg`),
      img: require(`assets/images/summary_6.svg`),
      des: "ประธานรัฐสภา ตรวจสอบเอกสาร",
      qul: "5 ฉบับ",
    },
    {
      step: require(`assets/images/bullet_6.svg`),
      img_bullet: require(`assets/images/bullet_11_white.svg`),
      img: require(`assets/images/summary_7.svg`),
      des: "ส.ส.วาระ 1 รับหลักการ",
      qul: "5 ฉบับ",
    },
    {
      step: require(`assets/images/bullet_7.svg`),
      img_bullet: require(`assets/images/bullet_13_white.svg`),
      img: require(`assets/images/summary_8.svg`),
      des: "ส.ส.วาระ 3 ลงมติเห็นชอบ",
      qul: "3 ฉบับ",
    },
    {
      step: require(`assets/images/bullet_7.svg`),
      img_bullet: require(`assets/images/bullet_14_white.svg`),
      img: require(`assets/images/summary_9.svg`),
      des: "ส.ว.รับหลักการ",
      qul: "3 ฉบับ",
    },
    {
      step: require(`assets/images/bullet_7.svg`),
      img_bullet: require(`assets/images/bullet_a_white.svg`),
      img: require(`assets/images/summary_10.svg`),
      des: "ถอนร่างพระราชบัญญัติ",
      qul: "3 ฉบับ",
    },
    {
      step: require(`assets/images/bullet_8.svg`),
      img_bullet: require(`assets/images/bullet_5_white.svg`),
      img: require(`assets/images/summary_12.svg`),
      des: "แจ้งให้ยื่น รายชื่อเพิ่มเติม 90 วัน ",
      qul: "2 ฉบับ",
    },
    {
      step: require(`assets/images/bullet_8.svg`),
      img_bullet: require(`assets/images/bullet_12_white.svg`),
      img: require(`assets/images/summary_12.svg`),
      des: "ยกเลิกรัฐธรส.ส.วาระ 2 <br class='md:hidden'/>ตั้งคณะกรรมาธิการรมนูญ",
      qul: "1 ฉบับ",
    },
  ];
  return (
    <div className="pt-10 mx-auto ">
      <p className="mb-4 font-bold b2">สรุปอันดับทั้งหมด </p>
      {data.map((d, index) => (
        <div className="flex" key={index}>
          <div
            className={` relative ${
              index < 3 ? "md:w-[40px] w-[24px] h-[24px] md:h-[40px]" : "w-[20px] h-[24px] md:w-[32px] md:h-[40px]"
            }  mr-4 `}
          >
            <img src={d.step} alt="image" />
          </div>
          <div className="flex flex-col ">
            <div className="flex b5 ">
              ขั้นตอนที่
              <div>
                <img
                  src={d.img_bullet}
                  alt="image"
                  className={` relative w-[16px] h-[16px] md:w-[21px] md:h-[21px] mx-1 `}
                />
              </div>
              <b dangerouslySetInnerHTML={{ __html: d.des }} />
            </div>
            <div className="flex">
              {index < 2 && (
                <div className={` relative w-[196px] h-[88px] mt-1 mb-5  `}>
                  <img src={d.img} alt="image" />
                </div>
              )}
              {index === 2 && (
                <div className={` relative w-[196px] h-[40px] mt-1 mb-5  `}>
                  <img src={d.img} alt="image" />
                </div>
              )}
              {index === 3 && (
                <div className={` relative w-[176px] h-[16px] mt-1 mb-5  `}>
                  <img src={d.img} alt="image" />
                </div>
              )}
              {index === 4 && (
                <div className={` relative w-[136px] h-[16px] mt-1 mb-5  `}>
                  <img src={d.img} alt="image" />
                </div>
              )}
              {index >= 5 && index <= 6 && (
                <div className={` relative w-[116px] h-[16px] mt-1 mb-5  `}>
                  <img src={d.img} alt="image" />
                </div>
              )}

              {index >= 7 && index <= 9 && (
                <div className={` relative w-[56px] h-[16px] mt-1 mb-5  `}>
                  <img src={d.img} alt="image" />
                </div>
              )}
              {index === 10 && (
                <div className={` relative w-[36px] h-[16px] mt-1 mb-5  `}>
                  <img src={d.img} alt="image" />
                </div>
              )}
              {index === 11 && (
                <div className={` relative w-[16px] h-[16px] mt-1 mb-5  `}>
                  <img src={d.img} alt="image" />
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
