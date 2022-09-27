export const CompareStep45 = () => {
  return (
    <div className="w-[320px] md:w-[430px]  mx-auto">
      <div className="flex items-center b6 ">
        กระบวนการขั้นที่
        <img
          src={require("assets/images/bullet_4_white.svg")}
          alt="image"
          className={` relative w-[20px] h-[20px] md:w-[30px] md:h-[30px] ml-2 `}
        />
        <img
          src={require("assets/images/bullet_5_white.svg")}
          alt="image"
          className={` relative w-[20px] h-[20px] md:w-[30px] md:h-[30px] ml-2 `}
        />
      </div>
      <p className="font-bold b2">การตรวจสอบเอกสารและจำนวนรายชื่อ</p>
      <div className="flex mt-6 ">
        <div className="flex-1">
          <div className="md:px-3 px-2 py-0 md:py-2 text-black w-fit md:w-[94px] b4 font-bold flex items-center bg-white rounded-lg">
            <img src={require("assets/images/thai.svg")} alt="image" className={` relative w-[24px] h-[36px]  mr-2`} />
            ไทย
          </div>
          <div className="flex items-center mt-4 ">
            <div className={` relative w-[16px] ml-[2px] md:w-[20px] h-[16px] md:h-[20px] mr-2 `}>
              <img src={require("assets/images/Exclude.svg")} alt="image" />
            </div>
            <p className="b5">ตรวจผ่านออนไลน์ </p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[16px] ml-[2px] md:w-[20px] h-[16px] md:h-[20px] mr-2 `}>
              <img src={require("assets/images/circle.svg")} alt="image" />
            </div>
            <p className="b5">ภายใน 45 วัน</p>
          </div>

          <p className="b5 w-[140px] md:w-[200px] mt-3">
            ไม่ว่าเอกสารที่ได้เป็นช่องทางออฟไลน์หรือออนไลน์ สนง.เลขาธิการสภาจะตรวจสอบเอกสาร
            และส่งให้กรมการปกครองกระทรวงมหาดไทยตรวจสอบรายชื่อผู้ลงชื่อเสนอกฎหมาย
          </p>
          <p className="b6 w-[140px] md:w-[200px] mt-4">
            *ระบบออนไลน์ไม่เสถียรจะต้องตรวจสอบแบบออฟไลน์ เป็นเอกสารแทน จะใช้เวลา
          </p>
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
          <div className="flex items-center mt-2">
            <div className={` relative w-[16px] ml-[2px] md:w-[20px] h-[16px] md:h-[20px] mr-2 `}>
              <img src={require("assets/images/circle.svg")} alt="image" />
            </div>
            <p className="b5">ภายใน 30 วัน</p>
          </div>

          <p className="b5 w-[140px] md:w-[200px] mt-3">
            การตรวจสอบเอกสารและรายชื่อผ่านระบบดิจิทัล เนื่องจากมีระบบออนไลน์
            และให้เซ็นเอกสารดิจิทัลได้โดยลงในเอกสารแผ่นเดียวกัน (ดิจิทัลเทียบกับลายมือ) ทำให้การตรวจสอบรวดเร็วกว่า
          </p>
        </div>
      </div>
    </div>
  );
};
