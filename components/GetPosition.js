import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const GetPosition = (setStep_1, setStep_2, setStep_3, firstStep_3, setFirstStep_3, drawBalls, setDrawBalls) => {
  const getElem = (id) => {
    return document.getElementById(id);
  };

  const get_position = (elem) => {
    if (elem) {
      return getElem(elem).getBoundingClientRect();
    }
  };
  useScrollPosition(({ prevPos, currPos }) => {
    const expand_step_0 = get_position("expand_step_0");
    const expand_step_1 = get_position("expand_step_1");
    const expand_step_3 = get_position("expand_step_3");
    const section_2 = get_position("click_start_draw_section_2");
    const section_2_btn = getElem("click_start_draw_section_2");
    const detail_step_1 = get_position("detail_step_1");
    const detail_step_2 = get_position("detail_step_2");

    if (expand_step_0.y > expand_step_0.height / 2) {
      getElem("step_0").style.display = "flex";
      getElem("step_1").style.display = "none";
    }
    if (expand_step_0.y < expand_step_0.height / 2) {
      getElem("step_0").style.display = "none";
      getElem("step_1").style.display = "flex";
    }
    if (expand_step_1.y < expand_step_1.height / 2) {
      getElem("step_1").style.display = "none";
      getElem("step_2").style.display = "block";
    }
    if (expand_step_1.y > expand_step_1.height / 2) {
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
    if (detail_step_1.y < detail_step_1.height / 2) {
      getElem("DiagramPart2").style.opacity = 1;
      getElem("DiagramPart2Full").style.opacity = 0;
    }

    if (detail_step_2.y < detail_step_2.height / 2) {
      getElem("DiagramPart2").style.opacity = 0;
      getElem("DiagramPart2Full").style.opacity = 1;
    }
  });
};
export default GetPosition;
