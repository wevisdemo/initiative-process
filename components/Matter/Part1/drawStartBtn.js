import { Bodies, Composite } from "matter-js";
export const drawStartBtn = (world) => {
  const elem = document.getElementById(`start_btn`);
  const page_start = document.getElementById(`page_start`);
  const wrapper = document.getElementById("canvas_past_1");
  const margin = wrapper.getBoundingClientRect().x - 56;

  const start_btn = Bodies.circle(
    elem.getBoundingClientRect().x - margin,
    elem.offsetTop + page_start.getBoundingClientRect().height + 56,
    56,
    {
      isStatic: true,
      render: {
        // fillStyle: "transparent",
      },
    }
  );

  Composite.add(world, [start_btn]);
};
