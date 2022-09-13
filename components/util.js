export const color_circle = (type) => {
  if (type === "สังคม") return "#EFFF8B";
  if (type === "เศรษฐกิจ") return "#9B8CCD";
  if (type === "การเมือง") return "#49AB93";
  if (type === "ศาสนาและวัฒนธรรม") return "#0031DE";
};

export const circle_type = (type, year) => {
  if (type == "สังคม") {
    if (year == "2540") {
      return "/images/social_40.svg";
    }
    if (year == "2550") {
      return "/images/social_50.svg";
    }
    if (year == "2560") {
      return "/images/social_60.svg";
    }
  }

  if (type == "เศรษฐกิจ") {
    if (year == "2540") {
      return "/images/eco_40.svg";
    }
    if (year == "2550") {
      return "/images/eco_50.svg";
    }
    if (year == "2560") {
      return "/images/eco_60.svg";
    }
  }
  if (type == "การเมือง") {
    if (year == "2540") {
      return "/images/politic_40.svg";
    }
    if (year == "2550") {
      return "/images/politic_50.svg";
    }
    if (year == "2560") {
      return "/images/politic_60.svg";
    }
  }
  if (type == "ศาสนาและวัฒนธรรม") {
    if (year == "2550") {
      return "/images/religion_50.svg";
    }
    if (year == "2560") {
      return "/images/religion_60.svg";
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
  return document.body.clientWidth < 768 ? "mobile" : "tablet";
};

export const ScrollTo = (elem) => {
  setTimeout(() => {
    document.querySelector(elem).scrollIntoView({ behavior: "smooth" });
  }, 0);
};
