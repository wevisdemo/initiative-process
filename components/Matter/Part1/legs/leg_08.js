import { Bodies, Composite } from "matter-js";
import { vhToPixels, vwToPixels } from "../../../util";
import { Triangle } from "../../filters/Triangle";

export const leg_08 = (world) => {
  const w = 250;
  const elem_leg = document.getElementById("leg_08");
  const elem_leg_left = elem_leg.getBoundingClientRect().left + w - 43;
  const y = elem_leg.offsetTop + vhToPixels(100) + elem_leg.getBoundingClientRect().height / 2;
  const wrapper = document.getElementById("canvas_past_1");
  const margin = wrapper.getBoundingClientRect().x;

  const rect_1 = Bodies.rectangle(vwToPixels(41), y + 47, w, 20, {
    isStatic: true,
    angle: Math.PI - Math.PI / 45,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_2 = Bodies.rectangle(vwToPixels(56), y - 5, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_3 = Bodies.rectangle(vwToPixels(74), y - 9, w, 20, {
    isStatic: true,
    angle: -(Math.PI / 2 + Math.PI / 3),
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_4 = Bodies.rectangle(vwToPixels(87.5), y - 5, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 + Math.PI / 3,
    render: {
      fillStyle: "transparent",
    },
  });

  Composite.add(world, [rect_1, rect_2, rect_3, rect_4]);

  Triangle(world, elem_leg_left - margin + w / 2 + 50, y - w / 2.8, -Math.PI + Math.PI / 5, 5, 2);
  Triangle(world, elem_leg_left - margin + w / 2 + 100, y - w / 3.0, Math.PI - Math.PI / 5, 4, 2);
};
