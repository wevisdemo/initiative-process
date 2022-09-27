export const CompareStep3 = () => {
  return (
    <div className="w-[330px] md:w-[430px]  mx-auto">
      <div className="flex items-center b6 ">
        กระบวนการขั้นที่
        <div className={` relative w-[20px] h-[20px] md:w-[30px] md:h-[30px] ml-2 `}>
          <img src={require("assets/images/bullet_3_white.svg")} alt="image" />
        </div>
      </div>
      <p className="font-bold b2">ล่ารายชื่อให้ครบ</p>
      <div className="flex mt-6 ">
        <div className="flex-1">
          <div className="md:px-3 px-2 py-0 md:py-2 text-black w-fit md:w-[139px] b4 font-bold flex items-center bg-white rounded-lg">
            <img src={require("assets/images/thai.svg")} alt="image" className={` relative w-[24px] h-[36px]  mr-2`} />
            ไทย
          </div>
          <div className="flex items-start mt-4 ">
            <div className={` relative w-[16px] ml-[2px] md:w-[20px] h-[16px] md:h-[20px] mr-2 `}>
              <img src={require("assets/images/Exclude.svg")} alt="image" />
            </div>
            <p className="b5">
              มีช่องทางออนไลน์
              <br />
              (ประชาชนทำเอง)
            </p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[20px] md:w-[24px] h-[20px] md:h-[24px] mr-2 `}>
              <img src={require("assets/images/Union.svg")} alt="image" />
            </div>
            <p className="b5">มีแพลตฟอร์มและมีระบบ</p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[20px] md:w-[24px] h-[20px] md:h-[24px] mr-2 `}>
              <img src={require("assets/images/Union.svg")} alt="image" />
            </div>
            <p className="b5">e-identity</p>
          </div>
          <p className="b5 w-[140px] md:w-[200px] mt-3">
            ผู้ริเริ่มจะเชิญชวนเป็นหนังสือ หรือสื่ออิเล็กทรอนิกส์ก็ได้หรือให้สำนักงานกฎหมายรวบรวมรายชื่อภายใน 1 ปี
            <br />
            <br />
            ช่องทางออนไลน์ของทางการยังใช้งานไม่ได้ (อยู่ในช่วงทดลองยังไม่เสถียร)
            ในอนาคตจะมีระบบระบุตัวตนและตรวจสอบการมีสิทธิเลือกตั้งโดยไม่ต้องลงลายมือชื่อ
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
            <div className={` relative w-[16px] md:w-[20px] h-[16px] md:h-[20px] mr-2 `}>
              <img src={require("assets/images/Exclude.svg")} alt="image" />
            </div>
            <p className="b5">มีช่องทางออนไลน์</p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[16px] md:w-[20px] h-[16px] md:h-[20px] mr-2 `}>
              <img src={require("assets/images/Exclude.svg")} alt="image" />
            </div>
            <p className="b5">มีแพลตฟอร์มและมีระบบ</p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[16px] md:w-[20px] h-[16px] md:h-[20px] mr-2 `}>
              <img src={require("assets/images/Exclude.svg")} alt="image" />
            </div>
            <p className="b5">e-identity</p>
          </div>
          <p className="b5 w-[140px] md:w-[200px] mt-3">
            มีระบบ EPIC ที่รวบรวมเอกสารส่งรัฐสภาผ่านแพลตฟอร์มออนไลน์ รวบรวมรายชื่อได้ง่าย
            โดยมีระบบหลังบ้านลงชื่อออนไลน์ได้ทั้งหมด ถึงแม้ระบบจะมีความซับซ้อน ประกอบกับมี e-Identity
            เพื่อใช้ทำธุรกรรมต่างๆ ให้ลงชื่อดิจิทัลได้เลย
          </p>
        </div>
      </div>
    </div>
  );
};
