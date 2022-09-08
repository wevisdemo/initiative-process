import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";

export const leg_05 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_05_mobile");
  const elem_leg_left = elem_leg.offsetLeft;
  const wrapper_section = document.getElementById("leg_section_1_wrapper_mobile");
  const ratio = elem_leg.getBoundingClientRect().height + 23;
  const y = elem_leg.offsetTop + wrapper_section.offsetTop + ratio;

  const rect_1 = Bodies.rectangle(vwToPixels(25), y - 5, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3.2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(43), y - 14, w + 10, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_3 = Bodies.rectangle(vwToPixels(62), y - 9.5, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3,
    render: {
      fillStyle: "transparent",
    },
  });

  Composite.add(world, [rect_1, rect_2, rect_3]);
  const tri_1_ratio = w / 2 + 40;
  const tri_2_ratio = w / 2 + 100;
  const y_position_1 = 1.7;
  const y_position_2 = 3;

  Triangle(world, elem_leg_left + tri_1_ratio, y - w / y_position_1, -Math.PI + Math.PI / 8, 3, 3);

  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 4, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 5, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 6, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 7, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 8, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 9, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 10, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 11, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 12, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 13, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 14, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 15, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 16, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 17, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 18, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 19, 2.5);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / y_position_2, Math.PI - Math.PI / 5, 20, 2.5);
};
