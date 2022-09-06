import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";

export const leg_26 = (world) => {
  const w = 200;
  const elem_leg = document.getElementById("leg_26_mobile");

  const y = elem_leg.offsetTop + elem_leg.getBoundingClientRect().height + 23;

  const rect_1 = Bodies.rectangle(vwToPixels(1.5), y - 80, w, 30, {
    isStatic: true,
    angle: Math.PI / 2,
    render: {
      fillStyle: "red",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(8), y + 45, w, 20, {
    isStatic: true,
    angle: Math.PI / 5.25,
    render: {
      fillStyle: "red",
    },
  });

  Composite.add(world, [rect_1, rect_2]);
};
