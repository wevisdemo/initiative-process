import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";

export const leg_04 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_04_mobile");
  const elem_leg_left = elem_leg.offsetLeft;
  const wrapper_section = document.getElementById("leg_section_1_wrapper_mobile");
  const ratio = elem_leg.getBoundingClientRect().height + 21;
  const y = elem_leg.offsetTop + wrapper_section.offsetTop + ratio;

  const w_mobile = elem_leg.getBoundingClientRect().width;
  const rect_1 = Bodies.rectangle(vwToPixels(45.5), y, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3.2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(64), y, w, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_3 = Bodies.rectangle(vwToPixels(75), y, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 2.8,
    render: {
      fillStyle: "transparent",
    },
  });

  Composite.add(world, [rect_1, rect_2, rect_3]);

  const tri_1_ratio = w_mobile - 60;
  const tri_2_ratio = w_mobile;

  Triangle(world, elem_leg_left + tri_1_ratio, y - w / 2, -Math.PI + Math.PI / 6, 2, 3);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 3, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 4, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 5, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 6, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 7, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 8, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 9, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 10, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 11, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 12, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 13, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 14, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 15, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 16, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 17, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 18, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 19, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.5, Math.PI - Math.PI / 5, 20, 2.5);
};
