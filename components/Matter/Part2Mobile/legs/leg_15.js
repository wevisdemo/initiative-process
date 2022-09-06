import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";

export const leg_15 = (world) => {
  const w = 220;
  const elem_leg = document.getElementById("leg_15_mobile");
  const elem_leg_left = elem_leg.offsetLeft;
  const y = elem_leg.offsetTop + elem_leg.getBoundingClientRect().height + 20;

  const margin = elem_leg.getBoundingClientRect().width;

  const rect_1 = Bodies.rectangle(vwToPixels(72.5), y - 3, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3.2,
    render: {
      fillStyle: "red",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(87), y - 11, w, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
    render: {
      fillStyle: "red",
    },
  });
  const rect_3 = Bodies.rectangle(vwToPixels(102), y - 15, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3,
    render: {
      fillStyle: "red",
    },
  });

  Composite.add(world, [rect_1, rect_2, rect_3]);

  Triangle(world, elem_leg_left + margin - 50, y - 75, -Math.PI + Math.PI / 8, 11, 2);

  Triangle(world, elem_leg_left + margin - 10, y - 75, Math.PI - Math.PI / 5, 12, 2);
  Triangle(world, elem_leg_left + margin - 10, y - 75, Math.PI - Math.PI / 5, 13, 2);
  Triangle(world, elem_leg_left + margin - 10, y - 75, Math.PI - Math.PI / 5, 14, 2);
  Triangle(world, elem_leg_left + margin - 10, y - 75, Math.PI - Math.PI / 5, 15, 2);
  Triangle(world, elem_leg_left + margin - 10, y - 75, Math.PI - Math.PI / 5, 16, 2);
  Triangle(world, elem_leg_left + margin - 10, y - 75, Math.PI - Math.PI / 5, 17, 2);
  Triangle(world, elem_leg_left + margin - 10, y - 75, Math.PI - Math.PI / 5, 18, 2);
  Triangle(world, elem_leg_left + margin - 10, y - 75, Math.PI - Math.PI / 5, 19, 2);
  Triangle(world, elem_leg_left + margin - 10, y - 75, Math.PI - Math.PI / 5, 20, 2);
};
