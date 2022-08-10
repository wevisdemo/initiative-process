import { useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Composite } from "matter-js";

import { drawStartBtn } from "./drawStartBtn";
import { drawRectStart } from "./drawRectStart";
import { leg_01 } from "./legs/leg_01";
import { leg_02 } from "./legs/leg_02";
import { leg_03 } from "./legs/leg_03";
import { leg_04 } from "./legs/leg_04";
import { leg_05 } from "./legs/leg_05";
import { leg_06 } from "./legs/leg_06";
import { leg_07 } from "./legs/leg_07";
import { leg_08 } from "./legs/leg_08";
import { leg_09 } from "./legs/leg_09";
import { leg_10 } from "./legs/leg_10";
import { leg_11 } from "./legs/leg_11";
import { leg_12 } from "./legs/leg_12";
import { leg_13 } from "./legs/leg_13";
import { leg_14 } from "./legs/leg_14";

export const Canvas_1 = ({ current }) => {
  const scene = useRef();

  useEffect(() => {
    const wrapper = document.getElementById("canvas_past_1");

    const cw = wrapper.clientWidth;
    const ch = wrapper.clientHeight + 1000;
    //1440 document.body.clientWidth
    //4734
    const render = Render.create({
      element: scene.current,
      engine: current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        showSleeping: false,
        showDebug: false,
        background: "transparent",
      },
    });

    Composite.add(current.world, [
      //walls
      Bodies.rectangle(cw / 2, -5, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    drawStartBtn(current.world);
    drawRectStart(current.world);
    leg_01(current.world);
    leg_02(current.world);
    leg_03(current.world);
    leg_04(current.world);
    leg_05(current.world);
    leg_06(current.world);
    leg_07(current.world);
    leg_08(current.world);
    leg_09(current.world);
    leg_10(current.world);
    leg_11(current.world);
    leg_12(current.world);
    leg_13(current.world);
    leg_14(current.world);

    Engine.run(current);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(current.world);
      Engine.clear(current);
      render.canvas.remove();
    };
  }, []);

  return (
    <div className={`relative -top-[100vh] h-[5000px] max-w-6xl mx-auto`} id="canvas_past_1">
      <div ref={scene} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
