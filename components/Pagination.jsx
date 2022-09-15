import React from "react";
import { ScrollTo, device } from "./util";

export const Pagination = () => {
  const data = [0, "a", "b", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  let name;
  const clickScroll = (id) => {
    if (id === 0) {
      name = device() === "labtop" ? "leg_01" : "leg_01_mobile";
    }
    if (id === "b" || id === "b") {
      name = device() === "labtop" ? "leg_02" : "leg_02_mobile";
    }
    if (id === 1) {
      name = device() === "labtop" ? "leg_03" : "leg_03_mobile";
    }
    if (id === 2) {
      name = device() === "labtop" ? "leg_04" : "leg_04_mobile";
    }
    if (id === 3) {
      name = device() === "labtop" ? "leg_05" : "leg_05_mobile";
    }
    if (id === 4) {
      name = device() === "labtop" ? "leg_06" : "leg_06_mobile";
    }
    if (id === 5) {
      name = device() === "labtop" ? "leg_08" : "leg_08_mobile";
    }
    if (id === 6) {
      name = device() === "labtop" ? "leg_09" : "leg_09_mobile";
    }

    if (id === 7) {
      name = device() === "labtop" ? "leg_10" : "leg_10_mobile";
    }
    if (id === 8) {
      name = device() === "labtop" ? "leg_12" : "leg_12_mobile";
    }
    if (id === 9) {
      name = device() === "labtop" ? "leg_13" : "leg_13_mobile";
    }

    if (id === 10) {
      name = device() === "labtop" ? "leg_14" : "leg_14_mobile";
    }
    if (id === 11) {
      name = device() === "labtop" ? "leg_15" : "leg_15_mobile";
    }
    if (id === 12) {
      name = device() === "labtop" ? "leg_16" : "leg_16_mobile";
    }
    if (id === 13) {
      name = device() === "labtop" ? "leg_17" : "leg_17_mobile";
    }
    if (id === 14) {
      name = device() === "labtop" ? "leg_18" : "leg_18_mobile";
    }
    if (id === 15) {
      name = device() === "labtop" ? "leg_19" : "leg_19_mobile";
    }
    if (id === 16) {
      name = device() === "labtop" ? "leg_20" : "leg_20_mobile";
    }
    if (id === 17) {
      name = device() === "labtop" ? "leg_21" : "leg_21_mobile";
    }
    if (id === 18) {
      name = device() === "labtop" ? "leg_25" : "leg_25_mobile";
    }
    if (id === 19) {
      name = device() === "labtop" ? "leg_26" : "leg_26_mobile";
    }
    if (id === 20) {
      name = device() === "labtop" ? "leg_27" : "leg_27_mobile";
    }

    if (name) ScrollTo("#" + name);
  };
  return (
    <div className="fixed  top-[50%] translate-y-[-50%] z-40 " id="pagination">
      <div className="flex flex-col space-y-2 ">
        {data.map((d) => (
          <button
            onClick={() => clickScroll(d)}
            key={d}
            id={`hint_${d}`}
            className="w-[12px] h-[12px] rounded-full border border-white  relative hover:scale-[1.75] "
          >
            <div className="absolute w-full h-full text-black rounded-full opacity-0 hint hover:opacity-100 hover:bg-white">
              {d}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
