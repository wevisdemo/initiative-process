import { useRef } from "react";
import { ExpandYear } from "./ExpandYear";
import { Section_1 } from "./Matter/Part1/Section_1";

import { Canvas } from "./Matter/Part1/Canvas";
import { Engine } from "matter-js";
export const WrapperExpand = () => {
  const engine = useRef(
    Engine.create({
      enableSleeping: true,
    })
  );
  const current = engine.current;

  return (
    <div className="relative">
      <div className="relative h-[300vh] ">
        <ExpandYear current={current} />
        <div className="w-full h-screen "></div>
        <div className="w-full h-screen "> canvas -100</div>
      </div>
      <Section_1 current={current} />
      <Canvas current={current} />
    </div>
  );
};
