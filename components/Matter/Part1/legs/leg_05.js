import { Bodies, Composite } from "matter-js";
import { vhToPixels, vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";

export const leg_05 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_05");
  const elem_leg_left = elem_leg.getBoundingClientRect().left + w - 43;
  const y = elem_leg.offsetTop + vhToPixels(100) + elem_leg.getBoundingClientRect().height / 2 - 5;
  const wrapper = document.getElementById("canvas_past_1");
  const margin = wrapper.getBoundingClientRect().x;

  const rect_1 = Bodies.rectangle(vwToPixels(22.5), y - 15, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3.2,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(40), y - 14, w + 10, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_3 = Bodies.rectangle(vwToPixels(58), y - 9.5, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3,
    render: {
      fillStyle: "transparent",
    },
  });

  Composite.add(world, [rect_1, rect_2, rect_3]);

  Triangle(world, elem_leg_left - margin - 10, y - w / 1.5, -Math.PI + Math.PI / 7, 3, 3);

  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 4, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 5, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 6, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 7, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 8, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 9, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 10, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 11, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 12, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 13, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 14, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 15, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 16, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 17, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 18, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 19, 3);
  Triangle(world, elem_leg_left - margin + 20, y - w / 2, Math.PI - Math.PI / 5, 20, 3);
};
