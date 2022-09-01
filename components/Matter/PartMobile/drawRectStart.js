import { Bodies, Composite } from "matter-js";
import { vwToPixels } from "../../util";
import { device } from "../../util";
export const drawRectStart = (world) => {
  const elem_leg = document.getElementById("leg_start_mobile");
  const wrapper_section = document.getElementById("leg_section_1_wrapper_mobile");

  const ratio =
    device() === "tablet"
      ? elem_leg.getBoundingClientRect().height / 2 + 20
      : elem_leg.getBoundingClientRect().height - 20;
  const y = elem_leg.offsetTop + wrapper_section.offsetTop - ratio;

  const rect_left_m = Bodies.rectangle(vwToPixels(0) + vwToPixels(45) / 2, y, vwToPixels(49), 20, {
    isStatic: true,
    chamfer: 1,
    angle: Math.PI / 4 - Math.PI / 6,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_right_m = Bodies.rectangle(vwToPixels(100) - vwToPixels(45) / 2, y, vwToPixels(49), 20, {
    isStatic: true,
    chamfer: 1,
    angle: -Math.PI / 4 + Math.PI / 6,
    render: {
      fillStyle: "transparent",
    },
  });
  const rect_left = Bodies.rectangle(vwToPixels(0) + vwToPixels(45) / 2, y - 10, vwToPixels(49), 2, {
    isStatic: true,

    angle: Math.PI / 4 - Math.PI / 6,
    render: {
      fillStyle: "white",
    },
  });
  const rect_right = Bodies.rectangle(vwToPixels(100) - vwToPixels(45) / 2, y - 10, vwToPixels(49), 2, {
    isStatic: true,

    angle: -Math.PI / 4 + Math.PI / 6,
    render: {
      fillStyle: "white",
    },
  });
  Composite.add(world, [rect_left_m, rect_right_m, rect_left, rect_right]);
};
