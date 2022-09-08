import { Bodies, Composite, Body } from "matter-js";
import { color_circle } from "../../util";
import { label_filter } from "../../util";
import { device } from "../../util";
export const drawBalls2060 = (world, data) => {
  data.map((d) => {
    const elem = document.getElementsByClassName(`${d["รธน."]}_${d["ลำดับ"]}_mobile`);
    const wrapper = document.getElementById("canvas_mobile");
    const ratio = device() === "tablet" ? 350 : 700;
    const margin = wrapper.getBoundingClientRect().x + ratio;
    const x = elem[0].getBoundingClientRect().x;
    const circle = Bodies.circle(x + margin, elem[0].offsetTop + 12.5, 13, {
      render: {
        fillStyle: color_circle(d["ประเภท"]),
      },
    });

    const line1 = Bodies.rectangle(x + margin, elem[0].offsetTop + 12.5, 24, 1, {
      render: {
        fillStyle: d["ประเภท"] != "การเมือง" ? "black" : "white",
      },
      angle: Math.PI - Math.PI / 4,
    });
    const line2 = Bodies.rectangle(x + margin, elem[0].offsetTop + 12.5, 24, 1, {
      render: {
        fillStyle: d["ประเภท"] != "การเมือง" ? "black" : "white",
      },
      angle: -Math.PI + Math.PI / 4,
    });
    const line3 = Bodies.rectangle(x + margin, elem[0].offsetTop + 12.5, 24, 1, {
      render: {
        fillStyle: d["ประเภท"] != "การเมือง" ? "black" : "white",
      },
      angle: Math.PI,
    });
    const line4 = Bodies.rectangle(x + margin, elem[0].offsetTop + 12.5, 24, 1, {
      render: {
        fillStyle: d["ประเภท"] != "การเมือง" ? "black" : "white",
      },
      angle: Math.PI / 2,
    });
    var compoundCircle = Body.create({
      id: "2550",
      parts: [circle, line1, line2, line3, line4],
      isStatic: false,
      friction: 0,
      frictionAir: 0.06,
      restitution: 0.08,
      density: 0.1,
      collisionFilter: {
        group: label_filter(d["ลำดับกระบวนการ"]),
      },
    });

    Composite.add(world, [compoundCircle]);
  });
};
