import { color_circle } from "../../util";

export const Summary_Part1 = () => {
  const Ratio = () => {
    return (
      <div className="flex space-y-2 lg:space-y-0  lg:space-x-[32px] justify-center flex-col lg:flex-row mt-10">
        <div className="flex items-center lg:items-start">
          <div className="circle_ratio" style={{ background: color_circle("สังคม") }} />
          <div className="ml-[8px]">
            สังคม <br className="hidden lg:inline" />
            15 ฉบับ
          </div>
        </div>
        <div className="flex items-center lg:items-start">
          <div className="circle_ratio" style={{ background: color_circle("เศรษฐกิจ") }} />
          <div className="ml-[8px]">
            เศรษฐกิจ <br className="hidden lg:inline" />5 ฉบับ
          </div>
        </div>
        <div className="flex items-center lg:items-start">
          <div className="circle_ratio" style={{ background: color_circle("การเมือง") }} />
          <div className="ml-[8px]">
            การเมือง <br className="hidden lg:inline" />9 ฉบับ
          </div>
        </div>
        <div className="flex items-center lg:items-start">
          <div className="circle_ratio" style={{ background: color_circle("ศาสนาและวัฒนธรรม") }} />
          <div className="ml-[8px]">
            ศาสนาและวัฒนธรรม <br className="hidden lg:inline" />1 ฉบับ
          </div>
        </div>
      </div>
    );
  };

  const ExpandYear = () => {
    return (
      <div className="flex space-y-2 lg:space-y-0  lg:space-x-[32px] justify-center flex-col lg:flex-row mt-10">
        <div className="flex b4">
          <div className=" relative w-[20px] h-[20px]  lg:w-[24px] lg:h-[24px] mr-2">
            <img src={require("assets/images/circle_white_type_1.svg")} alt="image" />
          </div>
          <div className="flex items-center ">
            รธน.ปี 40 <br className="hidden lg:inline" />3 ฉบับ
          </div>
        </div>
        <div className="flex b4">
          <div className=" relative w-[20px] h-[20px]  lg:w-[24px] lg:h-[24px] mr-2">
            <img src={require("assets/images/circle_white_type_2.svg")} alt="image" />
          </div>
          <div className="flex items-center ">
            รธน.ปี 50 <br className="hidden lg:inline" />
            18 ฉบับ
          </div>
        </div>
        <div className="flex b4 ">
          <div className=" relative w-[20px] h-[20px]  lg:w-[24px] lg:h-[24px] mr-2">
            <img src={require("assets/images/circle_white_type_3.svg")} alt="image" />
          </div>
          <div className="flex items-center ">
            รธน.ปี 60 <br className="hidden lg:inline" />9 ฉบับ
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="py-20  w-[240px] lg:w-full mx-auto bg-black relative z-20 ">
      <div className="text-center ">
        <p className="b2">ผ่านเข้าสู่วาระการประชุม</p>
        <p className="h4">21.8%</p>
        <p className="b2">30 ฉบับ จาก 142 ฉบับ</p>
      </div>
      <Ratio />
      <ExpandYear />
    </div>
  );
};
