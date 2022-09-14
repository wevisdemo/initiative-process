import { drawBalls2040 } from "./drawBalls2040";
import { drawBalls2050 } from "./drawBalls2050";
import { drawBalls2060 } from "./drawBalls2060";
import { y_2540, y_2550, y_2560 } from "../../../public/data/part_2/constitution";

export const IntroPart2 = ({ current }) => {
  let isDrawed = false;
  const start = () => {
    if (!isDrawed) {
      drawBalls2040(current.world, y_2540);
      drawBalls2050(current.world, y_2550);
      drawBalls2060(current.world, y_2560);
    }
    isDrawed = true;
  };
  return (
    <div
      className="relative flex flex-col items-center text-center pointer-events-none "
      onClick={() => start()}
      id="click_start_draw_section_2"
    >
      <p className="b4">
        จาก 33 ฉบับ <br />
        ที่ผ่านเข้าสู่วาระการประชุม <br />
        กระบวนการต่อไป คือ
      </p>
      <p className="font-black h4"> ขั้นตอนการพิจารณากฎหมาย</p>
      <div className="absolute top-0 flex flex-wrap opacity-0 ">
        {y_2540.map((d, index) => (
          <div key={index} className={`${d["รธน."]}_${d["ลำดับ"]}_2 }`}>
            .
          </div>
        ))}
        {y_2550.map((d, index) => (
          <div key={index} className={`${d["รธน."]}_${d["ลำดับ"]}_2 }`}>
            .
          </div>
        ))}
        {y_2560.map((d, index) => (
          <div key={index} className={`${d["รธน."]}_${d["ลำดับ"]}_2 }`}>
            .
          </div>
        ))}
      </div>
    </div>
  );
};
