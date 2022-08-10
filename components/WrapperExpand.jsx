import { useRef } from "react";
import { ExpandYear } from "./ExpandYear";
import { Section_1 } from "./Matter/Part1/Section_1";
import { Section_2 } from "./Matter/Part2/Section_2";
import { Canvas_1 } from "./Matter/Part1/Canvas";
import { Canvas_2 } from "./Matter/Part2/Canvas";
import { Engine } from "matter-js";
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
  const current_01 = engine_01.current;
  const current_02 = engine_02.current;

  return (
    <div>
      <div className="relative h-[300vh] ">
        <ExpandYear current={current_01} />
        <div className="w-full h-screen "></div>
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
