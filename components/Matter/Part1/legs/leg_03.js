import { Bodies, Composite } from "matter-js";
import { vhToPixels, vwToPixels } from "../../../util";
export const leg_03 = (world) => {
  const elem_leg = document.getElementById("leg_03");
  const y = elem_leg.offsetTop + vhToPixels(100) + elem_leg.getBoundingClientRect().height / 2;

  const w = 250;
  const rect_1 = Bodies.rectangle(vwToPixels(75), y, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3.2,
  });
  const rect_2 = Bodies.rectangle(vwToPixels(93), y, w, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
  });
  const rect_3 = Bodies.rectangle(vwToPixels(100), y + 25, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3.2,
  });

  Composite.add(world, [rect_1, rect_2, rect_3]);
};
