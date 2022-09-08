import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";

export const leg_12 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_12_mobile");
  const elem_leg_left = elem_leg.offsetLeft;
  const wrapper_section = document.getElementById("leg_section_1_wrapper_mobile");
  const ratio = elem_leg.getBoundingClientRect().height + 10;
  const y = elem_leg.offsetTop + wrapper_section.offsetTop + ratio;

  const rect_1 = Bodies.rectangle(vwToPixels(30), y + 2, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3.25,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(47), y - 6, w, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_3 = Bodies.rectangle(vwToPixels(64), y + 54, w, 20, {
    isStatic: true,
    angle: Math.PI + Math.PI / 45,
    render: {
      fillStyle: "transparent",
    },
  });

  Composite.add(world, [rect_1, rect_2, rect_3]);
  const tri_1_ratio = w - 60;
  const tri_2_ratio = w - 10;

  Triangle(world, elem_leg_left + tri_1_ratio, y - 80, -Math.PI + Math.PI / 8, 8, 2);
  Triangle(world, elem_leg_left + tri_1_ratio, y - 80, -Math.PI + Math.PI / 8, 9, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - 80, Math.PI - Math.PI / 5, 4, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - 80, Math.PI - Math.PI / 5, 10, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - 80, Math.PI - Math.PI / 5, 11, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - 80, Math.PI - Math.PI / 5, 12, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - 80, Math.PI - Math.PI / 5, 13, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - 80, Math.PI - Math.PI / 5, 14, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - 80, Math.PI - Math.PI / 5, 15, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - 80, Math.PI - Math.PI / 5, 16, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - 80, Math.PI - Math.PI / 5, 17, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - 80, Math.PI - Math.PI / 5, 18, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - 80, Math.PI - Math.PI / 5, 19, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - 80, Math.PI - Math.PI / 5, 20, 2);
};
