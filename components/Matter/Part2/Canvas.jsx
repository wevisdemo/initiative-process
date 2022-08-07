import { useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Composite } from "matter-js";

import { drawStartBtn } from "../drawStartBtn";
import { drawRectStart } from "./drawRectStart";

export const Canvas_2 = ({ current }) => {
  const scene = useRef();

  useEffect(() => {
    const wrapper = document.getElementById("canvas_past_1");

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
      Bodies.rectangle(cw / 2, -5, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    drawStartBtn(current.world);
    drawRectStart(current.world);

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
    <div suppressHydrationWarning>
      <div className={` h-[6000px] max-w-6xl mx-auto`} id="canvas_past_1">
        <div ref={scene} style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
};
