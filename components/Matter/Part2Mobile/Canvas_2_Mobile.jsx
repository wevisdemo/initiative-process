import { useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Composite } from "matter-js";

import { drawRectStart } from "./drawRectStart";
import { leg_15 } from "./legs/leg_15";
import { leg_16 } from "./legs/leg_16";
import { leg_17 } from "./legs/leg_17";
import { leg_18 } from "./legs/leg_18";
import { leg_19 } from "./legs/leg_19";
import { leg_20 } from "./legs/leg_20";
import { leg_22 } from "./legs/leg_22";
import { leg_24 } from "./legs/leg_24";
import { leg_25 } from "./legs/leg_25";
import { leg_26 } from "./legs/leg_26";

export const Canvas_2_Mobiles = ({ current }) => {
  const scene = useRef();

  useEffect(() => {
    const wrapper = document.getElementById("canvas_past_2_mobile");

    const cw = wrapper.clientWidth;
    const ch = wrapper.clientHeight;

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
      Bodies.rectangle(cw / 2, -5, cw, 20, {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
      }),
      Bodies.rectangle(-10, ch / 2, 20, ch, {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
      }),
      Bodies.rectangle(cw / 2, ch + 5, cw, 20, {
        isStatic: true,
        render: {
          fillStyle: "white",
        },
      }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
      }),
    ]);

    drawRectStart(current.world);
    leg_15(current.world);
    leg_16(current.world);
    leg_17(current.world);
    leg_18(current.world);
    leg_19(current.world);
    leg_20(current.world);
    leg_22(current.world);
    leg_24(current.world);
    leg_25(current.world);
    leg_26(current.world);

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
    <div className={`relative top-0 h-[4300px]  w-[1152px]  left-[50%] -translate-x-[50%]  `} id="canvas_past_2_mobile">
      <div ref={scene} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
