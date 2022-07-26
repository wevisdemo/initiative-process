import React from "react";
import { ExpandYear } from "./ExpandYear";

export const WrapperExpand = () => {
  return (
    <div className="relative">
      <div className="relative h-[300vh]  bg-lime">
        <ExpandYear />
        <div className="w-full h-screen "></div>
        <div className="w-full h-screen bg-green"></div>
      </div>
    </div>
  );
};
