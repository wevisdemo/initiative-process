import { Bodies, Composite } from "matter-js";
import { vhToPixels, vwToPixels } from "../../util";
export const drawRectStart = (world) => {
  const elem_leg = document.getElementById("leg_start_section_2_mobile");

  const y = elem_leg.offsetTop + elem_leg.getBoundingClientRect().height / 2;

  const line1 = Bodies.rectangle(vwToPixels(50), y - 16, vwToPixels(100), 2, {
    isStatic: true,
    angle: Math.PI,
    collisionFilter: {
      group: 10,
      mask: 0,
    },
    render: {
      fillStyle: "white",
    },
  });

  const line2 = Bodies.rectangle(vwToPixels(50), y, vwToPixels(100), 30, {
    isStatic: true,
    angle: Math.PI,
    collisionFilter: {
      group: 4,
      mask: 0,
    },
    render: {
      fillStyle: "transparent",
    },
  });

  const rect_left = Bodies.rectangle(vwToPixels(0) + vwToPixels(80) / 2, y + vhToPixels(20), vwToPixels(75), 2, {
    isStatic: true,

    angle: Math.PI / 4 - Math.PI / 6,
    render: {
      fillStyle: "white",
    },
  });
  const rect_left_sup = Bodies.rectangle(
    vwToPixels(0) + vwToPixels(80) / 2,
    y + vhToPixels(20) + 12,
    vwToPixels(75),
    20,
    {
      isStatic: true,

      angle: Math.PI / 4 - Math.PI / 6,
      render: {
        fillStyle: "transparent",
      },
    }
  );
  Composite.add(world, [line1, line2, rect_left, rect_left_sup]);
};
