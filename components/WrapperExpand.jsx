import { useRef, useState } from "react";
import { ExpandYear } from "./ExpandYear";
import { Section_1 } from "./Matter/Part1/Section_1";
import { Section_2 } from "./Matter/Part2/Section_2";
import { Canvas_1 } from "./Matter/Part1/Canvas";
import { Canvas_2 } from "./Matter/Part2/Canvas";
import { Engine } from "matter-js";
import { ExpandStep } from "./ExpandStep";
import GetPosition from "./GetPosition";

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
  const [step_1, setStep_1] = useState(true);
  const [step_2, setStep_2] = useState(true);
  const [step_3, setStep_3] = useState(true);
  const [firstStep_3, setFirstStep_3] = useState(false);

  const current_01 = engine_01.current;
  const current_02 = engine_02.current;

  GetPosition(setStep_1, setStep_2, setStep_3, firstStep_3, setFirstStep_3);
  return (
    <div suppressHydrationWarning>
      <div className="relative h-[605vh]  ">
        <ExpandYear current={current_01} />
        <div className="sticky top-0 z-10 w-full h-screen " id="expand_step_0" />
        <div className="sticky top-[0] z-10 w-full pt-[250px] h-screen " id="expand_step_1">
          <div className="h-full bg-black bg-opacity-75 ">
            <ExpandStep
              step="1"
              isStep_1={step_1}
              setStep_1={setStep_1}
              isStep_2={step_2}
              setStep_2={setStep_2}
              isStep_3={step_3}
              setStep_3={setStep_3}
            />
          </div>
        </div>
        <div className="sticky top-[0] pt-[250px] z-10 w-full h-screen " id="expand_step_2">
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
        <div className="sticky top-[0] pt-[250px] z-10 w-full h-screen  " id="expand_step_3">
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
        <div className="w-full h-screen "> canvas -100</div>
      </div>
      <div className="relative ">
        <Section_1 current={current_01} />
        <Canvas_1 current={current_01} />
      </div>
      <div className="h-screen "> ... </div>
      <div className="relative ">
        <Section_2 current={current_02} />
        <Canvas_2 current={current_02} />
      </div>
    </div>
  );
};
