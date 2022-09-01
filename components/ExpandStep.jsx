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
              className={`bg-black bg-opacity-75 border-[1px] hidden  lg:flex flex-col border-white relative mx-auto max-w-[292px]   rounded-lg p-2 lg:p-4 lg:max-w-6xl ${
                step === s.step ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex ">
                <div
                  className={`  py-2 h-[29px] flex items-center  px-4 rounded-full  b5 font-bold ${
                    s.type === "เหมือนกัน" ? " bg-mint text-black" : "bg-scarlet text-white"
                  } `}
                >
                  {s.type}
                </div>
                <div id="header" className="flex-1 px-2 text-center ">
                  {s.name}
                </div>
                <div className="pt-[12px] ">
                  <div
                    className=" relative lg:w-[24px] w-[14px] h-[14px] lg:h-[24px] mr-2 cursor-pointer"
                    onClick={() => expanding(isStep_1, setStep_1)}
                  >
                    {isStep_1 ? (
                      <Image src={unexpand} layout="fill" objectFit="contain" />
                    ) : (
                      <Image src={expand} layout="fill" objectFit="contain" />
                    )}
                  </div>
                </div>
              </div>
              {isStep_1 && (
                <div id="sampling" className="flex flex-col mt-2 text-black lg:flex-row ">
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
              className={`bg-black bg-opacity-75 border-[1px]  hidden  lg:flex  flex-col border-white relative mx-auto max-w-[292px]   rounded-lg p-2 lg:p-4 lg:max-w-6xl ${
                step === s.step ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex ">
                <div
                  className={`  py-2 h-[29px] flex items-center  px-4 rounded-full  b5 font-bold ${
                    s.type === "เหมือนกัน" ? " bg-mint text-black" : "bg-scarlet text-white"
                  } `}
                >
                  {s.type}
                </div>
                <div id="header" className="flex-1 px-2 text-center ">
                  {s.name}
                </div>
                <div className="pt-[12px] ">
                  <div
                    className=" relative lg:w-[24px] w-[14px] h-[14px] lg:h-[24px] mr-2 cursor-pointer"
                    onClick={() => expanding(isStep_2, setStep_2)}
                  >
                    {isStep_2 ? (
                      <Image src={unexpand} layout="fill" objectFit="contain" />
                    ) : (
                      <Image src={expand} layout="fill" objectFit="contain" />
                    )}
                  </div>
                </div>
              </div>
              {isStep_2 && (
                <div id="sampling" className="flex flex-col mt-2 text-black lg:flex-row ">
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
              className={`bg-black bg-opacity-75 border-[1px] hidden  lg:flex  flex-col border-white relative mx-auto max-w-[292px]   rounded-lg p-2 lg:p-4 lg:max-w-6xl ${
                step === s.step ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex ">
                <div
                  className={`  py-2 h-[29px] flex items-center  px-4 rounded-full  b5 font-bold ${
                    s.type === "เหมือนกัน" ? " bg-mint text-black" : "bg-scarlet text-white"
                  } `}
                >
                  {s.type}
                </div>
                <div id="header" className="flex-1 px-2 text-center ">
                  {s.name}
                </div>
                <div className="pt-[12px] ">
                  <div
                    className=" relative lg:w-[24px] w-[14px] h-[14px] lg:h-[24px] mr-2 cursor-pointer"
                    onClick={() => expanding(isStep_3, setStep_3)}
                  >
                    {isStep_3 ? (
                      <Image src={unexpand} layout="fill" objectFit="contain" />
                    ) : (
                      <Image src={expand} layout="fill" objectFit="contain" />
                    )}
                  </div>
                </div>
              </div>
              {isStep_3 && (
                <div id="sampling" className="flex flex-col mt-2 text-black lg:flex-row ">
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
          {/* mobile */}
          <div className="bg-black bg-opacity-75 border-[1px] lg:hidden flex flex-col border-white relative mx-auto max-w-[292px]  rounded-lg p-2">
            <div className="flex ">
              <div
                className={`  py-2 h-[29px] flex items-center  px-4 rounded-full  b5 font-bold ${
                  s.type === "เหมือนกัน" ? " bg-mint text-black" : "bg-scarlet text-white"
                } `}
              >
                {s.type}
              </div>
              <div id="header" className="flex-1 px-2 text-center ">
                {s.name}
              </div>
              {s.step === "1" && (
                <div className="pt-[12px] ">
                  <div
                    className=" relative lg:w-[24px] w-[14px] h-[14px] lg:h-[24px] mr-2 cursor-pointer"
                    onClick={() => expanding(isStep_1, setStep_1)}
                  >
                    {isStep_1 ? (
                      <Image src={unexpand} layout="fill" objectFit="contain" />
                    ) : (
                      <Image src={expand} layout="fill" objectFit="contain" />
                    )}
                  </div>
                </div>
              )}
              {s.step === "2" && (
                <div className="pt-[12px] ">
                  <div
                    className=" relative lg:w-[24px] w-[14px] h-[14px] lg:h-[24px] mr-2 cursor-pointer"
                    onClick={() => expanding(isStep_2, setStep_2)}
                  >
                    {isStep_2 ? (
                      <Image src={unexpand} layout="fill" objectFit="contain" />
                    ) : (
                      <Image src={expand} layout="fill" objectFit="contain" />
                    )}
                  </div>
                </div>
              )}
              {s.step === "3" && (
                <div className="pt-[12px] ">
                  <div
                    className=" relative lg:w-[24px] w-[14px] h-[14px] lg:h-[24px] mr-2 cursor-pointer"
                    onClick={() => expanding(isStep_3, setStep_3)}
                  >
                    {isStep_3 ? (
                      <Image src={unexpand} layout="fill" objectFit="contain" />
                    ) : (
                      <Image src={expand} layout="fill" objectFit="contain" />
                    )}
                  </div>
                </div>
              )}
            </div>

            {s.step === "1" && isStep_1 && (
              <div id="sampling" className="flex flex-col mt-2 text-black lg:flex-row ">
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
            {s.step === "2" && isStep_2 && (
              <div id="sampling" className="flex flex-col mt-2 text-black lg:flex-row ">
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
            {s.step === "3" && isStep_3 && (
              <div id="sampling" className="flex flex-col mt-2 text-black lg:flex-row ">
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
        </div>
      ))}
    </div>
  );
};
