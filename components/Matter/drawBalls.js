import { Bodies, Composite, Body } from "matter-js";
import { color_circle } from "../util";
import { label_filter } from "../util";
export const drawBalls = (world, data) => {
  data.map((d) => {
    const elem = document.getElementsByClassName(`${d["รธน."]}_${d["ลำดับ"]}`);
    const wrapper = document.getElementById("canvas_past_1");
    const margin = wrapper.getBoundingClientRect().x - 12.5;

    const circle = Bodies.circle(elem[0].getBoundingClientRect().x - margin, elem[0].offsetTop + 12.5, 13, {
      render: {
        fillStyle: color_circle(d["ประเภท"]),
      },
    });

    const line = Bodies.rectangle(elem[0].getBoundingClientRect().x - margin, elem[0].offsetTop + 12.5, 24, 1, {
      render: {
        fillStyle: d["ประเภท"] != "การเมือง " ? "black" : "white",
      },
      angle: Math.PI - Math.PI / 4,
    });
    var compoundCircle = Body.create({
      id: "2540",
      parts: [circle, line],
      isStatic: false,
      friction: 0,
      frictionAir: 0.04,
      restitution: 0.09,
      collisionFilter: {
        group: label_filter(d["ลำดับกระบวนการ"]),
      },
    });
    Composite.add(world, [compoundCircle]);
  });
};
