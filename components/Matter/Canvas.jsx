import { useEffect, useCallback, memo } from "react";
const Canvas = () => {
  const getElem = useCallback(() => {
    const elem = document.querySelectorAll("#balls");
    console.log(elem);
  }, []);
  let users = require("../../public/data/2540.json");

  useEffect(() => {
    getElem();
  }, []);

  return (
    <div className="sticky top-0 w-full bg-black ">
      <div className="grid grid-cols-10 ">
        {users.map((m, index) => (
          <div key={index} id="balls" className="w-[24px] h-[24px] border-white border-2 rounded-full m-[5px]" />
        ))}
      </div>
    </div>
  );
};

export default memo(Canvas);
