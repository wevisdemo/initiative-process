import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";

export const leg_11 = (world) => {
  const w = 500;
  const elem_leg = document.getElementById("leg_11_mobile");
  const wrapper_section = document.getElementById("leg_section_1_wrapper_mobile");
  const y = elem_leg.offsetTop + wrapper_section.offsetTop + elem_leg.getBoundingClientRect().height / 2;

  const rect_1 = Bodies.rectangle(vwToPixels(16), y + 60, w, 20, {
    isStatic: true,
    angle: Math.PI / 8,
    chamfer: 2,
    render: {
      fillStyle: "black",
      strokeStyle: "white",
      lineWidth: 3,
    },
  });

  Composite.add(world, [rect_1]);
};
