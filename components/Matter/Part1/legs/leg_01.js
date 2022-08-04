import { Bodies, Composite } from "matter-js";
import { vhToPixels, vwToPixels } from "../../../util";
import { Triangle } from "../filters/Triangle";
export const leg_01 = (world) => {
  const elem_leg = document.getElementById("leg_01");
  const y = elem_leg.offsetTop + vhToPixels(100) + elem_leg.getBoundingClientRect().height / 2;

  const w = 250;
  const rect_left = Bodies.rectangle(vwToPixels(50) - w / 2, y, w, 20, {
    isStatic: true,
    angle: Math.PI - Math.PI / 5.2,
    render: {
      // fillStyle: "white",
    },
  });
  const rect_right = Bodies.rectangle(vwToPixels(50) + w / 2, y, w, 20, {
    isStatic: true,
    angle: -Math.PI + Math.PI / 5.2,
    render: {
      // fillStyle: "white",
    },
  });
  const rect_center = Bodies.rectangle(vwToPixels(100) / 2, y + 10, 200, 45, {
    isStatic: true,
    angle: Math.PI / 2,
    chamfer: 1,
    render: {
      // fillStyle: "white",
    },
  });
  Composite.add(world, [rect_left, rect_right, rect_center]);

  Triangle(world, vwToPixels(100) / 2, y - w / 2.5, Math.PI - Math.PI / 5, 21, 2);
  Triangle(world, vwToPixels(100) / 2, y - w / 2.5, Math.PI - Math.PI / 5, 22, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 1, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 2, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 3, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 4, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 5, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 6, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 6, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 7, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 8, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 9, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 10, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 11, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 12, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 13, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 14, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 15, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 16, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 17, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 18, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 19, 2);
  Triangle(world, vwToPixels(100) / 2 - 20, y - w / 2.5, -Math.PI + Math.PI / 4, 20, 2);
};
