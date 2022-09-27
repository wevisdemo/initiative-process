import { Bodies, Composite } from "matter-js";
import { vhToPixels, vwToPixels } from "../../../util";

export const leg_14 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_14");

  const y = elem_leg.offsetTop + vhToPixels(100) + elem_leg.getBoundingClientRect().height / 2 + 45;

  const rect_1 = Bodies.rectangle(vwToPixels(7), y - 90, w, 30, {
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
