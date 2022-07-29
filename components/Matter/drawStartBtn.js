import { Bodies, Composite, Body } from "matter-js";
export const drawStartBtn = (world) => {
  const elem = document.getElementById(`start_btn`);
  const page_start = document.getElementById(`page_start`);
  const start_btn = Bodies.circle(
    elem.getBoundingClientRect().x + 56,
    elem.offsetTop + page_start.getBoundingClientRect().height + 120,
    56,
    {
      isStatic: true,
    }
  );
  Composite.add(world, [start_btn]);
};
