import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";

export const leg_17 = (world) => {
  const w = 230;
  const elem_leg = document.getElementById("leg_17");
  const elem_leg_left = elem_leg.getBoundingClientRect().left - 105;
  const y = elem_leg.offsetTop + elem_leg.getBoundingClientRect().height / 2;
  const wrapper = document.getElementById("canvas_past_2");
  const margin = wrapper.getBoundingClientRect().x;

  const rect_1 = Bodies.rectangle(vwToPixels(72.5), y, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3.2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(89.5), y - 13, w, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_3 = Bodies.rectangle(vwToPixels(104.5), y - 15, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3,
    render: {
      fillStyle: "transparent",
    },
  });

  Composite.add(world, [rect_1, rect_2, rect_3]);

  Triangle(world, elem_leg_left - margin + 290, y - 80, -Math.PI + Math.PI / 8, 12, 2);
  Triangle(world, elem_leg_left - margin + 290, y - 80, -Math.PI + Math.PI / 8, 13, 2);
  Triangle(world, elem_leg_left - margin + 330, y - 80, Math.PI - Math.PI / 5, 14, 2);
  Triangle(world, elem_leg_left - margin + 330, y - 80, Math.PI - Math.PI / 5, 15, 2);
  Triangle(world, elem_leg_left - margin + 330, y - 80, Math.PI - Math.PI / 5, 16, 2);
  Triangle(world, elem_leg_left - margin + 330, y - 80, Math.PI - Math.PI / 5, 17, 2);
  Triangle(world, elem_leg_left - margin + 330, y - 80, Math.PI - Math.PI / 5, 18, 2);
  Triangle(world, elem_leg_left - margin + 330, y - 80, Math.PI - Math.PI / 5, 19, 2);
  Triangle(world, elem_leg_left - margin + 330, y - 80, Math.PI - Math.PI / 5, 20, 2);
};
