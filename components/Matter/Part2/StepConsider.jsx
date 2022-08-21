import Image from "next/image";

export const StepConsider = () => {
  return (
    <div className=" w-[440px]  mx-auto">
      <div className={` relative w-[60px] h-[60px] mb-4`}>
        <Image src="/images/exclamation.svg" layout="fill" objectFit="contain" />
      </div>
      <p className="b2">
        ในขั้นตอนการพิจารณากฎหมายที่ผ่านมา
        <br />
        ในรัฐธรรมนูญปี 2560{" "}
        <span className="font-bold text-scarlet">
          ไม่มีร่างกฎหมาย
          <br />
          ของประชาชนผ่านเลย
        </span>
      </p>
      <p className="mt-4 b5"> ดังเช่น ร่างแก้ไขเพิ่มเติมร่างรัฐธรรมนูญแห่งราชอาณาจักรไทย 2 ฉบับ </p>
      <div className="flex mt-4 space-x-4">
        <div className="h-[104px] w-[200px] bg-white text-black p-4 font-bold rounded-[10px]">
          โดย จอน อึ๊งภากรณ์ กับประชาชนผู้มีสิทธิเลือกตั้งจำนวน 98,041 คน
        </div>
        <div className="h-[104px] w-[200px] bg-white text-black p-4 font-bold rounded-[10px]">
          โดย พริษฐ์ วัชรสินธุ กับประชาชนผู้มีสิทธิเลือกตั้งจำนวนถึง 135,247 คน
        </div>
      </div>
      <div className="flex mt-2 ">
        <div className={` relative w-[24px] h-[24px] `}>
          <Image src="/images/click_able.svg" layout="fill" objectFit="contain" />
        </div>
        <p className=" b5">คลิกดูรายละเอียดเพิ่มเติม</p>
      </div>
      <div className=" w-[400px] b4 mt-4">
        ทั้งสองร่าง <span className="font-bold text-scarlet">ยกเลิกระบบส.ว.</span>{" "}
        เพราะขาดความชอบธรรมและยึดโยงกับประชาชน
        และการกล่าวถึงอำนาจคสช.ที่ยังมีอยู่ในรัฐธรรมนูญเป็นร่างที่ประชาชนให้ความสนใจเนื่องจาก
        <span className="font-bold text-scarlet">เป็นร่างที่มีการลงชื่อจำนวนมากที่สุดเท่าที่เคยมีการเสนอมา</span>
      </div>
    </div>
  );
};
