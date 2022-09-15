import React from "react";
import Image from "next/image";
export const Intro = () => {
  return (
    <div id="intro" className="container mx-auto ">
      <div className=" h3">
        <div className="relative w-[820px] h-[320px] top-[80px]  hidden lg:block ">
          <Image src="/images/intro_leg_1.svg" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-[290px] h-[255px]  top-[10%] mx-auto lg:hidden ">
          <Image src="/images/intro_leg_1_mobile.svg" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-[610px] h-[300px] ml-auto  hidden lg:block">
          <Image src="/images/intro_leg_2.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="relative h-[720px]  mt-[100px] mx-auto hidden lg:block">
        <Image src="/images/intro_2.svg" layout="fill" objectFit="contain" />
      </div>
      <div className="relative h-[1000px] w-[320px] mx-auto  mt-[100px] lg:hidden">
        <Image src="/images/intro_2_mobile.svg" layout="fill" objectFit="contain" />
      </div>
      <div className="relative h-[720px] mx-auto  hidden lg:block">
        <Image src="/images/intro_3.svg" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};
