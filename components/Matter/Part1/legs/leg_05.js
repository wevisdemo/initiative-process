import { Bodies, Composite } from "matter-js";
import { vhToPixels, vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";

export const leg_05 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_05");
  const elem_leg_left = elem_leg.getBoundingClientRect().left + w - 43;
  const y = elem_leg.offsetTop + vhToPixels(100) + elem_leg.getBoundingClientRect().height / 2;
  const wrapper = document.getElementById("canvas_past_1");
  const margin = wrapper.getBoundingClientRect().x;

  const rect_1 = Bodies.rectangle(vwToPixels(22), y - 5, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3.2,
    // render: {
    //   fillStyle: "transparent",
    // },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(40), y - 14, w + 10, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
    // render: {
    //   fillStyle: "transparent",
    // },
  });
  const rect_3 = Bodies.rectangle(vwToPixels(58), y - 9.5, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3,
    // render: {
    //   fillStyle: "transparent",
    // },
  });

  Composite.add(world, [rect_1, rect_2, rect_3]);

  Triangle(world, elem_leg_left - margin - 10, y - w / 1.5, -Math.PI + Math.PI / 10, 3, 3);

  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 4, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 5, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 6, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 7, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 8, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 9, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 10, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 11, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 12, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 13, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 14, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 15, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 16, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 17, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 18, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 19, 2.5);
  Triangle(world, elem_leg_left - margin + 20, y - w / 3, Math.PI - Math.PI / 5, 20, 2.5);
};
