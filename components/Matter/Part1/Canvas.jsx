import { useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Composite } from "matter-js";

import { drawStartBtn } from "../drawStartBtn";
export const Canvas = ({ current }) => {
  const scene = useRef();

  useEffect(() => {
    const wrapper = document.getElementById("canvas_past_1");
    const cw = document.body.clientWidth;
    const ch = wrapper.clientHeight;
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

    Engine.run(current);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(current.world);
      Engine.clear(current);
      render.canvas.remove();
    };
  }, [current]);

  return (
    <div className="relative -top-[100vh] h-[900vh]  " id="canvas_past_1">
      <div ref={scene} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
