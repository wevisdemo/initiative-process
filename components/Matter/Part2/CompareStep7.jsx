import Image from "next/image";

export const CompareStep7 = () => {
  return (
    <div className="w-[320px] md:w-[430px]  mx-auto">
      <div className="flex items-center b6 ">
        กระบวนการขั้นที่
        <div className={` relative w-[20px] h-[20px] md:w-[30px] md:h-[30px] ml-2 `}>
          <Image src="/images/bullet_7_white.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
      <p className="font-bold b2">รวบรวมเอกสารเพื่อริเริ่ม</p>
      <div className="flex mt-6 ">
        <div className="flex-1">
          <div className="md:px-3 px-2 py-0 md:py-2 text-black w-fit md:w-[94px] b4 font-bold flex items-center bg-white rounded-lg">
            <div className={` relative w-[24px] h-[36px]  mr-2`}>
              <Image src="/images/thai.svg" layout="fill" objectFit="contain" />
            </div>
            ไทย
          </div>
          <div className="flex items-center mt-4 ">
            <div className={` relative w-[16px] ml-[2px] md:w-[20px] h-[16px] md:h-[20px] mr-2 `}>
              <Image src="/images/Exclude.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="b5">แจ้งผ่านออนไลน์</p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[20px] md:w-[24px] h-[20px] md:h-[24px] mr-2 `}>
              <Image src="/images/Union.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="b5">แจ้งผ่านอีเมลส่วนตัว</p>
          </div>

          <p className="b5 w-[140px] md:w-[200px] mt-3">
            1.แจ้งเตือนผ่านเว็บไซต์ สนง.เลขาธิการสภาผู้แทนราษฎร
            ตรงข้อมูลการเสนอร่างกฎหมายและสรุปรวมขั้นตอนการเสนอร่างกฎหมาย
            <br />
            <br /> 2.จัดทำบัญชีรายชื่อ ณ สนง.เลขาธิการสภาผู้แทนราษฎร
            <br />
            <br /> 3.หนังสือแจ้งไปยังผู้มีรายชื่อเข้าชื่อเสนอกฎหมาย
          </p>
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
            <p className="b5">แจ้งผ่านออนไลน์</p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[16px] ml-[2px] md:w-[20px] h-[16px] md:h-[20px] mr-2 `}>
              <Image src="/images/Exclude.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="b5">แจ้งผ่านอีเมลส่วนตัว </p>
          </div>

          <p className="b5 w-[140px] md:w-[200px] mt-3">
            ทุกคนสามารถแชร์เกี่ยวกับกฎหมายนั้นๆ โดยรับการแจ้งเตือนสถานะที่เสนอกฎหมายผ่านอีเมลของแต่ละคนได้เลย
            และสถานะจะถูกอัพเดทด้วย
          </p>
        </div>
      </div>
    </div>
  );
};
