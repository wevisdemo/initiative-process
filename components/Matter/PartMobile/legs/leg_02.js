import { Bodies, Composite } from "matter-js";

import { Triangle } from "../../filters/Triangle";
export const leg_02 = (world) => {
  const elem_leg = document.getElementById("leg_02_mobile");
  const elem_leg_width = elem_leg.getBoundingClientRect().width;
  const wrapper_section = document.getElementById("leg_section_1_wrapper_mobile");
  const ratio = elem_leg.getBoundingClientRect().height + 20;
  const y = elem_leg.offsetTop + wrapper_section.offsetTop + ratio;

  const w = 220;
  const rect_1 = Bodies.rectangle(0, y - 25, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 - Math.PI / 3,
    render: {
      fillStyle: "red",
    },
  });
  const rect_2 = Bodies.rectangle(w / 2 + 70, y - 8, w, 20, {
    isStatic: true,
    angle: -Math.PI / 2 + Math.PI / 3,
    render: {
      fillStyle: "red",
    },
  });
  const rect_3 = Bodies.rectangle(w * 2 - w / 3 + 5, y, w, 20, {
    isStatic: true,
    angle: Math.PI / 2 - Math.PI / 3,
    render: {
      fillStyle: "red",
    },
  });
  const rect_4 = Bodies.rectangle(w * 2 + 55, y, w, 20, {
    isStatic: true,
    angle: -Math.PI / 2 + Math.PI / 3,
    render: {
      fillStyle: "red",
    },
  });
  Composite.add(world, [rect_1, rect_2, rect_3, rect_4]);

  const tri_1_ratio = 155;
  const tri_2_ratio = 85;

  Triangle(world, elem_leg_width / 2 + tri_1_ratio, y - w / 2.8, Math.PI - Math.PI / 5, 21, 2);
  Triangle(world, elem_leg_width / 2 + tri_2_ratio, y - w / 2.8, -Math.PI + Math.PI / 5, 22, 2);
};
