import { Bodies, Composite } from "matter-js";
import { vhToPixels, vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";

export const leg_07 = (world) => {
  const w = 230;
  const elem_leg = document.getElementById("leg_07");
  const elem_leg_left = elem_leg.getBoundingClientRect().left + w + 55 - 55;
  const y = elem_leg.offsetTop + vhToPixels(100) + elem_leg.getBoundingClientRect().height / 2 - 17;
  const wrapper = document.getElementById("canvas_past_1");
  const margin = wrapper.getBoundingClientRect().x;

  const rect_1 = Bodies.rectangle(vwToPixels(20.5), y + 1.58 * w, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3.2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(37), y + 1.55 * w, w, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_3 = Bodies.rectangle(vwToPixels(52.5), y + 1.78 * w, w, 20, {
    isStatic: true,
    angle: Math.PI + Math.PI / 45,
    render: {
      fillStyle: "transparent",
    },
  });

  Composite.add(world, [rect_1, rect_2, rect_3]);
  Triangle(world, elem_leg_left - margin + 430, y + w + 155, -Math.PI + Math.PI / 8, 4, 2);
  Triangle(world, elem_leg_left - margin + 30, y + w + 55, -Math.PI + Math.PI / 8, 4, 2);
  Triangle(world, elem_leg_left - margin + 30, y + w + 55, -Math.PI + Math.PI / 8, 5, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 6, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 7, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 8, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 9, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 10, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 11, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 12, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 13, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 14, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 15, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 16, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 17, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 18, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 19, 2);
  Triangle(world, elem_leg_left - margin + 100, y + w + 55, Math.PI - Math.PI / 5, 20, 2);
};
