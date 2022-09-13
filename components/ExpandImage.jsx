import { TransformComponent, TransformWrapper } from "@pronestor/react-zoom-pan-pinch";
import Image from "next/image";
import { ScrollTo } from "./util";
export const ExpandImage = () => {
  const onClickScrollTo = (type) => {
    const bg = document.getElementById("bg_expand_image");
    bg.style.display = "flex";
    if (type === "prev") {
      return ScrollTo("#CompareStep7");
    }
    if (type === "next") {
      return ScrollTo("#CompareStep7");
    }
  };
  return (
    <div className="relative z-20 ">
      <div className="h-screen lg:hidden " />
      <div className="relative flex items-center justify-center min-h-screen bg-black " id="expand_image">
        <div
          className="absolute top-0 right-0 z-20 flex flex-col items-center m-20 cursor-pointer b5"
          onClick={() => onClickScrollTo("prev")}
        >
          <div className={` relative w-[24px] h-[24px] rotate-180 `}>
            <Image src="/images/chevron.svg" layout="fill" objectFit="contain" />
          </div>
          ย้อนกลับ
        </div>
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-50"
          id="bg_expand_image"
        >
          <p className="h4">เหมือนจะมีความหวัง แต่สุดท้ายต้องตกไป</p>
          <div className="flex ">
            <div className={` relative w-[17px] h-[24px] mr-3`}>
              <Image src="/images/click_scarlet.svg" layout="fill" objectFit="contain" />
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
                <div className={` relative w-screen h-screen cursor-grab z-20`}>
                  <Image src="/images/main_diagram.svg" layout="fill" objectFit="contain" />
                </div>
              </TransformComponent>
            </div>
          )}
        </TransformWrapper>
        <div
          className="absolute bottom-0 right-0 flex flex-col items-center m-20 cursor-pointer b5"
          onClick={() => onClickScrollTo("next")}
        >
          ไปต่อ
          <div className={` relative w-[24px] h-[24px] `}>
            <Image src="/images/chevron.svg" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
};
