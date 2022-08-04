import { Bodies, Composite } from "matter-js";
import { vhToPixels, vwToPixels } from "../../../util";
export const leg_02 = (world) => {
  const elem_leg = document.getElementById("leg_02");
  const y = elem_leg.offsetTop + vhToPixels(100) + elem_leg.getBoundingClientRect().height / 2;

  const w = 180;
  const rect_1 = Bodies.rectangle(w / 3, y + 2, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 - Math.PI / 3,
  });
  const rect_2 = Bodies.rectangle(w, y - 10, w, 20, {
    isStatic: true,
    angle: -Math.PI / 2 + Math.PI / 3,
    render: {},
  });
  const rect_3 = Bodies.rectangle(w * 2 - w / 4, y - 12, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 - Math.PI / 3,
    render: {},
  });
  const rect_4 = Bodies.rectangle(w * 2 + w / 2, y - 8, w, 20, {
    isStatic: true,
    angle: -Math.PI / 2 + Math.PI / 3,
    render: {},
  });
  Composite.add(world, [rect_1, rect_2, rect_3, rect_4]);
};
