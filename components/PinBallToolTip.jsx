import { circle_type, color_circle } from "./util";
import Image from "next/image";
import { device } from "./util";
export const PinBallToolTip = ({ data }) => {
  const openTooltip = (d) => {
    const onHover = document.getElementById(d["ลำดับ"]);
    onHover.style.display = "block";

    if (device() != "labtop") {
      const original_left = onHover.getBoundingClientRect().left;
      const width = window.innerWidth;
      onHover.style.left = width / 2 - original_left - 146 + "px";
    }
  };
  const closeTooltip = (index) => {
    const onHover = document.getElementById(index);
    onHover.style.display = "none";
  };
  const type_ball = (year) => {
    if (year === 2540) return "/images/circle_white_type_1.svg";
    if (year === 2550) return "/images/circle_white_type_2.svg";
    if (year === 2560) return "/images/circle_white_type_3.svg";
  };

  const ToolTip = ({ d }) => {
    return (
      <div
        className=" absolute translate-y-[-100%] top-[-24px] left-[50%] -translate-x-[50%] z-20 hidden "
        id={d["ลำดับ"]}
      >
        <div className=" border border-white rounded-[10px] w-[292px] bg-black b6 p-4 flex flex-col space-y-[4px]">
          <p className="font-bold ">ชื่อกฎหมาย:</p>
          <p>{d["ชื่อกฎหมาย"]}</p>

          <div>
            <span className="font-bold ">ผู้เสนอ: </span>
            <span className=" mr-[5px]">{d["ผู้เสนอร่าง"]}</span>
          </div>
          <div className="flex">
            <span className="font-bold mr-[5px] ">ประเภทกฎหมาย: </span>
            <span className=" mr-[5px] flex items-center">
              {d["ประเภท"]}
              <div
                className="w-[16px] h-[16px] rounded-full ml-[5px]"
                style={{ background: color_circle(d["ประเภท"]) }}
              />
            </span>
          </div>
          <div className="flex">
            <span className="font-bold mr-[5px] ">ปีที่เสนอรัฐธรรมนูญ: </span>
            <span className=" mr-[5px] flex items-center">
              {" "}
              <div className=" relative w-[16px] h-[16px]  mr-2">
                <Image src={type_ball(d["รธน."])} layout="fill" objectFit="contain" />
              </div>
              {d["รธน."]}
            </span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-wrap-reverse">
      {data.map((d, index) => (
        <div className="relative" key={index}>
          <button
            id={`${d["รธน."]}_${d["ลำดับ"]}`}
            className={`lg:w-[24px] w-[16px] h-[16px] lg:h-[24px] relative m-[3px] lg:m-[5px]  ${d["รธน."]}_${
              d["ลำดับ"]
            } balls_${d["locals"] || d["รธน."]}  `}
            onMouseEnter={() => openTooltip(d)}
            onMouseLeave={() => closeTooltip(d["ลำดับ"])}
          >
            <Image src={circle_type(d["ประเภท"], d["รธน."])} layout="fill" objectFit="contain" />
          </button>
          <ToolTip d={d} />
        </div>
      ))}
    </div>
  );
};
