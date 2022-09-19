import { device } from "./util";
export const animateZoom = (x, y, id) => {
  if (device() === "labtop" && id) {
    const circleCursorZoom = document.querySelector(".cursor-circle-zoom");
    const imageRect = document.getElementById(id).getBoundingClientRect();
    const imageWidth = imageRect.width;
    const imageHeight = imageRect.height;
    let xPosition = x - imageRect.left;
    let yPosition = y - imageRect.top;
    let bgPositionX = (xPosition * 100) / imageWidth;
    let bgPositionY = (yPosition * 100) / imageHeight;
    if (x > imageRect.x && x < imageRect.x + imageRect.width && y > imageRect.y && y < imageRect.height + imageRect.y) {
      circleCursorZoom.style.backgroundPosition = bgPositionX + "% " + bgPositionY + "%";
    }
  }
};
