import { useRef } from "react";
import { ExpandYear } from "./ExpandYear";
import { Section_1 } from "./Matter/Part1/Section_1";
import { Section_2 } from "./Matter/Part2/Section_2";
import { Canvas_1 } from "./Matter/Part1/Canvas";
import { Canvas_2 } from "./Matter/Part2/Canvas";
import { Engine } from "matter-js";
export const WrapperExpand = () => {
  const engine = useRef(
    Engine.create({
      enableSleeping: true,
    })
  );
  const current = engine.current;

  return (
    <div>
      <div className="relative h-[300vh] ">
        <ExpandYear current={current} />
        <div className="w-full h-screen "></div>
        <div className="w-full h-screen "> canvas -100</div>
      </div>
      <div className="relative ">
        <Section_1 current={current} />
        <Canvas_1 current={current} />
      </div>
      {/* <Section_2 current={current} /> */}
      {/* <Canvas_2 current={current} /> */}
    </div>
  );
};
