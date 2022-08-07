import { Bodies, Composite } from "matter-js";
import { vhToPixels, vwToPixels } from "../../../util";
import { Triangle } from "../filters/Triangle";

export const leg_13 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_13");
  const elem_leg_left = elem_leg.getBoundingClientRect().left + w - 43;
  const y = elem_leg.offsetTop + vhToPixels(100) + elem_leg.getBoundingClientRect().height / 2;
  const wrapper = document.getElementById("canvas_past_1");
  const margin = wrapper.getBoundingClientRect().x;

  const rect_1 = Bodies.rectangle(vwToPixels(53), y + 47, w, 20, {
    isStatic: true,
    angle: Math.PI - Math.PI / 45,
  });
  const rect_2 = Bodies.rectangle(vwToPixels(71), y - 10, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3,
  });
  const rect_3 = Bodies.rectangle(vwToPixels(86), y + 25, w, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 5),
  });
  const rect_4 = Bodies.rectangle(vwToPixels(95.5), y + 80, w, 20, {
    isStatic: true,
    angle: Math.PI,
  });

  Composite.add(world, [rect_1, rect_2, rect_3, rect_4]);

  Triangle(world, elem_leg_left - margin + w / 2 + 65, y - w / 2.4, -Math.PI + Math.PI / 5, 9, 2);
};
