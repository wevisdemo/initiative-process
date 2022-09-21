import { Bodies, Composite } from "matter-js";
import { vhToPixels, vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";
export const leg_01 = (world) => {
  const elem_leg = document.getElementById("leg_01");
  const y = elem_leg.offsetTop + vhToPixels(100) + elem_leg.getBoundingClientRect().height / 2;

  const w = 250;
  const rect_left = Bodies.rectangle(vwToPixels(50) - w / 2, y, w, 20, {
    isStatic: true,
    angle: Math.PI - Math.PI / 5.2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_right = Bodies.rectangle(vwToPixels(50) + w / 2, y, w, 20, {
    isStatic: true,
    angle: -Math.PI + Math.PI / 5.2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_center = Bodies.rectangle(vwToPixels(100) / 2, y + 10, 200, 45, {
    isStatic: true,
    angle: Math.PI / 2,
    chamfer: 1,
    render: {
      fillStyle: "transparent",
    },
  });
  Composite.add(world, [rect_left, rect_right, rect_center]);

  Triangle(world, vwToPixels(100) / 2 + 20, y - w / 2.5, Math.PI - Math.PI / 5, 21, 2.5);
  Triangle(world, vwToPixels(100) / 2 + 20, y - w / 2.5, Math.PI - Math.PI / 5, 22, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 1, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 2, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 3, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 4, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 5, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 6, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 6, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 7, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 8, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 9, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 10, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 11, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 12, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 13, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 14, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 15, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 16, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 17, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 18, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 19, 2.5);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 5, 20, 2.5);
};
