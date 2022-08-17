import unexpand from "../public/images/unexpand.svg";
import expand from "../public/images/expand.svg";
import Image from "next/image";
export const sample = require("../public/data/sample.json");
export const ExpandStep = ({ step, isStep_1, setStep_1, isStep_2, setStep_2, isStep_3, setStep_3 }) => {
  const expanding = (isStep, setStep) => {
    setStep(!isStep);
  };

  return (
    <div className="flex flex-col space-y-2 ">
      {sample.map((s) => (
        <div key={s.name}>
          {s.step === "1" && (
            <div
              className={`bg-black bg-opacity-75 border-[1px] border-white relative   rounded-lg p-4 max-w-6xl ${
                step === s.step ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={` absolute  left-[16px] py-2  px-4 rounded-full top-[8px] b5 font-bold ${
                  s.type === "เหมือนกัน" ? " bg-mint text-black" : "bg-scarlet text-white"
                } `}
              >
                {s.type}
              </div>
              <div id="header" className="text-center ">
                {s.name}
              </div>
              <div className="absolute right-0 top-0 pt-[12px] pr-[24px] ">
                <div
                  className=" relative w-[24px] h-[24px] mr-2 cursor-pointer"
                  onClick={() => expanding(isStep_1, setStep_1)}
                >
                  {isStep_1 ? (
                    <Image src={unexpand} layout="fill" objectFit="contain" />
                  ) : (
                    <Image src={expand} layout="fill" objectFit="contain" />
                  )}
                </div>
              </div>
              {isStep_1 && (
                <div id="sampling" className="flex mt-2 text-black ">
                  {s.sampling.map((t) => (
                    <div className="flex items-center justify-center flex-1 my-2" key={t}>
                      <div
                        dangerouslySetInnerHTML={{ __html: t }}
                        key={t}
                        className="bg-white max-w-[292px] px-4 py-2 rounded-lg b5 "
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {s.step === "2" && (
            <div
              className={`bg-black  border-[1px] border-white relative    rounded-lg p-4 max-w-6xl ${
                step === s.step ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={` absolute  left-[16px] py-2  px-4 rounded-full top-[8px] b5 font-bold ${
                  s.type === "เหมือนกัน" ? " bg-mint text-black" : "bg-scarlet text-white"
                } `}
              >
                {s.type}
              </div>
              <div id="header" className="text-center ">
                {s.name}
              </div>
              <div className="absolute right-0 top-0 pt-[12px] pr-[24px] ">
                <div
                  className=" relative w-[24px] h-[24px] mr-2 cursor-pointer"
                  onClick={() => expanding(isStep_2, setStep_2)}
                >
                  {isStep_2 ? (
                    <Image src={unexpand} layout="fill" objectFit="contain" />
                  ) : (
                    <Image src={expand} layout="fill" objectFit="contain" />
                  )}
                </div>
              </div>
              {isStep_2 && (
                <div id="sampling" className="flex mt-2 text-black ">
                  {s.sampling.map((t) => (
                    <div className="flex items-center justify-center flex-1 my-2" key={t}>
                      <div
                        dangerouslySetInnerHTML={{ __html: t }}
                        key={t}
                        className="bg-white max-w-[292px] px-4 py-2 rounded-lg b5 "
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {s.step === "3" && (
            <div
              className={`bg-black border-[1px] border-white relative    rounded-lg p-4 max-w-6xl ${
                step === s.step ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={` absolute  left-[16px] py-2  px-4 rounded-full top-[8px] b5 font-bold ${
                  s.type === "เหมือนกัน" ? " bg-mint text-black" : "bg-scarlet text-white"
                } `}
              >
                {s.type}
              </div>
              <div id="header" className="text-center ">
                {s.name}
              </div>
              <div className="absolute right-0 top-0 pt-[12px] pr-[24px] ">
                <div
                  className=" relative w-[24px] h-[24px] mr-2 cursor-pointer"
                  onClick={() => expanding(isStep_3, setStep_3)}
                >
                  {isStep_3 ? (
                    <Image src={unexpand} layout="fill" objectFit="contain" />
                  ) : (
                    <Image src={expand} layout="fill" objectFit="contain" />
                  )}
                </div>
              </div>
              {isStep_3 && (
                <div id="sampling" className="flex mt-2 text-black ">
                  {s.sampling.map((t) => (
                    <div className="flex items-center justify-center flex-1 my-2" key={t}>
                      <div
                        dangerouslySetInnerHTML={{ __html: t }}
                        key={t}
                        className="bg-white max-w-[292px] px-4 py-2 rounded-lg b5 "
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
