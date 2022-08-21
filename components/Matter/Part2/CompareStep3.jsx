import Image from "next/image";

export const CompareStep3 = () => {
  return (
    <div className="w-[430px] mx-auto">
      <div className="flex items-center b6 ">
        กระบวนการขั้นที่
        <div className={` relative w-[30px] h-[30px] ml-2 `}>
          <Image src="/images/bullet_3_white.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
      <p className="font-bold b2">ล่ารายชื่อให้ครบ</p>
      <div className="flex mt-6 ">
        <div className="flex-1">
          <div className="p-3 text-black w-[94px] b4 font-bold flex items-center bg-white rounded-lg">
            <div className={` relative w-[24px] h-[36px]  mr-2`}>
              <Image src="/images/thai.svg" layout="fill" objectFit="contain" />
            </div>
            ไทย
          </div>
          <div className="flex items-start mt-4 ">
            <div className={` relative w-[20px] h-[20px] mr-2 `}>
              <Image src="/images/Exclude.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="b5">
              มีช่องทางออนไลน์
              <br />
              (ประชาชนทำเอง)
            </p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[24px] h-[24px] mr-2 `}>
              <Image src="/images/Union.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="b5">มีแพลตฟอร์มและมีระบบ</p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[24px] h-[24px] mr-2 `}>
              <Image src="/images/Union.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="b5">e-identity</p>
          </div>
          <p className="b5 w-[200px] mt-3">
            ผู้ริเริ่มจะเชิญชวนเป็นหนังสือ หรือสื่ออิเล็กทรอนิกส์ก็ได้หรือให้สำนักงานกฎหมายรวบรวมรายชื่อภายใน 1 ปี
            <br />
            <br />
            ช่องทางออนไลน์ของทางการยังใช้งานไม่ได้ (อยู่ในช่วงทดลองยังไม่เสถียร)
            ในอนาคตจะมีระบบระบุตัวตนและตรวจสอบการมีสิทธิเลือกตั้งโดยไม่ต้องลงลายมือชื่อ
          </p>
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
            <p className="b5">มีช่องทางออนไลน์</p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[20px] h-[20px] mr-2 `}>
              <Image src="/images/Exclude.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="b5">มีแพลตฟอร์มและมีระบบ</p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[20px] h-[20px] mr-2 `}>
              <Image src="/images/Exclude.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="b5">e-identity</p>
          </div>
          <p className="b5 w-[200px] mt-3">
            มีระบบ EPIC ที่รวบรวมเอกสารส่งรัฐสภาผ่านแพลตฟอร์มออนไลน์ รวบรวมรายชื่อได้ง่าย
            โดยมีระบบหลังบ้านลงชื่อออนไลน์ได้ทั้งหมด ถึงแม้ระบบจะมีความซับซ้อน ประกอบกับมี e-Identity
            เพื่อใช้ทำธุรกรรมต่างๆ ให้ลงชื่อดิจิทัลได้เลย
          </p>
        </div>
      </div>
    </div>
  );
};
