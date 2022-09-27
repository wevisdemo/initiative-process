import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";

export const leg_26 = (world) => {
  const w = 200;
  const elem_leg = document.getElementById("leg_26_mobile");

  const y = elem_leg.offsetTop + elem_leg.getBoundingClientRect().height - 43;

  const rect_2 = Bodies.rectangle(vwToPixels(3.5), y + 190, w, 20, {
    isStatic: true,
    angle: Math.PI / 5.25,
    render: {
      fillStyle: "transparent",
    },
  });

  Composite.add(world, [rect_2]);
};
