import { Bodies, Composite, Body } from "matter-js";
import { color_circle } from "../util";
export const drawBalls = (world, data) => {
  data.map((d) => {
    const elem = document.getElementsByClassName(`${d["รธน."]}_${d["ลำดับ"]}`);

    const circle = Bodies.circle(elem[0].getBoundingClientRect().x + 12.5, elem[0].offsetTop + 12.5, 13, {
      render: {
        fillStyle: color_circle(d["ประเภท"]),
      },
    });

    const line = Bodies.rectangle(elem[0].getBoundingClientRect().x + 12.5, elem[0].offsetTop + 12.5, 24, 1, {
      render: {
        fillStyle: d["ประเภท"] != "การเมือง " ? "black" : "white",
      },
      angle: Math.PI - Math.PI / 4,
    });
    var compoundCircle = Body.create({
      id: "2540",
      parts: [circle, line],
      isStatic: false,
    });
    Composite.add(world, [compoundCircle]);
  });
};
