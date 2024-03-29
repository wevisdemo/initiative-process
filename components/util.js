export const color_circle = (type) => {
  if (type === "สังคม") return "#EFFF8B";
  if (type === "เศรษฐกิจ") return "#9B8CCD";
  if (type === "การเมือง") return "#49AB93";
  if (type === "ศาสนาและวัฒนธรรม") return "#0031DE";
};

export const circle_type = (type, year) => {
  if (type == "สังคม") {
    if (year == "2540") {
      return require("assets/images/social_40.svg");
    }
    if (year == "2550") {
      return require("assets/images/social_50.svg");
    }
    if (year == "2560") {
      return require("assets/images/social_60.svg");
    }
  }

  if (type == "เศรษฐกิจ") {
    if (year == "2540") {
      return require("assets/images/eco_40.svg");
    }
    if (year == "2550") {
      return require("assets/images/eco_50.svg");
    }
    if (year == "2560") {
      return require("assets/images/eco_60.svg");
    }
  }
  if (type == "การเมือง") {
    if (year == "2540") {
      return require("assets/images/politic_40.svg");
    }
    if (year == "2550") {
      return require("assets/images/politic_50.svg");
    }
    if (year == "2560") {
      return require("assets/images/politic_60.svg");
    }
  }
  if (type == "ศาสนาและวัฒนธรรม") {
    if (year == "2550") {
      return require("assets/images/religion_50.svg");
    }
    if (year == "2560") {
      return require("assets/images/religion_60.svg");
    }
  }
};

export const vhToPixels = (vh) => {
  return Math.round(window.innerHeight / (100 / vh));
};

export const vwToPixels = (vw) => {
  const wrapper = 1152;
  return Math.round(wrapper / (100 / vw));
};

export const label_filter = (label) => {
  if (label === "a") {
    return 21;
  } else if (label === "b") {
    return 22;
  }
  return label;
};

export const device = () => {
  if (document.body.clientWidth < 768) return "mobile";
  if (document.body.clientWidth < 1025 && document.body.clientWidth >= 768) return "tablet";
  return "labtop";
};

export const ScrollTo = (elem, block) => {
  setTimeout(() => {
    document.querySelector(elem).scrollIntoView({ behavior: "smooth", block: block });
  }, 0);
};
