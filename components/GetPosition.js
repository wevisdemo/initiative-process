import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const GetPosition = (setStep_1, setStep_2, setStep_3, firstStep_3, setFirstStep_3, drawBalls, setDrawBalls) => {
  const getElem = (id) => {
    return document.getElementById(id);
  };

  const getClasslist = (id) => {
    return document.querySelectorAll(`.${id}`);
  };

  const get_position = (elem) => {
    if (elem) {
      return getElem(elem).getBoundingClientRect();
    }
  };
  // useScrollPosition(({ prevPos, currPos }) => {
  // const expand_step_0 = get_position("expand_step_0");
  // const expand_step_1 = get_position("expand_step_1");
  // const expand_step_3 = get_position("expand_step_3");
  // const section_2 = get_position("click_start_draw_section_2");
  // const section_2_btn = getElem("click_start_draw_section_2");
  // const detail_step_1 = get_position("detail_step_1");
  // const detail_step_2 = get_position("detail_step_2");
  // const detail_step_3 = get_position("detail_step_3");
  // const detail_step_4 = get_position("detail_step_4");
  // const detail_step_5 = get_position("detail_step_5");
  // const detail_step_6 = get_position("detail_step_6");
  // const detail_step_7 = get_position("detail_step_7");
  // const detail_step_8 = get_position("detail_step_8");
  // const detail_step_9 = get_position("detail_step_9");
  // const detail_step_10 = get_position("detail_step_10");
  // const detail_step_11 = get_position("detail_step_11");
  // const detail_step_12 = get_position("detail_step_12");
  // const detail_step_13 = get_position("detail_step_13");
  // const detail_step_14 = get_position("detail_step_14");
  // if (expand_step_0.y > expand_step_0.height / 2) {
  //   getElem("step_0").style.display = "flex";
  //   getElem("step_1").style.display = "none";
  // }
  // if (expand_step_0.y < expand_step_0.height / 2) {
  //   getElem("step_0").style.display = "none";
  //   getElem("step_1").style.display = "flex";
  // }
  // if (expand_step_1.y < expand_step_1.height / 2) {
  //   getElem("step_1").style.display = "none";
  //   getElem("step_2").style.display = "block";
  // }
  // if (expand_step_1.y > expand_step_1.height / 2) {
  //   getElem("step_2").style.display = "none";
  // }
  // if (expand_step_3.y < expand_step_3.height && !firstStep_3) {
  //   setStep_1(false);
  //   setStep_2(false);
  //   setStep_3(true);
  //   setFirstStep_3(true);
  // }
  // if (section_2.y < section_2.height && !drawBalls) {
  //   section_2_btn.click();
  //   setDrawBalls(true);
  // }
  // if (detail_step_1.y < detail_step_1.height / 2) {
  //   getElem("hilight_1").style.opacity = 1;
  //   getElem("hilight_2").style.opacity = 1;
  //   getElem("hilight_3").style.opacity = 1;
  // }
  // if (detail_step_2.y < detail_step_2.height / 2) {
  //   getElem("hilight_2").style.opacity = 0.25;
  //   getElem("hilight_3").style.opacity = 0.25;
  // }
  // if (detail_step_3.y < detail_step_3.height / 2) {
  //   getElem("hilight_1").style.opacity = 1;
  //   getElem("hilight_2").style.opacity = 0.25;
  //   getElem("hilight_3").style.opacity = 0.25;
  // }
  // if (detail_step_4.y < detail_step_4.height / 2) {
  //   getElem("hilight_1").style.opacity = 0.25;
  //   getElem("hilight_2").style.opacity = 1;
  //   getElem("hilight_3").style.opacity = 0.25;
  // }
  // if (detail_step_5.y < detail_step_5.height / 2) {
  //   getElem("hilight_1").style.opacity = 0.25;
  //   getElem("hilight_2").style.opacity = 0.25;
  //   getElem("hilight_3").style.opacity = 1;
  // }
  // if (detail_step_6.y < detail_step_6.height / 2) {
  //   getElem("DiagramPart2").style.opacity = 1;
  //   getElem("DiagramPart2Full").style.opacity = 0;
  // }
  // if (detail_step_7.y < detail_step_7.height / 2) {
  //   getElem("DiagramPart2").style.opacity = 0;
  //   getElem("DiagramPart2Full").style.opacity = 1;
  //   getClasslist("diagram_part_2").forEach((el) => (el.style.opacity = 0));
  //   getClasslist("part_2_rank").forEach((el) => (el.style.opacity = 1));
  // }
  // if (detail_step_8.y < detail_step_8.height / 2) {
  //   getClasslist("diagram_part_2").forEach((el) => (el.style.opacity = 0));
  //   getClasslist("part_2_circle").forEach((el) => (el.style.opacity = 1));
  // }
  // if (detail_step_9.y < detail_step_9.height / 2) {
  //   getElem("DiagramPart2Full").style.opacity = 1;
  //   getElem("DiagramCompare").style.opacity = 0;
  //   getClasslist("diagram_part_2").forEach((el) => (el.style.opacity = 0));
  //   getClasslist("part_2_compare").forEach((el) => (el.style.opacity = 1));
  // }
  // if (detail_step_10.y < detail_step_10.height / 2) {
  //   getElem("DiagramPart2Full").style.opacity = 0;
  //   getElem("DiagramCompare").style.opacity = 1;
  //   getClasslist("circle_compare").forEach((el) => (el.style.opacity = 0.25));
  //   getElem("circle_compare1").style.opacity = 1;
  // }
  // if (detail_step_11.y < detail_step_11.height / 2) {
  //   getClasslist("circle_compare").forEach((el) => (el.style.opacity = 0.25));
  //   getElem("circle_compare3").style.opacity = 1;
  // }
  // if (detail_step_12.y < detail_step_12.height / 2) {
  //   getClasslist("circle_compare").forEach((el) => (el.style.opacity = 0.25));
  //   getElem("circle_compare4").style.opacity = 1;
  //   getElem("circle_compare5").style.opacity = 1;
  // }
  // if (detail_step_13.y < detail_step_13.height / 2) {
  //   getClasslist("circle_compare").forEach((el) => (el.style.opacity = 0.25));
  //   getElem("circle_compare6").style.opacity = 1;
  // }
  // if (detail_step_14.y < detail_step_14.height / 2) {
  //   getClasslist("circle_compare").forEach((el) => (el.style.opacity = 0.25));
  //   getElem("circle_compare7").style.opacity = 1;
  // }
  // });
};
export default GetPosition;
