import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";

export const leg_07 = (world) => {
  const w = 230;
  const elem_leg = document.getElementById("leg_07_mobile");
  const wrapper_section = document.getElementById("leg_section_1_wrapper_mobile");
  const ratio = elem_leg.getBoundingClientRect().height + 20;
  const y = elem_leg.offsetTop + wrapper_section.offsetTop + ratio;
  const elem_leg_left = elem_leg.offsetLeft;

  const rect_1 = Bodies.rectangle(vwToPixels(17), y + 1.58 * w, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3.2,
    render: {
      fillStyle: "red",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(34), y + 1.55 * w, w, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
    render: {
      fillStyle: "red",
    },
  });
  const rect_3 = Bodies.rectangle(vwToPixels(50.5), y + 1.78 * w, w, 20, {
    isStatic: true,
    angle: Math.PI + Math.PI / 45,
    render: {
      fillStyle: "red",
    },
  });

  Composite.add(world, [rect_1, rect_2, rect_3]);

  const tri_1_ratio = w + 10;
  const tri_2_ratio = w + 60;

  Triangle(world, elem_leg_left + tri_1_ratio, y + w + 55, -Math.PI + Math.PI / 8, 4, 2);
  Triangle(world, elem_leg_left + tri_1_ratio, y + w + 55, -Math.PI + Math.PI / 8, 5, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 6, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 7, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 8, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 9, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 10, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 11, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 12, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 13, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 14, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 15, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 16, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 17, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 18, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 19, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y + w + 55, Math.PI - Math.PI / 5, 20, 2);
};
