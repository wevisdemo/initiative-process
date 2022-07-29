import { useRef } from "react";
import { ExpandYear } from "./ExpandYear";
import { Page1 } from "./Matter/Part1/Page1";
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
      <Page1 current={current} />
      <Canvas current={current} />
    </div>
  );
};
