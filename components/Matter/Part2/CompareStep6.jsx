export const CompareStep6 = () => {
  return (
    <div className="w-[320px] md:w-[430px]  mx-auto">
      <div className="flex items-center b6 ">
        กระบวนการขั้นที่
        <div className={` relative w-[20px] h-[20px] md:w-[30px] md:h-[30px] ml-2 `}>
          <img src={require("assets/images/bullet_6_white.svg")} alt="image" />
        </div>
      </div>
      <p className="font-bold b2">ตรวจสอบยืนยันตัวกับรายชื่อ</p>
      <div className="flex mt-6 ">
        <div className="flex-1">
          <div className="md:px-3 px-2 py-0 md:py-2 text-black w-fit md:w-[94px] b4 font-bold flex items-center bg-white rounded-lg">
            <img src={require("assets/images/thai.svg")} alt="image" className={` relative w-[24px] h-[36px]  mr-2`} />
            ไทย
          </div>

          <div className="flex items-center mt-4">
            <div className={` relative w-[20px] md:w-[24px] h-[20px] md:h-[24px] mr-2 `}>
              <img src={require("assets/images/Union.svg")} alt="image" />
            </div>
            <p className="b5">ตรวจผ่านออนไลน์ </p>
          </div>

          <p className="b5 w-[140px] md:w-[200px] mt-3">กรมการปกครอง กระทรวงมหาดไทยตรวจสอบรายชื่อผู้ลงชื่อเสนอกฎหมาย</p>
        </div>
        <div className="flex-1 ml-3 md:ml-[32px]">
          <div className="md:px-3 px-2 py-0 md:py-2 text-black w-fit md:w-[139px] b4 font-bold flex items-center bg-white rounded-lg">
            <img
              src={require("assets/images/estonia.svg")}
              alt="image"
              className={` relative w-[24px] h-[36px]  mr-2`}
            />
            เอสโตเนีย
          </div>
          <div className="flex items-center mt-4 ">
            <div className={` relative w-[16px] ml-[2px] md:w-[20px] h-[16px] md:h-[20px] mr-2 `}>
              <img src={require("assets/images/Exclude.svg")} alt="image" />
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
