import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";
export const leg_20 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_20_mobile");
  const elem_leg_left = elem_leg.offsetLeft;
  const y = elem_leg.offsetTop + elem_leg.getBoundingClientRect().height + 20;

  const margin = elem_leg.getBoundingClientRect().width;

  const rect_left = Bodies.rectangle(vwToPixels(50), y, w, 20, {
    isStatic: true,
    angle: Math.PI - Math.PI / 5.2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_right = Bodies.rectangle(vwToPixels(68), y - 3, w, 20, {
    isStatic: true,
    angle: -Math.PI + Math.PI / 5.2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_center = Bodies.rectangle(vwToPixels(60), y + 20, 200, 35, {
    isStatic: true,
    angle: Math.PI / 2,
    chamfer: 1,
    render: {
      fillStyle: "transparent",
    },
  });
  Composite.add(world, [rect_left, rect_right, rect_center]);
  Triangle(world, elem_leg_left + margin + 10, y - 90, -Math.PI + Math.PI / 8, 15, 2);
  Triangle(world, elem_leg_left + margin + 10, y - 90, -Math.PI + Math.PI / 8, 16, 2);

  Triangle(world, elem_leg_left + margin + 60, y - 90, Math.PI - Math.PI / 5, 17, 2);
  Triangle(world, elem_leg_left + margin + 60, y - 90, Math.PI - Math.PI / 5, 18, 2);
  Triangle(world, elem_leg_left + margin + 60, y - 90, Math.PI - Math.PI / 5, 19, 2);
  Triangle(world, elem_leg_left + margin + 60, y - 90, Math.PI - Math.PI / 5, 20, 2);
};
