import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import { ExpandYear } from "./ExpandYear";
import { Section_1 } from "./Matter/Part1/Section_1";
import { Section_2 } from "./Matter/Part2/Section_2";
import { Canvas_1 } from "./Matter/Part1/Canvas";
import { Canvas_2 } from "./Matter/Part2/Canvas";

import { Engine } from "matter-js";
import { ExpandStep } from "./ExpandStep";
import { Summary_Part1 } from "./Matter/Part1/Summary_Part1";
import GetPosition from "./GetPosition";
import { DetailsCanvas_Part1 } from "./Matter/Part1/DetailsCanvas_Part1";
import { Summary_Part2 } from "./Matter/Part2/Summary_Part2";
import { DetailsCanvas_Part2 } from "./Matter/Part2/DetailsCanvas_Part2";
import { animateZoom } from "./animateZoom";
import { Canvas_Mobile } from "./Matter/PartMobile/CanvasMobile";
import { Section_Mobile } from "./Matter/PartMobile/Section_Mobile";
import { IntroStepMobile } from "./Matter/PartMobile/IntroStepMobile";
import { IntroPart2 } from "./Matter/Part2/IntroPart2";
import { Section_2_Mobile } from "./Matter/Part2Mobile/Section_2_Mobile";
import { Canvas_2_Mobiles } from "./Matter/Part2Mobile/Canvas_2_Mobile";
import { IntroPart_2_Mobile } from "./Matter/Part2Mobile/IntroPart_2_Mobile";
import { ExpandImage } from "./ExpandImage";
import { OurTeam } from "./Summary/OurTeam";
import { Interview } from "./Summary/Interview";

import WvNavButton from "@wevisdemo/ui/components/nav-button";
import WvNavbar from "@wevisdemo/ui/components/navbar";
import { DetailState } from "./DetailState";

export const WrapperExpand = () => {
  const engine_01 = useRef(
    Engine.create({
      enableSleeping: true,
    })
  );
  const engine_02 = useRef(
    Engine.create({
      enableSleeping: true,
    })
  );
  const engine_03 = useRef(
    Engine.create({
      enableSleeping: true,
    })
  );
  const engine_04 = useRef(
    Engine.create({
      enableSleeping: true,
    })
  );
  const [step_1, setStep_1] = useState(true);
  const [step_2, setStep_2] = useState(true);
  const [step_3, setStep_3] = useState(true);
  const [firstStep_3, setFirstStep_3] = useState(false);
  const [drawBalls, setDrawBalls] = useState(false);
  const [state, setState] = useState({ x: 0, y: 0 });

  const current_01 = engine_01.current;
  const current_02 = engine_02.current;
  const current_03 = engine_03.current;
  const current_04 = engine_04.current;

  GetPosition(setStep_1, setStep_2, setStep_3, firstStep_3, setFirstStep_3, drawBalls, setDrawBalls);

  const handleMouseMove = (e) => {
    e.persist();
    setState((state) => ({ ...state, x: e.clientX, y: e.clientY }));
  };

  useEffect(() => {
    animateZoom(state.x, state.y);
  });

  const router = useRouter();

  const select_route = (path) => {
    router.push(path, undefined, { shallow: false });
  };

  return (
    // <div onMouseMove={handleMouseMove} >
    <div id="wrapper">
      <div className="relative lg:h-[605vh]  ">
        <ExpandYear />
        <div className="sticky top-0 z-0 hidden w-full h-screen lg:block " id="expand_step_0" />
        <div className="lg:sticky top-[0] z-30 w-full lg:pt-[250px] lg:h-screen " id="expand_step_1">
          <div className="h-full bg-black bg-opacity-75 ">
            <div className=" lg:hidden my-9">
              <div
                className="flex-col items-center pt-4 text-center max-w-[280px] mx-auto lg:max-w-full "
                id="step_1_mobile"
              >
                <p className="mt-2 font-black h7">ทำไม?</p>
                <p className="mt-2 b4">
                  ปลายทางของกฎหมายประชาชนไม่เป็นไปตามนั้น
                  <br className="hidden lg:inline" /> มีปัจจัยหรือสาเหตุอะไร <br className=" lg:hidden" />
                  ที่ส่งผลต่อกฎหมายประชาชนเหล่านี้
                </p>
                <p className="mt-2 font-bold b4">ไม่ใช่ทุกกฎหมายที่จะเสนอได้ และต้องมีจำนวนผู้เสนอครบ</p>
              </div>
              <div className="py-2 text-center max-w-[280px] mx-auto lg:max-w-full" id="step_2_mobile">
                <p className="font-bold pointer-events-none b4">
                  กฎหมายของรัฐธรรมนูญปี 2540-2560 ที่เปิดช่องทางลงชื่อการเข้าเสนอชื่อ
                </p>
              </div>
            </div>

            <ExpandStep
              step="1"
              isStep_1={step_1}
              setStep_1={setStep_1}
              isStep_2={step_2}
              setStep_2={setStep_2}
              isStep_3={step_3}
              setStep_3={setStep_3}
            />
            <div className="mt-12 text-center b4 lg:hidden max-w-[280px] mx-auto  ">
              รัฐธรรมนูญทั้ง 3 ฉบับ ไม่ได้ปรับเปลี่ยนอะไรมาก แต่สิ่งที่ปรับเป็น
              <br className="hidden lg:inline" />{" "}
              <span className=" text-scarlet">คุณสมบัติและจำนวนของผู้มีสิทธิเสนอร่าง</span>
              <br className="hidden lg:inline" />
              ปรับจำนวนให้ลดลงเพื่อเอื้อต่อการเสนอมากขึ้น
            </div>
          </div>
        </div>
        <div className="sticky top-[0] pt-[250px] z-30 w-full h-screen hidden lg:block " id="expand_step_2">
          <ExpandStep
            step="2"
            isStep_1={step_1}
            setStep_1={setStep_1}
            isStep_2={step_2}
            setStep_2={setStep_2}
            isStep_3={step_3}
            setStep_3={setStep_3}
          />
        </div>
        <div className="sticky top-[0] pt-[250px] z-30 w-full h-screen hidden lg:block  " id="expand_step_3">
          <ExpandStep
            step="3"
            isStep_1={step_1}
            setStep_1={setStep_1}
            isStep_2={step_2}
            setStep_2={setStep_2}
            isStep_3={step_3}
            setStep_3={setStep_3}
          />
          <div className="mt-12 text-center b4 ">
            รัฐธรรมนูญทั้ง 3 ฉบับ ไม่ได้ปรับเปลี่ยนอะไรมาก แต่สิ่งที่ปรับเป็น
            <br /> <span className=" text-scarlet">คุณสมบัติและจำนวนของผู้มีสิทธิเสนอร่าง</span>
            <br />
            ปรับจำนวนให้ลดลงเพื่อเอื้อต่อการเสนอมากขึ้น
          </div>
        </div>
        <div className="hidden w-full h-screen opacity-0 lg:block ">.</div>
      </div>
      <div className="relative hidden lg:block ">
        <Section_1 current={current_01} />
        <Canvas_1 current={current_01} />
      </div>
      <div className="relative   overflow-x-hidden  max-w-[100vw] lg:hidden  ">
        <IntroStepMobile current={current_03} />
        <div className=" h-[1840px] relative w-screen  ">
          <DetailState
            top="100px"
            left="50%"
            img="/images/bullet_0_white.svg"
            des="ร่างพระราชบัญญัติผู้มีสิทธิเลือกตั้งเสนอ ไม่น้อยกว่า 20 คนและร่างรัฐธรรมนูญผู้มีสิทธิเลือกตั้งเสนอ ไม่น้อยกว่า 120 คนยื่นพร้อมโดยสามารถร้องขอให้สำนักเลขาธิการสภาผู้แทนราษฎรช่วยเหลือในการจัดทำร่างกฎหมายก่อนเสนอต่อประธานรัฐสภาหรือผู้ริเริ่มแก้ไขร่างได้ แต่ต้องแจ้งเป็นหนังสือต่อประธานรัฐสภาพร้อมเอกสารที่แก้ไขใหม่"
          />
          <DetailState
            top="340px"
            left="50%"
            img="/images/bullet_1_white.svg"
            des="ตรวจสอบเอกสารต่อไปนี้ <br/>1. ร่างพ.ร.บ. พร้อม<br/>- บันทึกหลักการและเหตุผล<br/>- บันทึกวิเคราะห์สรุปสาระสำคัญ<br/>2. รายชื่อกับสำเนาบัตรประชาชนของผู้ริเริ่ม"
          />
          <DetailState
            top="540px"
            left="50%"
            img="/images/bullet_2_white.svg"
            des="ถ้าหลักการเป็นไปตามหมวด 3/5  แต่เนื้อหาหรือรูปแบบไม่เป็นไปตามรูปแบบการเสนอ สามารถร้องขอให้สำนักเลขาธิการสภาผู้แทนราษฎรช่วยเหลือในการจัดทำร่างได้"
          />
          <DetailState
            top="720px"
            left="50%"
            img="/images/bullet_3_white.svg"
            des="ผู้ริเริ่มจัดให้มีการลงชื่อเสนอร่างพ.ร.บ. <br/>*ซึ่งเอกสารต้องลงลายมือชื่อผู้มีสิทธิเลือกตั้งทุกแผ่น พร้อมรายละเอียด<br/>- ชื่อตัว - ชื่อสกุล<br/>- หมายเลขประจำตัวประชาชน<br/>และต้องปรากฎข้อความ <br/>- ลงลายมือชื่อเพื่อเสนอร่างพ.ร.บ.ใด<br/>- สามารถตรวจสอบร่างพ.ร.บ. ได้ที่ใด"
          />
          <DetailState
            top="980px"
            left="50%"
            img="/images/bullet_4_white.svg"
            des="เมื่อรวบรวมรายชื่อผู้มีสิทธิเลือกตั้ง (ไม่น้อยกว่า 10,000 คน)<br/>- ยื่นหนังสือต่อประธานรัฐสภา หลังรวบรวมรายชื่อ<br/>- สำเนาร่างพ.ร.บ. พร้อมบันทึกหลักการเหตุผล และบันทึกวิเคราะห์สรุปสาระสำคัญ<br/>- เอกสารลายมือชื่อของผู้มีสิทธิเลือกตั้ง และสำเนาบัตรประชาชน<br/>- บัญชีรายชื่อผู้แทนของผู้เข้าชื่อเสนอร่างพ.ร.บ. ไม่เกิน 60 คน"
          />
          <DetailState
            top="1270px"
            left="50%"
            img="/images/bullet_6_white.svg"
            des="ตรวจข้อมูลเลขประจำตัวประชาชน 13 หลัก  "
          />
          <DetailState
            top="1390px"
            left="50%"
            img="/images/bullet_7_white.svg"
            des="- ประกาศรายชื่อทางสื่อเทคโนโลยีสารสนเทศของสำนักเลขาธิการสภาผู้แทนราษฎร<br/>- จัดทำบัญชีรายชื่อ ณ สำนักงานเลขาธิการสภาผู้แทนราษฎร<br/>- หนังสือแจ้งไปยังผู้มีรายชื่อเข้าชื่อเสนอกฎหมาย"
          />
          <DetailState
            top="1590px"
            left="50%"
            img="/images/bullet_8_white.svg"
            des="- ตรวจสอบรูปแบบของร่างพ.ร.บ.และบันทึกประกอบ<br/>- วิเคราะห์ว่าเป็นร่างการเงินหรือไม่<br/>- วิเคราะห์เกี่ยวกับเด็ก เยาวชน สตรี ผู้สูงอายุหรือคนพิการ หรือทุพพลภาพ"
          />
          <div className=" scale-[0.4] origin-top absolute left-[50%] -translate-x-[50%]  ">
            <Section_Mobile />
            <Canvas_Mobile current={current_03} />
          </div>
        </div>
      </div>

      <div className="relative mt-10 ">
        <Summary_Part1 />
        <DetailsCanvas_Part1 />
      </div>
      <div className="relative z-20  overflow-x-hidden  max-w-[100vw]  " id="section_2">
        <div className="hidden bg-black lg:block">
          <div className="relative z-50 pt-16">
            <IntroPart2 current={current_02} />
          </div>
          <div className=" -translate-y-[100px] ">
            <Section_2 current={current_02} />
            <Canvas_2 current={current_02} />
          </div>
        </div>
        <div className="lg:hidden">
          <div className="relative z-50 pt-16">
            <IntroPart_2_Mobile current={current_04} />
          </div>
          <div className=" h-[1840px] relative w-screen  ">
            <div className=" scale-[0.4] origin-top absolute left-[50%] -translate-x-[50%]  ">
              <Section_2_Mobile />
              <Canvas_2_Mobiles current={current_04} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-10 ">
        <Summary_Part2 />
        <DetailsCanvas_Part2 />
      </div>
      <ExpandImage />
      <div id="summary_section" className="relative ">
        <div className="sticky top-0 z-50 w-full ">
          <WvNavbar title="Initiative Law" dark={true}>
            <WvNavButton dark={true} active={router.pathname === "/"}>
              <div onClick={() => select_route("/")}>หน้าหลัก</div>
            </WvNavButton>
            <WvNavButton dark={true} active={router.pathname === "/About"}>
              <div onClick={() => select_route("/About")}>เกี่ยวกับโครงการ</div>
            </WvNavButton>
          </WvNavbar>
        </div>
        <OurTeam />
        <Interview />
      </div>
    </div>
  );
};
