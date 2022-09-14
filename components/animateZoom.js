import { device } from "./util";
export const animateZoom = (x, y) => {
  if (device() != "tablet" && device() != "mobile") {
    const circleCursorZoom = document.querySelector(".cursor-circle-zoom");
    const imageRect = document.getElementById("image_zoom").getBoundingClientRect();
    const imageWidth = imageRect.width;
    const imageHeight = imageRect.height;
    let xPosition = x - imageRect.left;
    let yPosition = y - imageRect.top;
    let bgPositionX = (xPosition * 100) / imageWidth;
    let bgPositionY = (yPosition * 100) / imageHeight;
    if (x > imageRect.x && x < imageRect.x + imageRect.width && y > imageRect.y && y < imageRect.height + imageRect.y) {
      circleCursorZoom.classList.add("zoom-active");
      circleCursorZoom.style.backgroundImage = "url('/images/diagram_part1.svg')";
      circleCursorZoom.style.backgroundPosition = bgPositionX + "% " + bgPositionY + "%";
    } else {
      circleCursorZoom.classList.remove("zoom-active");
    }
  }
};
