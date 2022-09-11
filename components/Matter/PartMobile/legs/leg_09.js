import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";

export const leg_09 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_09_mobile");

  const wrapper_section = document.getElementById("leg_section_1_wrapper_mobile");
  const ratio = elem_leg.getBoundingClientRect().height + 40;
  const y = elem_leg.offsetTop + wrapper_section.offsetTop + ratio;

  const rect_1 = Bodies.rectangle(vwToPixels(-0.5), y - 60, w, 30, {
    isStatic: true,
    angle: Math.PI / 2,
    render: {
      fillStyle: "red",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(6.5), y + 100, w, 20, {
    isStatic: true,
    angle: Math.PI / 5.3,
    render: {
      fillStyle: "red",
    },
  });

  Composite.add(world, [rect_1, rect_2]);
};
