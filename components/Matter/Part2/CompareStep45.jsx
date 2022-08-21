import Image from "next/image";

export const CompareStep45 = () => {
  return (
    <div className="w-[430px] mx-auto">
      <div className="flex items-center b6 ">
        กระบวนการขั้นที่
        <div className={` relative w-[30px] h-[30px] ml-2 `}>
          <Image src="/images/bullet_4_white.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={` relative w-[30px] h-[30px] ml-2 `}>
          <Image src="/images/bullet_5_white.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
      <p className="font-bold b2">การตรวจสอบเอกสารและจำนวนรายชื่อ</p>
      <div className="flex mt-6 ">
        <div className="flex-1">
          <div className="p-3 text-black w-[94px] b4 font-bold flex items-center bg-white rounded-lg">
            <div className={` relative w-[24px] h-[36px]  mr-2`}>
              <Image src="/images/thai.svg" layout="fill" objectFit="contain" />
            </div>
            ไทย
          </div>
          <div className="flex items-center mt-4 ">
            <div className={` relative w-[20px] h-[20px] mr-2 `}>
              <Image src="/images/Exclude.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="b5">ตรวจผ่านออนไลน์ </p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[24px] h-[24px] mr-2 `}>
              <Image src="/images/circle.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="b5">ภายใน 45 วัน</p>
          </div>

          <p className="b5 w-[200px] mt-3">
            ไม่ว่าเอกสารที่ได้เป็นช่องทางออฟไลน์หรือออนไลน์ สนง.เลขาธิการสภาจะตรวจสอบเอกสาร
            และส่งให้กรมการปกครองกระทรวงมหาดไทยตรวจสอบรายชื่อผู้ลงชื่อเสนอกฎหมาย
          </p>
          <p className="b6 w-[200px] mt-4">*ระบบออนไลน์ไม่เสถียรจะต้องตรวจสอบแบบออฟไลน์ เป็นเอกสารแทน จะใช้เวลา</p>
        </div>
        <div className="flex-1 ml-[32px]">
          <div className="p-3 text-black w-[139px] b4 font-bold flex items-center bg-white rounded-lg">
            <div className={` relative w-[24px] h-[36px]  mr-2`}>
              <Image src="/images/estonia.svg" layout="fill" objectFit="contain" />
            </div>
            เอสโตเนีย
          </div>
          <div className="flex items-center mt-4 ">
            <div className={` relative w-[20px] h-[20px] mr-2 `}>
              <Image src="/images/Exclude.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="b5">ตรวจผ่านออนไลน์ </p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[20px] h-[20px] mr-2 `}>
              <Image src="/images/circle.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="b5">ภายใน 30 วัน</p>
          </div>

          <p className="b5 w-[200px] mt-3">
            การตรวจสอบเอกสารและรายชื่อผ่านระบบดิจิทัล เนื่องจากมีระบบออนไลน์
            และให้เซ็นเอกสารดิจิทัลได้โดยลงในเอกสารแผ่นเดียวกัน (ดิจิทัลเทียบกับลายมือ) ทำให้การตรวจสอบรวดเร็วกว่า
          </p>
        </div>
      </div>
    </div>
  );
};
