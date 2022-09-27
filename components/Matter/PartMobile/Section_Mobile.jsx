export const Section_Mobile = () => {
  return (
    <div className="absolute z-20 w-full pt-16 text-center ">
      <div className=" h-full w-[1152px]  relative left-[50%] -translate-x-[50%]" id="leg_section_1_wrapper_mobile">
        <div className={`  relative w-[1000px] h-[197px] mx-auto top-[400px]`} id="leg_start_mobile">
          <div className="absolute top-0 w-full ">
            <p className=" text-center relative -top-[150px] font-black h4"> ขั้นตอนการเสนอกฎหมาย</p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[500px] h-[197px] mx-auto top-[340px] hint_leg_00_mobile`} id="leg_01_mobile">
          <img src={require("assets/images/leg_01.svg")} alt="image" />
          <div className="absolute -top-[80px] w-full ">
            <p className="relative text-center b2">
              ผู้ริเริ่มเสนอร่างกฎหมาย <br />
              และเอกสาร
            </p>
          </div>
        </div>
        {/*---------*/}
        <div
          className={` relative w-[700px] h-[197px] left-[-80px]  top-[380px] hint_leg_ab_mobile `}
          id="leg_02_mobile"
        >
          <img src={require("assets/images/leg_02.svg")} alt="image" />
        </div>
        {/*---------*/}
        <div className={` relative w-[600px] h-[197px] mx-[58%] top-[300px] hint_leg_01_mobile`} id="leg_03_mobile">
          <img src={require("assets/images/leg_03.svg")} alt="image" />
          <div className="absolute -top-[80px] -left-[90px] w-full ">
            <p className="relative text-center b2">ตรวจสอบเอกสาร</p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[600px] h-[197px] mx-[36%] top-[380px] hint_leg_02_mobile`} id="leg_04_mobile">
          <img src={require("assets/images/leg_04.svg")} alt="image" />
          <div className="absolute -top-[80px] -left-[90px] w-full ">
            <p className="relative text-center b2">
              ประธานรัฐสภาตรวจสอบ
              <br />
              <b>หมวด 3/5</b>
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[700px] h-[197px] mx-[15%] top-[480px] hint_leg_03_mobile`} id="leg_05_mobile">
          <img src={require("assets/images/leg_05.svg")} alt="image" />
          <div className="absolute -top-[80px] -left-[130px] w-full ">
            <p className="relative text-center b2">
              ล่ารายชื่อให้ครบ<b>10,000 คน</b>
              <br />
              ภายใน 45 วัน
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[250px] h-[433px] mx-[2%] top-[410px] `} id="leg_07_mobile">
          <img src={require("assets/images/leg_free.svg")} alt="image" />
        </div>
        {/*---------*/}
        <div className={` relative w-[600px] h-[197px] mx-[8%] top-[435px] hint_leg_04_mobile `} id="leg_06_mobile">
          <img src={require("assets/images/leg_06.svg")} alt="image" />
          <div className="absolute -top-[70px] -left-[100px] w-full ">
            <p className="relative text-center b2">
              ประธานรัฐสภา <br />
              <b>ตรวจสอบเอกสาร</b>
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[800px] h-[197px] mx-[27%] top-[550px] hint_leg_05_mobile`} id="leg_08_mobile">
          <img src={require("assets/images/leg_08.svg")} alt="image" />
          <div className="absolute -top-[80px]  w-full ">
            <p className="relative text-center b2">
              แจ้งให้ยื่น
              <br />
              <b>รายชื่อเพิ่มเติม 90 วัน</b>
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[250px] h-[433px] mx-[-50px] top-[200px] hint_leg_06_mobile`} id="leg_09_mobile">
          <img src={require("assets/images/leg_07.svg")} alt="image" />
          <div className="absolute top-[15%] left-[25%] w-[400px]">
            <p className="relative text-center b2">
              ส่งให้สำนักบริหารการทะเบียน
              <br />
              กรมการปกครอง <b>ตรวจสอบ</b> <br /> ประธานรัฐสภา <b>ประกาศรายชื่อ</b>
              <br /> ผู้ลงชื่อเสนอ
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[800px] h-[300px] mx-[4%] top-[200px] hint_leg_07_mobile`} id="leg_10_mobile">
          <img src={require("assets/images/leg_09.svg")} alt="image" />
          <div className="absolute top-[30px] -left-[23%]  w-full ">
            <p className="relative text-center b2">
              <b>ยื่นคัดค้าน</b>
              <br /> เพื่อขีดฆ่ารายชื่อ 30 วัน
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[150px] h-[433px] mx-[0%] top-[200px] opacity-0`} id="leg_11_mobile">
          <img src={require("assets/images/leg_07.svg")} alt="image" />
        </div>
        {/*---------*/}
        <div className={` relative w-[650px] h-[170px] mx-[19%] top-[150px] hint_leg_08_mobile`} id="leg_12_mobile">
          <img src={require("assets/images/leg_10.svg")} alt="image" />
          <div className="absolute -top-[100px] -left-[17%]  w-full ">
            <p className="relative text-center b2">
              <b>ประธานสภาผู้แทนราษฎร</b>
              <br /> พิจารณาว่า เป็นร่างการเงินหรือไม่
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[850px] h-[190px] mx-[39%]  top-[300px] hint_leg_09_mobile`} id="leg_13_mobile">
          <img src={require("assets/images/leg_11.svg")} alt="image" />
          <div className="absolute -top-[100px]  w-full ">
            <p className="relative text-center b2">
              ส่งให้ <b>นายกรัฐมนตรี</b>
              <br /> ให้คำรับรอง
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[280px] h-[350px] mx-[3%] top-[270px] hint_leg_10_mobile`} id="leg_14_mobile">
          <img src={require("assets/images/leg_12.svg")} alt="image" />
          <div className="absolute top-[20%]  left-[20%]  w-full ">
            <p className="relative text-center b2">
              <b>
                บรรจุระเบียบ
                <br />
                วาระการประชุม
              </b>
            </p>
          </div>
        </div>
        {/*---------*/}
      </div>
    </div>
  );
};
