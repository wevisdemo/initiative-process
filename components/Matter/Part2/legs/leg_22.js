import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";
export const leg_22 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_22");
  const elem_leg_left = elem_leg.getBoundingClientRect().left - 105;
  const y = elem_leg.offsetTop + elem_leg.getBoundingClientRect().height / 2 - 15;
  const wrapper = document.getElementById("canvas_past_2");
  const margin = wrapper.getBoundingClientRect().x;

  const rect_left = Bodies.rectangle(vwToPixels(25), y + 5, w, 20, {
    isStatic: true,
    angle: Math.PI - Math.PI / 5.2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_right = Bodies.rectangle(vwToPixels(43), y - 3, w, 20, {
    isStatic: true,
    angle: -Math.PI + Math.PI / 5.2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_center = Bodies.rectangle(vwToPixels(35), y + 20, 200, 35, {
    isStatic: true,
    angle: Math.PI / 2,
    chamfer: 1,
    render: {
      fillStyle: "transparent",
    },
  });
  Composite.add(world, [rect_left, rect_right, rect_center]);
  Triangle(world, elem_leg_left - margin + 300, y - 90, -Math.PI + Math.PI / 8, 17, 2);

  Triangle(world, elem_leg_left - margin + 350, y - 90, Math.PI - Math.PI / 5, 18, 2);
  Triangle(world, elem_leg_left - margin + 350, y - 90, Math.PI - Math.PI / 5, 19, 2);
  Triangle(world, elem_leg_left - margin + 350, y - 90, Math.PI - Math.PI / 5, 20, 2);
};
