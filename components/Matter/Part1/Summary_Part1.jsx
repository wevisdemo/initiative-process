import { color_circle } from "../../util";
import Image from "next/image";
export const Summary_Part1 = () => {
  const Ratio = () => {
    return (
      <div className="flex justify-center space-x-[32px] mt-10">
        <div className="flex">
          <div className="circle_ratio" style={{ background: color_circle("สังคม") }} />
          <div className="ml-[8px]">
            <p>สังคม</p>
            <p>54 ฉบับ</p>
          </div>
        </div>
        <div className="flex">
          <div className="circle_ratio" style={{ background: color_circle("เศรษฐกิจ") }} />
          <div className="ml-[8px]">
            <p>เศรษฐกิจ</p>
            <p>29 ฉบับ</p>
          </div>
        </div>
        <div className="flex">
          <div className="circle_ratio" style={{ background: color_circle("การเมือง") }} />
          <div className="ml-[8px]">
            <p>การเมือง</p>
            <p>36 ฉบับ</p>
          </div>
        </div>
        <div className="flex">
          <div className="circle_ratio" style={{ background: color_circle("ศาสนาและวัฒนธรรม") }} />
          <div className="ml-[8px]">
            <p>ศาสนาและวัฒนธรรม</p>
            <p>8 ฉบับ</p>
          </div>
        </div>
      </div>
    );
  };

  const ExpandYear = () => {
    return (
      <div className="flex justify-center space-x-[32px] mt-5">
        <div className="flex mt-4 b4 mb-9">
          <div className=" relative w-[24px] h-[24px] mr-2">
            <Image src="/images/circle_white_type_1.svg" layout="fill" objectFit="contain" />
          </div>
          <div>
            <p>รธน.ปี 40</p>
            <p>x ฉบับ</p>
          </div>
        </div>
        <div className="flex mt-4 b4 mb-9">
          <div className=" relative w-[24px] h-[24px] mr-2">
            <Image src="/images/circle_white_type_2.svg" layout="fill" objectFit="contain" />
          </div>
          <div>
            <p>รธน.ปี 50</p>
            <p>x ฉบับ</p>
          </div>
        </div>
        <div className="flex mt-4 b4 mb-9">
          <div className=" relative w-[24px] h-[24px] mr-2">
            <Image src="/images/circle_white_type_3.svg" layout="fill" objectFit="contain" />
          </div>
          <div>
            <p>รธน.ปี 60</p>
            <p>x ฉบับ</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="py-20 ">
      <div className="text-center ">
        <p className="b2">ผ่านเข้าสู่วาระการประชุม</p>
        <p className="h4">21.8%</p>
        <p className="b2">31 ฉบับ จาก 142 ฉบับ</p>
      </div>
      <Ratio />
      <ExpandYear />
    </div>
  );
};
