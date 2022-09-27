import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";

export const leg_16 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_16_mobile");

  const y = elem_leg.offsetTop + elem_leg.getBoundingClientRect().height + 15;

  const rect_1 = Bodies.rectangle(vwToPixels(58.5), y - 60, w, 30, {
    isStatic: true,
    angle: Math.PI / 2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(66), y + 100, w, 20, {
    isStatic: true,
    angle: Math.PI / 5.3,
    render: {
      fillStyle: "transparent",
    },
  });

  Composite.add(world, [rect_1, rect_2]);
};
