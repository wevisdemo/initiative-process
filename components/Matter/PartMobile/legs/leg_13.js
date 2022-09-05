import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";

export const leg_13 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_13_mobile");
  const elem_leg_left = elem_leg.offsetLeft;
  const wrapper_section = document.getElementById("leg_section_1_wrapper_mobile");
  const ratio = elem_leg.getBoundingClientRect().height + 20;
  const y = elem_leg.offsetTop + wrapper_section.offsetTop + ratio;

  const rect_1 = Bodies.rectangle(vwToPixels(50), y + 47, w, 20, {
    isStatic: true,
    angle: Math.PI - Math.PI / 45,
    render: {
      fillStyle: "red",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(67.5), y - 10, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3,
    render: {
      fillStyle: "red",
    },
  });
  const rect_3 = Bodies.rectangle(vwToPixels(86), y - 13, w, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
    render: {
      fillStyle: "red",
    },
  });
  const rect_4 = Bodies.rectangle(vwToPixels(100.5), y - 10, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3,
    render: {
      fillStyle: "red",
    },
  });

  Composite.add(world, [rect_1, rect_2, rect_3, rect_4]);
  const tri_1_ratio = 2 * w - 80;

  Triangle(world, elem_leg_left + tri_1_ratio, y - w + 50, -Math.PI + Math.PI / 8, 9, 2.5);
};
