export const CompareStep1 = () => {
  return (
    <div className="w-[320px] md:w-[430px]  mx-auto">
      <div className="flex items-center b6 ">
        กระบวนการขั้นที่
        <div className={` relative w-[20px] h-[20px] md:w-[30px] md:h-[30px] ml-2 `}>
          <img src={require("assets/images/bullet_1_white.svg")} alt="image" />
        </div>
      </div>
      <p className="font-bold b2">รวบรวมเอกสารเพื่อริเริ่ม</p>
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
            <p className="b5">ส่งออนไลน์ได้</p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[20px] md:w-[24px] h-[20px] md:h-[24px] mr-2 `}>
              <img src={require("assets/images/Union.svg")} alt="image" />
            </div>
            <p className="b5">แก้ไขร่วมกันได้</p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[20px] md:w-[24px] h-[20px] md:h-[24px] mr-2 `}>
              <img src={require("assets/images/Union.svg")} alt="image" />
            </div>
            <p className="b5">ใช้ soft ID</p>
          </div>
          <p className="b5 w-[140px] md:w-[200px] mt-3">
            ผู้มีสิทธิเลือกตั้งใดๆ ไม่น้อยกว่า 20 คน (ร่างพ.ร.บ) หรือไม่น้อยกว่า 120 คน (ร่างรธน.)
            ทำการรวบรวมเอกสารเสนอร่างกฎหมาย หรือสำนักงานฯ จัดทำร่างกฎหมายตามที่ร้องขอ แล้วส่งทางออนไลน์ให้กับสภาฯ
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
            <p className="b5">ส่งออนไลน์ได้</p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[16px] ml-[2px] md:w-[20px] h-[16px] md:h-[20px] mr-2 `}>
              <img src={require("assets/images/Exclude.svg")} alt="image" />
            </div>
            <p className="b5">แก้ไขร่วมกันได้</p>
          </div>
          <div className="flex items-center mt-2">
            <div className={` relative w-[16px] ml-[2px] md:w-[20px] h-[16px] md:h-[20px] mr-2 `}>
              <img src={require("assets/images/Exclude.svg")} alt="image" />
            </div>
            <p className="b5">ใช้ soft ID</p>
          </div>
          <p className="b5 w-[140px] md:w-[200px] mt-3">
            มีระบบออนไลน์ทำเอกสารเสนอร่างกฎหมายสามารถตั้งค่าเป็น open source ให้แก้ไขข้อเสนอร่วมกันได้ ซึ่งสามารถใช้
            soft ID เช่น google facebook ได้
          </p>
        </div>
      </div>
    </div>
  );
};
