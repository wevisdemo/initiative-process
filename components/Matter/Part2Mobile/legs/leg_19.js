import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";

export const leg_19 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_19_mobile");

  const y = elem_leg.offsetTop + elem_leg.getBoundingClientRect().height + 45;

  const rect_1 = Bodies.rectangle(vwToPixels(36.5), y - 60, w, 30, {
    isStatic: true,
    angle: Math.PI / 2,
    render: {
      fillStyle: "red",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(44), y + 95, w, 20, {
    isStatic: true,
    angle: Math.PI / 5.3,
    render: {
      fillStyle: "red",
    },
  });

  Composite.add(world, [rect_1, rect_2]);
};
