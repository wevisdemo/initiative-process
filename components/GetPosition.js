import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { device } from "../components/util";

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
  useScrollPosition(({ prevPos, currPos }) => {
    //////////////////////////////////////////////////
    const expand_step_0 = get_position("expand_step_0");
    const expand_step_1 = get_position("expand_step_1");
    const expand_step_3 = get_position("expand_step_3");
    const section_2 = get_position("click_start_draw_section_2");
    const section_2_btn = getElem("click_start_draw_section_2");
    const section_2_mobile = get_position("click_start_draw_section_2_mobile");
    const section_2_btn_mobile = getElem("click_start_draw_section_2_mobile");
    const detail_step_1 = get_position("detail_step_1");
    const detail_step_2 = get_position("detail_step_2");
    const detail_step_3 = get_position("detail_step_3");
    const detail_step_4 = get_position("detail_step_4");
    const detail_step_5 = get_position("detail_step_5");
    const detail_step_6 = get_position("detail_step_6");
    const detail_step_7 = get_position("detail_step_7");
    const detail_step_8 = get_position("detail_step_8");
    const detail_step_9 = get_position("detail_step_9");
    const detail_step_10 = get_position("detail_step_10");
    const detail_step_11 = get_position("detail_step_11");
    const detail_step_12 = get_position("detail_step_12");
    const detail_step_13 = get_position("detail_step_13");
    const detail_step_14 = get_position("detail_step_14");
    if (expand_step_0.y > expand_step_0.height / 2 && device() === "labtop") {
      getElem("step_0").style.display = "flex";
      getElem("step_1").style.display = "none";
    }
    if (expand_step_0.y < expand_step_0.height / 2 && device() === "labtop") {
      getElem("step_0").style.display = "none";
      getElem("step_1").style.display = "flex";
    }
    if (expand_step_1.y < expand_step_1.height / 2 && device() === "labtop") {
      getElem("step_1").style.display = "none";
      getElem("step_2").style.display = "block";
    }
    if (expand_step_1.y > expand_step_1.height / 2 && device() === "labtop") {
      getElem("step_2").style.display = "none";
    }
    if (expand_step_3.y < expand_step_3.height && !firstStep_3) {
      setStep_1(false);
      setStep_2(false);
      setStep_3(true);
      setFirstStep_3(true);
    }
    if (section_2.y < section_2.height && !drawBalls) {
      section_2_btn.click();
      setDrawBalls(true);
    }
    if (section_2_mobile.y < section_2_mobile.height && !drawBalls) {
      section_2_btn_mobile.click();
      setDrawBalls(true);
    }
    if (detail_step_1.y < detail_step_1.height / 2) {
      getElem("hilight_1").style.opacity = 1;
      getElem("hilight_2").style.opacity = 1;
      getElem("hilight_3").style.opacity = 1;
    }
    if (detail_step_2.y < detail_step_2.height / 2) {
      getElem("hilight_2").style.opacity = 0.25;
      getElem("hilight_3").style.opacity = 0.25;
    }
    if (detail_step_3.y < detail_step_3.height / 2) {
      getElem("hilight_1").style.opacity = 1;
      getElem("hilight_2").style.opacity = 0.25;
      getElem("hilight_3").style.opacity = 0.25;
    }
    if (detail_step_4.y < detail_step_4.height / 2) {
      getElem("hilight_1").style.opacity = 0.25;
      getElem("hilight_2").style.opacity = 1;
      getElem("hilight_3").style.opacity = 0.25;
    }
    if (detail_step_5.y < detail_step_5.height / 2) {
      getElem("hilight_1").style.opacity = 0.25;
      getElem("hilight_2").style.opacity = 0.25;
      getElem("hilight_3").style.opacity = 1;
    }
    if (detail_step_6.y < detail_step_6.height / 2) {
      getElem("DiagramPart2").style.opacity = 1;
      getElem("DiagramPart2Full").style.opacity = 0;
    }
    if (detail_step_7.y < detail_step_7.height / 2) {
      getElem("DiagramPart2").style.opacity = 0;
      getElem("DiagramPart2Full").style.opacity = 1;
      getClasslist("diagram_part_2").forEach((el) => (el.style.opacity = 0));
      getClasslist("part_2_rank").forEach((el) => (el.style.opacity = 1));
    }
    if (detail_step_8.y < detail_step_8.height / 2) {
      getClasslist("diagram_part_2").forEach((el) => (el.style.opacity = 0));
      getClasslist("part_2_circle").forEach((el) => (el.style.opacity = 1));
    }
    if (detail_step_9.y < detail_step_9.height / 2) {
      getElem("DiagramPart2Full").style.opacity = 1;
      getElem("DiagramCompare").style.opacity = 0;
      getClasslist("diagram_part_2").forEach((el) => (el.style.opacity = 0));
      getClasslist("part_2_compare").forEach((el) => (el.style.opacity = 1));
    }
    if (detail_step_10.y < detail_step_10.height / 2) {
      getElem("DiagramPart2Full").style.opacity = 0;
      getElem("DiagramCompare").style.opacity = 1;
      getClasslist("circle_compare").forEach((el) => (el.style.opacity = 0.25));
      getElem("circle_compare1").style.opacity = 1;
    }
    if (detail_step_11.y < detail_step_11.height / 2) {
      getClasslist("circle_compare").forEach((el) => (el.style.opacity = 0.25));
      getElem("circle_compare3").style.opacity = 1;
    }
    if (detail_step_12.y < detail_step_12.height / 2) {
      getClasslist("circle_compare").forEach((el) => (el.style.opacity = 0.25));
      getElem("circle_compare4").style.opacity = 1;
      getElem("circle_compare5").style.opacity = 1;
    }
    if (detail_step_13.y < detail_step_13.height / 2) {
      getClasslist("circle_compare").forEach((el) => (el.style.opacity = 0.25));
      getElem("circle_compare6").style.opacity = 1;
    }
    if (detail_step_14.y < detail_step_14.height / 2) {
      getClasslist("circle_compare").forEach((el) => (el.style.opacity = 0.25));
      getElem("circle_compare7").style.opacity = 1;
    }
    //////////////////////////////////////////////////

    //hint

    const hint_leg_00 = getClasslist("hint_leg_00")[0];
    const hint_leg_00_mobile = getClasslist("hint_leg_00_mobile")[0];
    const hint_leg_ab = getClasslist("hint_leg_ab")[0];
    const hint_leg_ab_mobile = getClasslist("hint_leg_ab_mobile")[0];
    const hint_leg_01 = getClasslist("hint_leg_01")[0];
    const hint_leg_01_mobile = getClasslist("hint_leg_01_mobile")[0];
    const hint_leg_02 = getClasslist("hint_leg_02")[0];
    const hint_leg_02_mobile = getClasslist("hint_leg_02_mobile")[0];
    const hint_leg_03 = getClasslist("hint_leg_03")[0];
    const hint_leg_03_mobile = getClasslist("hint_leg_03_mobile")[0];
    const hint_leg_04 = getClasslist("hint_leg_04")[0];
    const hint_leg_04_mobile = getClasslist("hint_leg_04_mobile")[0];
    const hint_leg_05 = getClasslist("hint_leg_05")[0];
    const hint_leg_05_mobile = getClasslist("hint_leg_05_mobile")[0];
    const hint_leg_06 = getClasslist("hint_leg_06")[0];
    const hint_leg_06_mobile = getClasslist("hint_leg_06_mobile")[0];
    const hint_leg_07 = getClasslist("hint_leg_07")[0];
    const hint_leg_07_mobile = getClasslist("hint_leg_07_mobile")[0];
    const hint_leg_08 = getClasslist("hint_leg_08")[0];
    const hint_leg_08_mobile = getClasslist("hint_leg_08_mobile")[0];
    const hint_leg_09 = getClasslist("hint_leg_09")[0];
    const hint_leg_09_mobile = getClasslist("hint_leg_09_mobile")[0];
    const hint_leg_10 = getClasslist("hint_leg_10")[0];
    const hint_leg_10_mobile = getClasslist("hint_leg_10_mobile")[0];
    const hint_leg_11 = getClasslist("hint_leg_11")[0];
    const hint_leg_11_mobile = getClasslist("hint_leg_11_mobile")[0];
    const hint_leg_12 = getClasslist("hint_leg_12")[0];
    const hint_leg_12_mobile = getClasslist("hint_leg_12_mobile")[0];
    const hint_leg_13 = getClasslist("hint_leg_13")[0];
    const hint_leg_13_mobile = getClasslist("hint_leg_13_mobile")[0];
    const hint_leg_14 = getClasslist("hint_leg_14")[0];
    const hint_leg_14_mobile = getClasslist("hint_leg_14_mobile")[0];
    const hint_leg_15 = getClasslist("hint_leg_15")[0];
    const hint_leg_15_mobile = getClasslist("hint_leg_15_mobile")[0];
    const hint_leg_16 = getClasslist("hint_leg_16")[0];
    const hint_leg_16_mobile = getClasslist("hint_leg_16_mobile")[0];
    const hint_leg_17 = getClasslist("hint_leg_17")[0];
    const hint_leg_17_mobile = getClasslist("hint_leg_17_mobile")[0];
    const hint_leg_18 = getClasslist("hint_leg_18")[0];
    const hint_leg_18_mobile = getClasslist("hint_leg_18_mobile")[0];
    const hint_leg_19 = getClasslist("hint_leg_19")[0];
    const hint_leg_19_mobile = getClasslist("hint_leg_19_mobile")[0];
    const hint_leg_20 = getClasslist("hint_leg_20")[0];
    const hint_leg_20_mobile = getClasslist("hint_leg_20_mobile")[0];

    if (
      (device() === "labtop" && hint_leg_00.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_00_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_0").style.background = "white";
    } else {
      getElem("hint_0").style.background = "black";
    }

    if (
      (device() === "labtop" && hint_leg_ab.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_ab_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_a").style.background = "white";
      getElem("hint_b").style.background = "white";
    } else {
      getElem("hint_a").style.background = "black";
      getElem("hint_b").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_01.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_01_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_1").style.background = "white";
    } else {
      getElem("hint_1").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_02.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_02_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_2").style.background = "white";
    } else {
      getElem("hint_2").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_03.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_03_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_3").style.background = "white";
    } else {
      getElem("hint_3").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_04.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_04_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_4").style.background = "white";
    } else {
      getElem("hint_4").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_05.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_05_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_5").style.background = "white";
    } else {
      getElem("hint_5").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_06.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_06_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_6").style.background = "white";
    } else {
      getElem("hint_6").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_07.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_07_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_7").style.background = "white";
    } else {
      getElem("hint_7").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_08.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_08_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_8").style.background = "white";
    } else {
      getElem("hint_8").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_09.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_09_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_9").style.background = "white";
    } else {
      getElem("hint_9").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_10.getBoundingClientRect().y < window.innerHeight / 2 + 120) ||
      (device() != "labtop" && hint_leg_10_mobile.getBoundingClientRect().y < window.innerHeight / 2 + 50)
    ) {
      getElem("hint_10").style.background = "white";
    } else {
      getElem("hint_10").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_11.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_11_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_11").style.background = "white";
    } else {
      getElem("hint_11").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_12.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_12_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_12").style.background = "white";
    } else {
      getElem("hint_12").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_13.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_13_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_13").style.background = "white";
    } else {
      getElem("hint_13").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_14.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_14_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_14").style.background = "white";
    } else {
      getElem("hint_14").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_15.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_15_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_15").style.background = "white";
    } else {
      getElem("hint_15").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_16.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_16_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_16").style.background = "white";
    } else {
      getElem("hint_16").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_17.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_17_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_17").style.background = "white";
    } else {
      getElem("hint_17").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_18.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_18_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_18").style.background = "white";
    } else {
      getElem("hint_18").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_19.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_19_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_19").style.background = "white";
    } else {
      getElem("hint_19").style.background = "black";
    }
    if (
      (device() === "labtop" && hint_leg_20.getBoundingClientRect().y < window.innerHeight / 2) ||
      (device() != "labtop" && hint_leg_20_mobile.getBoundingClientRect().y < window.innerHeight / 2)
    ) {
      getElem("hint_20").style.background = "white";
    } else {
      getElem("hint_20").style.background = "black";
    }
    /////////////////////////
    const leg_section_1 = get_position("leg_section_1_wrapper");
    const leg_section_1_mobile = get_position("leg_section_1_wrapper_mobile");
    const leg_section_2_mobile = get_position("leg_section_2_wrapper_mobile");
    const leg_section_2 = get_position("leg_section_2_wrapper");
    const expand_image = get_position("expand_image");
    if (
      (leg_section_1.y < 0 && leg_section_1.y > -leg_section_1.height + 500) ||
      (leg_section_1_mobile.y < 0 && leg_section_1_mobile.y > -leg_section_1_mobile.height) ||
      (leg_section_2_mobile.y < 0 && leg_section_2_mobile.y > -leg_section_2_mobile.height) ||
      (leg_section_2.y < 0 && leg_section_2.y > -leg_section_2.height) ||
      (expand_image.y < 0 && expand_image.y > -expand_image.height / 2)
    ) {
      getElem("pagination").style.opacity = 1;
    } else {
      getElem("pagination").style.opacity = 0;
    }
  });
};
export default GetPosition;
