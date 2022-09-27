import { drawBalls2040 } from "./drawBalls2040";
import { drawBalls2050 } from "./drawBalls2050";
import { drawBalls2060 } from "./drawBalls2060";
import { y_2540, y_2550_1, y_2550_2, y_2560_1, y_2560_2 } from "../../../public/data/part_1/constitution";
import { DetailState } from "../../DetailState";

export const Section_1 = ({ current }) => {
  const start = () => {
    document.getElementById("start_btn").style.pointerEvents = "none";
    drawBalls2040(current.world, y_2540);
    setTimeout(() => {
      drawBalls2050(current.world, y_2550_2);
    }, 12000);
    setTimeout(() => {
      drawBalls2050(current.world, y_2550_1);
    }, 18000);
    setTimeout(() => {
      drawBalls2060(current.world, y_2560_1);
    }, 24000);
    setTimeout(() => {
      drawBalls2060(current.world, y_2560_2);
    }, 33000);
  };

  return (
    <div className="absolute z-20 w-full pt-16 overflow-x-hidden text-center ">
      <div className="flex flex-col items-center ">
        <p className="b4">
          หรืออาจเป็นเพราะกระบวนการ
          <br />
          ที่ส่งผลต่อการลงชื่อเสนอกฎหมาย
        </p>
        <p className="mt-6 b4">โดยแบ่งเป็น</p>
        <p className="font-black h6"> ขั้นตอนการเสนอกฎหมาย</p>
        <p className="mt-6 b4">และ</p>
        <p className="font-black h6"> ขั้นตอนการพิจารณากฎหมาย</p>
        <p className="mt-6 b4">มาดูกันว่าขั้นตอนไหนที่ทำให้กฎหมายประชาชนไปไม่ถึงปลายทาง</p>
        <div className="   relative w-[112px] h-[112px] mt-20 cursor-pointer" id="start_btn" onClick={() => start()}>
          <img src={require("assets/images/start.svg")} alt="image" />
        </div>
      </div>
      <div className="h-[5000px]  w-[1152px] mx-auto" id="leg_section_1_wrapper">
        <DetailState
          top="1200px"
          left="95%"
          img={require("assets/images/bullet_0_white.svg")}
          des="ร่างพระราชบัญญัติผู้มีสิทธิเลือกตั้งเสนอ ไม่น้อยกว่า 20 คนและร่างรัฐธรรมนูญผู้มีสิทธิเลือกตั้งเสนอ ไม่น้อยกว่า 120 คนยื่นพร้อมโดยสามารถร้องขอให้สำนักเลขาธิการสภาผู้แทนราษฎรช่วยเหลือในการจัดทำร่างกฎหมายก่อนเสนอต่อประธานรัฐสภาหรือผู้ริเริ่มแก้ไขร่างได้ แต่ต้องแจ้งเป็นหนังสือต่อประธานรัฐสภาพร้อมเอกสารที่แก้ไขใหม่"
        />
        <DetailState
          top="1900px"
          left="40%"
          img={require("assets/images/bullet_1_white.svg")}
          des="ตรวจสอบเอกสารต่อไปนี้ <br/>1. ร่างพ.ร.บ. พร้อม<br/>- บันทึกหลักการและเหตุผล<br/>- บันทึกวิเคราะห์สรุปสาระสำคัญ<br/><br/>2. รายชื่อกับสำเนาบัตรประชาชนของผู้ริเริ่ม"
        />
        <DetailState
          top="2100px"
          left="95%"
          img={require("assets/images/bullet_2_white.svg")}
          des="ถ้าหลักการเป็นไปตามหมวด 3/5  แต่เนื้อหาหรือรูปแบบไม่เป็นไปตามรูปแบบการเสนอ สามารถร้องขอให้สำนักเลขาธิการสภาผู้แทนราษฎรช่วยเหลือในการจัดทำร่างได้"
        />
        <DetailState
          top="2400px"
          left="95%"
          img={require("assets/images/bullet_3_white.svg")}
          des="ผู้ริเริ่มจัดให้มีการลงชื่อเสนอร่างพ.ร.บ. <br/>*ซึ่งเอกสารต้องลงลายมือชื่อผู้มีสิทธิเลือกตั้งทุกแผ่น พร้อมรายละเอียด<br/>- ชื่อตัว - ชื่อสกุล<br/>- หมายเลขประจำตัวประชาชน<br/><br/>และต้องปรากฎข้อความ <br/>- ลงลายมือชื่อเพื่อเสนอร่างพ.ร.บ.ใด<br/>- สามารถตรวจสอบร่างพ.ร.บ. ได้ที่ใด"
        />
        <DetailState
          top="2800px"
          left="95%"
          img={require("assets/images/bullet_4_white.svg")}
          des="เมื่อรวบรวมรายชื่อผู้มีสิทธิเลือกตั้ง (ไม่น้อยกว่า 10,000 คน)<br/>- ยื่นหนังสือต่อประธานรัฐสภา หลังรวบรวมรายชื่อ<br/>- สำเนาร่างพ.ร.บ. พร้อมบันทึกหลักการเหตุผล และบันทึกวิเคราะห์สรุปสาระสำคัญ<br/>- เอกสารลายมือชื่อของผู้มีสิทธิเลือกตั้ง และสำเนาบัตรประชาชน<br/>- บัญชีรายชื่อผู้แทนของผู้เข้าชื่อเสนอร่างพ.ร.บ. ไม่เกิน 60 คน"
        />
        <DetailState
          top="3300px"
          left="95%"
          img={require("assets/images/bullet_6_white.svg")}
          des="ตรวจข้อมูลเลขประจำตัวประชาชน 13 หลัก  "
        />
        <DetailState
          top="3600px"
          left="95%"
          img={require("assets/images/bullet_7_white.svg")}
          des="- ประกาศรายชื่อทางสื่อเทคโนโลยีสารสนเทศของสำนักเลขาธิการสภาผู้แทนราษฎร<br/>- จัดทำบัญชีรายชื่อ ณ สำนักงานเลขาธิการสภาผู้แทนราษฎร<br/>- หนังสือแจ้งไปยังผู้มีรายชื่อเข้าชื่อเสนอกฎหมาย"
        />
        <DetailState
          top="4000px"
          left="95%"
          img={require("assets/images/bullet_8_white.svg")}
          des="- ตรวจสอบรูปแบบของร่างพ.ร.บ.และบันทึกประกอบ<br/>- วิเคราะห์ว่าเป็นร่างการเงินหรือไม่<br/>- วิเคราะห์เกี่ยวกับเด็ก เยาวชน สตรี ผู้สูงอายุหรือคนพิการ หรือทุพพลภาพ"
        />
        <div className={`  relative w-[1000px] h-[197px] mx-auto top-[400px]`} id="leg_startsection_1">
          <div className="absolute top-0 w-full ">
            <p className=" text-center relative -top-[15vh] font-black h4"> ขั้นตอนการเสนอกฎหมาย</p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[500px] h-[197px] mx-auto top-[600px] hint_leg_00`} id="leg_01">
          <img src={require("assets/images/leg_01.svg")} alt="image" />
          <div className="absolute -top-[120px] w-full ">
            <p className="relative text-center b2">
              ผู้ริเริ่มเสนอร่างกฎหมาย <br />
              และเอกสาร
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[700px] h-[197px] left-[-80px]  top-[700px] hint_leg_ab`} id="leg_02">
          <img src={require("assets/images/leg_02.svg")} alt="image" />
        </div>
        {/*---------*/}
        <div className={` relative w-[600px] h-[197px] mx-[55%] top-[700px] hint_leg_01`} id="leg_03">
          <img src={require("assets/images/leg_03.svg")} alt="image" />
          <div className="absolute -top-[80px] -left-[90px] w-full ">
            <p className="relative text-center b2">ตรวจสอบเอกสาร</p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[600px] h-[197px] mx-[36%] top-[780px] hint_leg_02`} id="leg_04">
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
        <div className={` relative w-[700px] h-[197px] mx-[12%] top-[880px] hint_leg_03`} id="leg_05">
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
        <div className={` relative w-[250px] h-[433px] mx-[2%] top-[750px] `} id="leg_07">
          <img src={require("assets/images/leg_free.svg")} alt="image" />
        </div>
        {/*---------*/}
        <div className={` relative w-[600px] h-[197px] mx-[11%] top-[800px] hint_leg_04`} id="leg_06">
          <img src={require("assets/images/leg_06.svg")} alt="image" />
          <div className="absolute -top-[70px] -left-[100px] w-full ">
            <p className="relative text-center b2">
              ประธานรัฐสภา <br />
              <b>ตรวจสอบเอกสาร</b>
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[800px] h-[197px] mx-[30%] top-[900px] hint_leg_05`} id="leg_08">
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
        <div className={` relative w-[250px] h-[433px] mx-[0] top-[600px] hint_leg_06`} id="leg_09">
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
        <div className={` relative w-[800px] h-[300px] mx-[6%] top-[550px] hint_leg_07`} id="leg_10">
          <img src={require("assets/images/leg_09.svg")} alt="image" />
          <div className="absolute top-[30px] -left-[23%]  w-full ">
            <p className="relative text-center b2">
              <b>ยื่นคัดค้าน</b>
              <br /> เพื่อขีดฆ่ารายชื่อ 30 วัน
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[150px] h-[433px] mx-[0%] top-[350px] opacity-0 `} id="leg_11">
          <img src={require("assets/images/leg_07.svg")} alt="image" />
        </div>
        {/*---------*/}
        <div className={` relative w-[650px] h-[170px] mx-auto top-[450px] hint_leg_08`} id="leg_12">
          <img src={require("assets/images/leg_10.svg")} alt="image" />
          <div className="absolute -top-[100px] -left-[17%]  w-full ">
            <p className="relative text-center b2">
              <b>ประธานสภาผู้แทนราษฎร</b>
              <br /> พิจารณาว่า เป็นร่างการเงินหรือไม่
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[850px] h-[190px] mx-[42%] top-[580px] hint_leg_09`} id="leg_13">
          <img src={require("assets/images/leg_11.svg")} alt="image" />
          <div className="absolute -top-[100px]  w-full ">
            <p className="relative text-center b2">
              ส่งให้ <b>นายกรัฐมนตรี</b>
              <br /> ให้คำรับรอง
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[280px] h-[350px] mx-[3%] top-[410px] hint_leg_10`} id="leg_14">
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
