import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";
import { device } from "../../../util";
export const leg_03 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_03_mobile");
  const elem_leg_left = elem_leg.getBoundingClientRect().left + w - 43;
  const wrapper_section = document.getElementById("leg_section_1_wrapper_mobile");
  const ratio =
    device() === "tablet" ? elem_leg.getBoundingClientRect().height - 40 : elem_leg.getBoundingClientRect().height + 20;
  const w_mobile = elem_leg.getBoundingClientRect().width;
  const y = elem_leg.offsetTop + wrapper_section.offsetTop + ratio;

  const rect_1 = Bodies.rectangle(vwToPixels(68), y, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3.2,
    render: {
      fillStyle: "red",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(86), y, w, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
    render: {
      fillStyle: "red",
    },
  });
  const rect_3 = Bodies.rectangle(vwToPixels(93), y + 25, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3.2,
    render: {
      fillStyle: "red",
    },
  });

  Composite.add(world, [rect_1, rect_2, rect_3]);

  const tri_1_ratio = device() === "mobile" ? 2 * w_mobile - 75 : w_mobile / 2 - 25;
  const tri_2_ratio = device() === "mobile" ? 2 * w_mobile - 30 : w_mobile / 2 + 35;

  Triangle(world, elem_leg_left + tri_1_ratio, y - w / 2.2, -Math.PI + Math.PI / 5, 1, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 2, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 3, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 4, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 5, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 6, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 7, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 8, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 9, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 10, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 11, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 12, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 13, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 14, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 15, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 16, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 17, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 18, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 19, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 3.0, Math.PI - Math.PI / 5, 20, 2);
};
