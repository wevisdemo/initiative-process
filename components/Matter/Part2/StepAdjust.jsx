import Image from "next/image";

export const StepAdjust = () => {
  return (
    <div className=" w-[400px] mx-auto">
      <div className={` relative w-[60px] h-[60px]  mb-5 `}>
        <Image src="/images/question.svg" layout="fill" objectFit="contain" />
      </div>
      <div className="font-bold b2">
        <p>การเข้าชื่อเสนอกฎหมาย </p>
        <p>ควรปรับหรือทำอะไรได้บ้าง?</p>
      </div>
      <p className="my-4 b4">
        ลองปรับเอาเทคโนโลยีมาช่วยขั้นตอนจุกจิกของเอกสาร เอสโตเนียเป็นประเทศที่มีระบบ e-participation initiative
        เกี่ยวกับการเสนอกฎหมายของประชาชนโดยตรง แถมยังได้อันดับที่ 1 ของ e-participation index ของ{" "}
        <span className="underline cursor-pointer ">UN E-Government Survey 2020</span> ด้วย
      </p>
      <p className="font-bold b4">ลองมาเทียบดูกับของไทยกัน</p>
    </div>
  );
};