import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";

export const leg_06 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_06_mobile");

  const wrapper_section = document.getElementById("leg_section_1_wrapper_mobile");
  const ratio = elem_leg.getBoundingClientRect().height - w + 75;
  const y = elem_leg.offsetTop + wrapper_section.offsetTop - ratio;

  const rect_1 = Bodies.rectangle(vwToPixels(6), y - 2 * w + 80, w, 20, {
    isStatic: true,
    angle: Math.PI / 2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(13), y - (2 * w) / 2 - 20, w, 20, {
    isStatic: true,
    angle: Math.PI / 5.3,
    render: {
      fillStyle: "transparent",
    },
  });

  Composite.add(world, [rect_1, rect_2]);
};
