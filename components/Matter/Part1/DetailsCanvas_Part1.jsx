import { DiagramPart1 } from "../../DiagramPart1";
import video from "../../../public/video.mp4";

export const DetailsCanvas_Part1 = () => {
  return (
    <div id="DetailsCanvas_Part1" className="relative w-full ">
      <div className=" sticky top-0 lg:z-10  h-[0px]  lg:w-[50%] ">
        <div className="relative flex items-center justify-center h-screen ">
          <div id="DiagramPart1" className="absolute cursor-pointer ">
            <DiagramPart1 />
          </div>
        </div>
      </div>
      <div className="relative bg-black bg-opacity-75 ">
        <div className="relative flex h-screen ">
          <div className="flex-1 hidden lg:block" />
          <div className="flex flex-col justify-center flex-1 " id="detail_step_1">
            <div className=" w-[320px]  md:w-[470px] mx-auto">
              <p className="b3">จากขั้นตอนการเสนอกฎหมายแสนวกวนนี้</p>
              <p className="mt-2 font-bold b2">เป็นเพียงขั้นแรกเท่านั้น</p>
              <p className="b3">
                กว่าจะบรรจุเข้าเป็นวาระเพื่อให้ร่างกฎหมายถูกพิจารณา
                <br className="hidden md:inline" />
                และนี่คือ
              </p>

              <div className="flex items-center mt-5 font-bold b1">
                <div className={` relative w-[50px] h-[50px] md:w-[75px] md:h-[75px] mr-4 `}>
                  <img src={require("assets/images/bullet_3.svg")} alt="image" />
                </div>
                อันดับที่ไม่ผ่านมากที่สุด
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex min-h-screen py-5">
          <div className="flex-1 hidden lg:block" />
          <div className="flex flex-col items-center justify-center flex-1 text-center b2 " id="detail_step_2">
            <div className={` relative w-[250px] h-[306px] md:w-[305px] md:h-[356px] bg-black rounded-full mr-4 `}>
              <img src={require("assets/images/rank01.svg")} alt="image" />
            </div>
            <div className="flex items-center mt-10 ">
              ขั้นตอนที่
              <div className={` relative w-[30px] h-[30px] ml-2 `}>
                <img src={require("assets/images/bullet_9_white.svg")} alt="image" />
              </div>
            </div>
            <p className="mt-1 font-bold ">ส่งให้นายกรัฐมนตรีให้คำรับรอง</p>
            <p>
              <span className="font-bold ">35</span> ฉบับ
            </p>
          </div>
        </div>
        <div className="relative flex min-h-screen py-5 ">
          <div className="flex-1 hidden lg:block" />
          <div className="flex flex-col justify-center flex-1 " id="detail_step_3">
            <div className=" w-[320px] md:w-[400px] h-full mx-auto b4">
              <p>
                สิ่งที่น่าสนใจ คือ
                <span className=" text-scarlet">
                  {" "}
                  ร่างการเงินที่ต้องให้นายกรัฐมนตรีให้คำรับรองติดอันดับที่ไม่ได้ไปต่อ
                </span>
              </p>
              <p className="mt-4 ">
                นั่นอาจเป็นเพราะ{" "}
                <span className="font-bold ">
                  การพิจารณาร่างกฎหมาย ขึ้นอยู่กับดุลยพินิจของนายกรัฐมนตรี และ
                  คณะรัฐมนตรีที่หลายครั้งอาจไม่ได้สอดคล้องกับเจตนารมณ์ของประชาชนทุกกลุ่ม
                </span>{" "}
                <br />
                โดยในรัฐธรรมนูญปี 2560 จะมีกฎหมายไม่ให้คำรับรองมากที่สุด จึงขอหยิบยกตัวอย่างของดุลยพินิจของนายกรัฐมนตรี
                เรื่องร่างแก้รัฐธรรมนูญสืบทอดอำนาจ
              </p>
              <div className="my-5 md:w-[400px]  w-[300px] ">
                <video src={video} controls muted poster={require("assets/images/video.png")} />
              </div>
              <p className=" text-scarlet">
                “ไม่จำเป็นต้องสั่งใครทุกคนก็มีความคิด ความคิดดี หรือไม่ดี ถ้าระแวงเรื่องการสืบทอดอำนาจก็ไปแก้มา
                แก้ให้ได้แล้วกัน”
              </p>
              <p className="mt-1 font-bold b5">พลเอกประยุทธ์ จันทร์โอชา</p>
              <p className="b5">เรื่องการเสนอแก้รัฐธรรมนูญ</p>
            </div>
          </div>
        </div>
        <div className="relative flex min-h-screen py-5 ">
          <div className="flex-1 hidden lg:block" />
          <div className="flex flex-col items-center justify-center flex-1 text-center b2 " id="detail_step_4">
            <div className={` relative w-[250px] h-[306px] md:w-[305px] md:h-[356px] bg-black rounded-full mr-4 `}>
              <img src={require("assets/images/rank02.svg")} alt="image" />
            </div>
            <div className="flex items-center mt-10 ">
              ขั้นตอนที่
              <div className={` relative w-[30px] h-[30px] ml-2 `}>
                <img src={require("assets/images/bullet_3_white.svg")} alt="image" />
              </div>
            </div>
            <p className="mt-1 font-bold ">ล่ารายชื่อให้ครบ 10,000 คน</p>
            <p className="font-bold">ภายใน 45 วัน</p>
            <p>
              <span className="font-bold ">34</span> ฉบับ
            </p>
          </div>
        </div>
        <div className="relative flex min-h-screen py-5">
          <div className="flex-1 hidden lg:block" />
          <div className="flex flex-col items-center justify-center flex-1 text-center b2 " id="detail_step_5">
            <div className={` relative w-[250px] h-[306px] md:w-[305px] md:h-[356px] bg-black rounded-full mr-4 `}>
              <img src={require("assets/images/rank03.svg")} alt="image" />
            </div>
            <div className="flex items-center mt-10 ">
              ขั้นตอนที่
              <div className={` relative w-[30px] h-[30px] ml-2 `}>
                <img src={require("assets/images/bullet_1_white.svg")} alt="image" />
              </div>
            </div>
            <p className="mt-1 font-bold ">ล่ารายชื่อให้ครบ 10,000 คน</p>
            <p className="font-bold">ภายใน 45 วัน</p>
            <p>
              <span className="font-bold ">34</span> ฉบับ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
