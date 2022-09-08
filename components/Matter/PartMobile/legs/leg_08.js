import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";

export const leg_08 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_08_mobile");
  const elem_leg_left = elem_leg.offsetLeft;
  const wrapper_section = document.getElementById("leg_section_1_wrapper_mobile");
  const ratio = elem_leg.getBoundingClientRect().height + 20;
  const y = elem_leg.offsetTop + wrapper_section.offsetTop + ratio;

  const rect_1 = Bodies.rectangle(vwToPixels(38), y + 47, w, 20, {
    isStatic: true,
    angle: Math.PI - Math.PI / 45,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(53), y - 5, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_3 = Bodies.rectangle(vwToPixels(71), y - 9, w, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_4 = Bodies.rectangle(vwToPixels(87.5), y - 25, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3,
    render: {
      fillStyle: "transparent",
    },
  });

  Composite.add(world, [rect_1, rect_2, rect_3, rect_4]);

  const tri_1_ratio = 2 * w - 120;
  const tri_2_ratio = 2 * w - 60;

  Triangle(world, elem_leg_left + tri_1_ratio, y - w / 2.7, -Math.PI + Math.PI / 5, 5, 2);
  Triangle(world, elem_leg_left + tri_2_ratio, y - w / 2.7, Math.PI - Math.PI / 5, 4, 2);
};
