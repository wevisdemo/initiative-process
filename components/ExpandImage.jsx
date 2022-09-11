// import { TransformComponent, TransformWrapper } from "@pronestor/react-zoom-pan-pinch";
// import Image from "next/image";
export const ExpandImage = () => {
  return (
    <div id="expand_image" className="relative z-20 ">
      <div className="h-screen lg:hidden " />
      <div className="relative flex items-center justify-center min-h-screen bg-black ">
        <div className="absolute top-0 right-0 m-20">ย้อนกลับ</div>
        {/* <TransformWrapper>
          <TransformComponent>
            <div className={` relative w-screen h-screen`}>
              <Image src="/images/main_diagram.svg" layout="fill" objectFit="contain" />
            </div>
          </TransformComponent>
        </TransformWrapper> */}
        <div className="absolute bottom-0 right-0 m-20">ไปต่อ</div>
      </div>
    </div>
  );
};
