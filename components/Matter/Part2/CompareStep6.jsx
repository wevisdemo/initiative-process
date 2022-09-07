import Image from "next/image";

export const CompareStep6 = () => {
  return (
    <div className="w-[320px] md:w-[430px]  mx-auto">
      <div className="flex items-center b6 ">
        กระบวนการขั้นที่
        <div className={` relative w-[20px] h-[20px] md:w-[30px] md:h-[30px] ml-2 `}>
          <Image src="/images/bullet_6_white.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
      <p className="font-bold b2">ตรวจสอบยืนยันตัวกับรายชื่อ</p>
      <div className="flex mt-6 ">
        <div className="flex-1">
          <div className="md:px-3 px-2 py-0 md:py-2 text-black w-fit md:w-[94px] b4 font-bold flex items-center bg-white rounded-lg">
            <div className={` relative w-[24px] h-[36px]  mr-2`}>
              <Image src="/images/thai.svg" layout="fill" objectFit="contain" />
            </div>
            ไทย
          </div>

          <div className="flex items-center mt-4">
            <div className={` relative w-[20px] md:w-[24px] h-[20px] md:h-[24px] mr-2 `}>
              <Image src="/images/Union.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="b5">ตรวจผ่านออนไลน์ </p>
          </div>

          <p className="b5 w-[140px] md:w-[200px] mt-3">กรมการปกครอง กระทรวงมหาดไทยตรวจสอบรายชื่อผู้ลงชื่อเสนอกฎหมาย</p>
        </div>
        <div className="flex-1 ml-3 md:ml-[32px]">
          <div className="md:px-3 px-2 py-0 md:py-2 text-black w-fit md:w-[139px] b4 font-bold flex items-center bg-white rounded-lg">
            <div className={` relative w-[24px] h-[36px]  mr-2`}>
              <Image src="/images/estonia.svg" layout="fill" objectFit="contain" />
            </div>
            เอสโตเนีย
          </div>
          <div className="flex items-center mt-4 ">
            <div className={` relative w-[16px] ml-[2px] md:w-[20px] h-[16px] md:h-[20px] mr-2 `}>
              <Image src="/images/Exclude.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="b5">ตรวจผ่านออนไลน์ </p>
          </div>

          <p className="b5 w-[140px] md:w-[200px] mt-3">
            ตรวจผ่านออนไลน์ มีระบบการลงชื่อเป็นดิจิทัล(ดิจิทัลเทียบกับการลงลายเซ็นสด)
          </p>
        </div>
      </div>
    </div>
  );
};
