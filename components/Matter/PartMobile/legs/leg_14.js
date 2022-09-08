import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";

export const leg_14 = (world) => {
  const w = 230;
  const elem_leg = document.getElementById("leg_14_mobile");

  const wrapper_section = document.getElementById("leg_section_1_wrapper_mobile");
  const ratio = elem_leg.getBoundingClientRect().height + 30;
  const y = elem_leg.offsetTop + wrapper_section.offsetTop + ratio;

  const rect_1 = Bodies.rectangle(vwToPixels(8.5), y - 55, w, 30, {
    isStatic: true,
    angle: Math.PI / 2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(16), y + 100, w, 20, {
    isStatic: true,
    angle: Math.PI / 5.3,
    render: {
      fillStyle: "transparent",
    },
  });

  Composite.add(world, [rect_1, rect_2]);
};
