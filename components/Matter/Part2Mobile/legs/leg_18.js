import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";

export const leg_18 = (world) => {
  const w = 210;
  const elem_leg = document.getElementById("leg_18_mobile");
  const elem_leg_left = elem_leg.offsetLeft;
  const y = elem_leg.offsetTop + elem_leg.getBoundingClientRect().height + 20;
  const margin = elem_leg.getBoundingClientRect().width;

  const rect_1 = Bodies.rectangle(vwToPixels(51.5), y, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3.2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(65.5), y - 13, w, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_3 = Bodies.rectangle(vwToPixels(80.5), y - 15, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3,
    render: {
      fillStyle: "transparent",
    },
  });

  Composite.add(world, [rect_1, rect_2, rect_3]);

  Triangle(world, elem_leg_left + margin - 70, y - 80, -Math.PI + Math.PI / 8, 14, 2);

  Triangle(world, elem_leg_left + margin - 5, y - 80, Math.PI - Math.PI / 5, 15, 2);
  Triangle(world, elem_leg_left + margin - 5, y - 80, Math.PI - Math.PI / 5, 16, 2);
  Triangle(world, elem_leg_left + margin - 5, y - 80, Math.PI - Math.PI / 5, 17, 2);
  Triangle(world, elem_leg_left + margin - 5, y - 80, Math.PI - Math.PI / 5, 18, 2);
  Triangle(world, elem_leg_left + margin - 5, y - 80, Math.PI - Math.PI / 5, 19, 2);
  Triangle(world, elem_leg_left + margin - 5, y - 80, Math.PI - Math.PI / 5, 20, 2);
};
