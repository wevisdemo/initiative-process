import Image from "next/image";

import { drawBalls } from "./drawBalls";
import { y_2540, y_2550_1, y_2550_2, y_2560_1, y_2560_2 } from "../../../public/data/part_1/constitution";
import { vwToPixels } from "../../util";
export const Section_1 = ({ current }) => {
  // let isDrawed = false;

  const start = () => {
    // if (!isDrawed)
    drawBalls(current.world, y_2540);
    setTimeout(() => {
      drawBalls(current.world, y_2550_2);
    }, 5000);
    setTimeout(() => {
      drawBalls(current.world, y_2550_1);
    }, 10000);
    setTimeout(() => {
      drawBalls(current.world, y_2560_1);
    }, 15000);
    setTimeout(() => {
      drawBalls(current.world, y_2560_2);
    }, 20000);

    // const balls_2040 = document.getElementsByClassName("balls_2040");
    // Object.values(balls_2040).map((a) => (a.style.display = "none"));
    // isDrawed = true;
  };

  return (
    <div className="absolute z-20 w-full pt-16 text-center ">
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
          <Image src="/images/start.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="h-full" id="leg_section_1_wrapper">
        <div className={`  relative w-[1000px] h-[197px] mx-auto top-[400px]`} id="leg_startsection_1">
          <div className="absolute top-0 w-full ">
            <p className=" text-center relative -top-[15vh] font-black h4"> ขั้นตอนการเสนอกฎหมาย</p>
            <p className="relative text-center b2">
              ผู้ริเริ่มเสนอร่างกฎหมาย
              <br /> และเอกสาร
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[500px] h-[197px] mx-auto top-[600px]`} id="leg_01">
          <Image src="/images/leg_01.svg" layout="fill" objectFit="contain" />
          <div className="absolute -top-[80px] w-full ">
            <p className="relative text-center b2">
              ผู้ริเริ่มเสนอร่างกฎหมาย <br />
              และเอกสาร
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[700px] h-[197px] left-[-80px]  top-[700px]`} id="leg_02">
          <Image src="/images/leg_02.svg" layout="fill" objectFit="contain" />
        </div>
        {/*---------*/}
        <div className={` relative w-[600px] h-[197px] mx-[60%] top-[700px]`} id="leg_03">
          <Image src="/images/leg_03.svg" layout="fill" objectFit="contain" />
          <div className="absolute -top-[80px] -left-[90px] w-full ">
            <p className="relative text-center b2">ตรวจสอบเอกสาร</p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[600px] h-[197px] mx-[36%] top-[780px]`} id="leg_04">
          <Image src="/images/leg_04.svg" layout="fill" objectFit="contain" />
          <div className="absolute -top-[80px] -left-[90px] w-full ">
            <p className="relative text-center b2">
              ประธานรัฐสภาตรวจสอบ
              <br />
              <b>หมวด 3/5</b>
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[700px] h-[197px] mx-[12%] top-[880px]`} id="leg_05">
          <Image src="/images/leg_05.svg" layout="fill" objectFit="contain" />
          <div className="absolute -top-[80px] -left-[130px] w-full ">
            <p className="relative text-center b2">
              ล่ารายชื่อให้ครบ<b>10,000 คน</b>
              <br />
              ภายใน 45 วัน
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[250px] h-[433px] mx-[2%] top-[750px]`} id="leg_07">
          <Image src="/images/leg_07.svg" layout="fill" objectFit="contain" />
        </div>
        {/*---------*/}
        <div className={` relative w-[600px] h-[197px] mx-[11%] top-[800px]`} id="leg_06">
          <Image src="/images/leg_06.svg" layout="fill" objectFit="contain" />
          <div className="absolute -top-[70px] -left-[100px] w-full ">
            <p className="relative text-center b2">
              ประธานรัฐสภา <br />
              <b>ตรวจสอบเอกสาร</b>
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[800px] h-[197px] mx-[30%] top-[900px]`} id="leg_08">
          <Image src="/images/leg_08.svg" layout="fill" objectFit="contain" />
          <div className="absolute -top-[80px]  w-full ">
            <p className="relative text-center b2">
              แจ้งให้ยื่น
              <br />
              <b>รายชื่อเพิ่มเติม 90 วัน</b>
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[250px] h-[433px] mx-[0] top-[600px]`} id="leg_09">
          <Image src="/images/leg_07.svg" layout="fill" objectFit="contain" />
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
        <div className={` relative w-[800px] h-[300px] mx-[6%] top-[550px]`} id="leg_10">
          <Image src="/images/leg_09.svg" layout="fill" objectFit="contain" />
          <div className="absolute top-[30px] -left-[23%]  w-full ">
            <p className="relative text-center b2">
              <b>ยื่นคัดค้าน</b>
              <br /> เพื่อขีดฆ่ารายชื่อ 30 วัน
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[150px] h-[433px] mx-[0%] top-[350px] opacity-0`} id="leg_11">
          <Image src="/images/leg_07.svg" layout="fill" objectFit="contain" />
        </div>
        {/*---------*/}
        <div className={` relative w-[650px] h-[170px] mx-auto top-[450px]`} id="leg_12">
          <Image src="/images/leg_10.svg" layout="fill" objectFit="contain" />
          <div className="absolute -top-[100px] -left-[17%]  w-full ">
            <p className="relative text-center b2">
              <b>ประธานสภาผู้แทนราษฎร</b>
              <br /> พิจารณาว่า เป็นร่างการเงินหรือไม่
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[850px] h-[190px] mx-[42%] top-[600px]`} id="leg_13">
          <Image src="/images/leg_11.svg" layout="fill" objectFit="contain" />
          <div className="absolute -top-[100px]  w-full ">
            <p className="relative text-center b2">
              ส่งให้ <b>นายกรัฐมนตรี</b>
              <br /> ให้คำรับรอง
            </p>
          </div>
        </div>
        {/*---------*/}
        <div className={` relative w-[280px] h-[350px] mx-[3%] top-[300px]`} id="leg_14">
          <Image src="/images/leg_12.svg" layout="fill" objectFit="contain" />
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
