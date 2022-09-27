import { TransformComponent, TransformWrapper } from "@pronestor/react-zoom-pan-pinch";

import { ScrollTo } from "./util";
export const ExpandImage = () => {
  const onClickScrollTo = (type) => {
    const bg = document.getElementById("bg_expand_image");
    bg.style.display = "flex";
    if (type === "prev") {
      return ScrollTo("#CompareStep7", "start");
    }
    if (type === "next") {
      return ScrollTo("#summary_section", "start");
    }
  };

  const hideBG = () => {
    const bg = document.getElementById("bg_expand_image");
    bg.style.display = "none";
    ScrollTo("#expand_image", "start");
  };
  return (
    <div className="relative z-20 ">
      <div className="h-screen lg:hidden " />
      <div className="relative flex items-center justify-center min-h-screen bg-black " id="expand_image">
        <div
          className="absolute top-0 right-0 z-20 flex flex-col items-center m-10 cursor-pointer md:m-20 b5"
          onClick={() => onClickScrollTo("prev", "center")}
        >
          <div className={` relative w-[24px] h-[24px] rotate-180 `}>
            <img src={require("assets/images/chevron.svg")} alt="image" />
          </div>
          ย้อนกลับ
        </div>
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-50 cursor-pointer"
          id="bg_expand_image"
          onClick={() => hideBG()}
        >
          <p className="h4">
            เหมือนจะมีความหวัง
            <br className=" md:hidden" /> แต่สุดท้ายต้องตกไป
          </p>
          <div className="flex ">
            <div className={` relative w-[17px] h-[24px] mr-3`}>
              <img src={require("assets/images/click_scarlet.svg")} alt="image" />
            </div>
            <p className="b3 text-scarlet">ลองสำรวจขั้นตอนทั้งหมด</p>
          </div>
        </div>
        <TransformWrapper wheel={{ disabled: false }}>
          {({ zoomIn, zoomOut }) => (
            <div className="relative ">
              <div className="absolute bottom-0 left-0 z-30 m-8">
                <p className="mb-3 opacity-50 b5" id="hint">
                  ขยายมุมมอง
                </p>
                <div className="flex">
                  <button onClick={() => zoomIn()} className="zoom ">
                    +
                  </button>

                  <button onClick={() => zoomOut()} className="ml-4 zoom">
                    -
                  </button>
                </div>
              </div>
              <TransformComponent>
                <img
                  src={require("assets/images/main_diagram.svg")}
                  alt="image"
                  className={` relative w-screen h-screen cursor-grab z-20`}
                />
              </TransformComponent>
            </div>
          )}
        </TransformWrapper>
        <div
          className="absolute bottom-0 right-0 flex flex-col items-center m-10 cursor-pointer md:m-20 b5"
          onClick={() => onClickScrollTo("next", "center")}
        >
          ไปต่อ
          <div className={` relative w-[24px] h-[24px] `}>
            <img src={require("assets/images/chevron.svg")} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};
